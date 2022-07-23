import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props: any) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
export const Props_Function = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}
