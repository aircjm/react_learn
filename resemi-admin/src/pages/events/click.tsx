import React from "react";



// 点击事件在react中如何触发
export default function Click() {
    function handleClick() {
        alert("handle Click");
    };

    const handlerMouseMove = (e) => {
        alert(e);
    };

    return (
        <div>
            <a href="#" onClick={handleClick}>click</a>
            <br></br>
            <a href="#" onMouseMove={handlerMouseMove}>handlerMouseMove</a>
        </div>

    )
}
// todo onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit