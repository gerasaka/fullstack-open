const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
  <>
    <Part name={parts[0]["name"]} number={parts[0]["exercises"]} />
    <Part name={parts[1]["name"]} number={parts[1]["exercises"]} />
    <Part name={parts[2]["name"]} number={parts[2]["exercises"]} />
  </>
);

const Part = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);

const Total = ({ parts }) => {
  const total = parts
    .map((num) => num["exercises"])
    .reduce((val, curr) => val + curr);

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course["parts"]} />
      <Total parts={course["parts"]} />
    </div>
  );
};

export default App;
