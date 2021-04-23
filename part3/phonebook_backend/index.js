require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

//////////////// Express //////////////////////////////////
const app = express();
app.use(express.json());
app.use(express.static('build'));

/////////////// Middlewares - morgan, cors ///////////////
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(
  morgan(':method :url :status :res[content-length] :response-time ms - :body')
);
app.use(cors());

//////////////// Error handlers - middlewares //////////////
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  console.log(error.message);
  if (error.name == 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  }
  next(error);
};

///////////// Routes //////////////////////////////////
// GET
app.get('/', (request, response) => {
  response.send('<h1>Phonebook API</h1>');
});

// Get all people
app.get('/api/persons', (request, response) => {
  Person.find({}).then((people) => {
    response.json(people);
  });
});

// Get individual person
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// DELETE
app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// POST
app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'name or number is missing' });
  }
  if (persons.find((person) => person.name == body.name)) {
    return response.status(400).json({ error: 'name must be unique' });
  }

  const person = new Person({
    name: body.name,
    number: body.number
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

// Info
app.get('/info', (request, response) => {
  const currentTime = new Date();
  const count = persons.length;
  response.send(`
    <p>Phonebook has info for ${count} people</p>
    <p>${currentTime}</>
  `);
});

////////////////////////////////////////////////////////
// handler of requests with unknown endpoint
app.use(unknownEndpoint);

// handler of requests with malformatted id
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
