import React from "react";


const DestructProps = (props: any) => {


    return (
        <div>{props.name}</div>
    )
}




export const DestructTest = () => {

    
    return (
        <DestructProps name="test Name"/>
    )
}