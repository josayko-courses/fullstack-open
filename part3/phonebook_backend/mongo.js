const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.zfejt.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String
});

const Person = mongoose.model('Person', personSchema);

// Retrieve all data in the database
const get_people = () => {
  console.log('phonebook:');
  Person.find({}).then((persons) => {
    persons.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
};

// Create a new entry in the collection (collection's name will be plural of 1st arg 'Person' => 'people')

const add_person = (name, number) => {
  const person = new Person({
    name: name,
    number: number
  });

  person.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
};

if (process.argv.length == 3) {
  get_people();
} else if (process.argv.length == 4) {
  console.log('Too few arguments');
  process.exit(1);
} else if (process.argv.length == 5) {
  add_person(process.argv[3], process.argv[4]);
} else {
  console.log('Too much arguments');
  process.exit(1);
}
