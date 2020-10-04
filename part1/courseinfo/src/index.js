import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exersices={props.course.parts[0].exersices} />
      <Part part={props.course.parts[1].name} exersices={props.course.parts[1].exersices} />
      <Part part={props.course.parts[2].name} exersices={props.course.parts[2].exersices} />
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
  return (
    <div>
      <p>Number of exersices {props.course.parts[0].exersices + props.course.parts[1].exersices + props.course.parts[2].exersices}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
