import React, { useEffect, useState } from 'react';
import { TODAY_DATA } from '../common/Helper';

const Taskbar = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        setTask(TODAY_DATA);
    }, []);

    const handleNewTask = (taskId) => {
        setTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, complete: !task.complete } : task
            )
        );
    };

    const addTask = () => {
        if (newTask.trim()) {
            if (task.some((t) => t.name === newTask.trim())) {
                alert('Task already exists!');
                return;
            }
            const newTaskList = {
                id: task.length + 1,
                name: newTask.trim(),
                complete: false,
            };
            setTask([...task, newTaskList]);
            setNewTask('');
        } else {
            alert('Please enter a task');
        }
    };

    return (
        <>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='font-medium text-4xl text-center text-blue-600 py-5'>
                    Task List
                </h1>
                <div>
                    <div className='flex items-center gap-4'>
                        <input className='border border-solid border-blue-600 rounded-2xl p-5 outline-none'
                            type="text"
                            placeholder="Your Task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button className='p-5 border border-solid border-blue-500 rounded-2xl bg-blue-500 text-white font-medium ' onClick={addTask}>Add Task</button>
                    </div>
                    <ul>
                        {task.length > 0 ? (
                            task.map((task) => (
                                <li key={task.id} className='mt-5 border border-solid border-blue-600 rounded-xl py-5 px-3 items-center flex justify-between'>
                                    <span>{task.name}</span>
                                    <button
                                        className="ml-5"
                                        onClick={() => handleNewTask(task.id)}
                                    >
                                        {task.complete
                                            ? 'Mark as Incomplete'
                                            : 'Mark as Complete'}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <p>No tasks available</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Taskbar;
