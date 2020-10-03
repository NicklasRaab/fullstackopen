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
      <Part part={props.parts[0].name} exersices={props.parts[0].exersices} />
      <Part part={props.parts[1].name} exersices={props.parts[1].exersices} />
      <Part part={props.parts[2].name} exersices={props.parts[2].exersices} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exersices}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props.parts[0])
  return (
    <div>
<p>Number of exersices {props.parts[0].exersices + props.parts[1].exersices + props.parts[2].exersices}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exersices: 10
    },
    {
      name: 'Using props to pass data',
      exersices: 7
    },
    {
      name: 'State of a component',
      exersices: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
