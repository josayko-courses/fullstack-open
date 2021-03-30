import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
  return (
    <>
      <Header key={course.id} name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
