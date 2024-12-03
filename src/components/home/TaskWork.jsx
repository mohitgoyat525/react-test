
import React, { useState, useEffect } from "react";
const TaskWork = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(() => (count + 1),)
        },1000)
    })
  return (
      <div>
          <h1 className="text-center font-bold text-5xl text-blue-600 py-7">UseEffect</h1>
                <p className="text-center py-5 text-blue-600 font-semibold text-4xl ">{count}</p>
            </div>
  )
}

export default TaskWork