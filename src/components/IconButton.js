import React from 'react';

const IconButton = (props) => {
    return(
        <div className="btn" style={{backgroundColor: props.bgColor}}>
            <span>{props.buttonTitle}</span>
             <span id="icon-placeholder" className={props.icon}></span>
        </div>
    )
}

export default IconButton;