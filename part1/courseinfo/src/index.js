import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1.name} exersice={props.part1.exersices} />
      <Part part={props.part2.name} exersice={props.part2.exersices} />
      <Part part={props.part3.name} exersice={props.part3.exersices} />
    </div>
  )
}

const Part = (props) => {
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
  const part1 = {
    name: 'Fundamentals of React',
    exersices: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exersices: 7
  }
  const part3 = {
    name: 'State of a component',
    exersices: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exersices + part2.exersices + part3.exersices} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
