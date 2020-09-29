import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exersice}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exersices {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exersice1 = 10
  const part2 = 'Using props to pass data'
  const exersice2 = 7
  const part3 = 'State of a component'
  const exersice3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exersice={exersice1} />
      <Content part={part2} exersice={exersice2} />
      <Content part={part3} exersice={exersice3} />
      <Total total={exersice1 + exersice2 + exersice3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
