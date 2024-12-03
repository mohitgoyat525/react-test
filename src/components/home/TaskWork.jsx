
import React, { useState, useEffect } from "react";
const TaskWork = () => {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(() => (count + 1),)
        },1000)
    })
  return (
            <div>
                <p className="text-blue-600 font-semibold text-4xl ">{count}</p>
            </div>
  )
}

export default TaskWork