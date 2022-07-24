import React from "react";

// 通过map 简单遍历一个arraylist集合
export default function arraymap() {
    const numbers = [1,2,3,4,5,0];

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
        numbers.map((number: Number) => {return <div>{number}</div>})
    )
}