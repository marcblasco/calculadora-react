import React from "react";
import '../css/BtnClear.css'


const BtnClear = (props) => (
<div className="btn-clear" onClick={props.clearScreen}>
    {props.children}
</div>
);

export default BtnClear