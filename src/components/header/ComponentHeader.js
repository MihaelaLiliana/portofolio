import React from "react";
import "./ComponentHeader.css"


function ComponentHeader({title, curentScreen, mihaela}) {
    return (
        <div className="header">
            
            <button className="button"
            onClick={() => {
                mihaela(title)

            }}>
                {title}
            </button>
            {curentScreen === title ? <div className={"underline"}></div> : null }
        </div>
    )
}

export default ComponentHeader;