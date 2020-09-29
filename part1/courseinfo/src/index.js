import React from 'react';
import ReactDOM from 'react-dom';

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
      <h1>{course}</h1>
      <p>
        {part1} {exersice1}
      </p>
      <p>
        {part2} {exersice2}
      </p>
      <p>
        {part3} {exersice3}
      </p>
      <p>Number of exersices {exersice1 + exersice2 + exersice3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
