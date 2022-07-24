import React from "react";

// 通过map Mapping array of arrays
export default function arraymap() {
    const numbers = [
      ["dev", 1],
      ["test", 2],
      ["front", 3],
      ["back",  4]
    ];

    return (
        <div className='container'>
        <div>
          <h1>Numbers List</h1>
          <ul>
          <NumberFor numbers={numbers}/>
          </ul>
        </div>
      </div>
    )
}


function NumberFor({numbers})  {
    return (
        numbers.map((number) => {return <Business Business={number}/>})
    )
}


function Business({Business: [name, num]})  {
  return (
    <div>
       <li>{name}</li>
     <li>{num}</li>
    </div>
  )
}