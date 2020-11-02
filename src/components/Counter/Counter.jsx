import React, {useState} from "react";
import Button from "../Button/Button"


function Counter() {

    const [count, setCount] = useState(0);

    const changeCount = (count) => {

        setCount(count);
    }


    return (
            <div className = "container">
                <div className = "row justify-content-center mt-3">
                    <h2>You click: {count} times</h2>
                </div>
                <div className="row mt-3">
                    <Button count = {count}  changeCount = {changeCount} number = {1} />
                    <Button count = {count}  changeCount = {changeCount} number = {3} />
                    <Button count = {count}  changeCount = {changeCount} number = {7} />
                </div>
            </div>
    )
}

export default Counter;
