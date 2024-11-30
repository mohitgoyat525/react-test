import React, { useState } from 'react'
import Swal from 'sweetalert2'

const NewFormValidtion = () => {
    const Swal = require('sweetalert2')
    const formData = {
        name: '',
        email: '',
        password: '',
        conformPassword: '',
        select: "Money",
        checkBox: false

    }
    const [value, setValue] = useState(formData);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const submitHandle = (e) => {
        e.preventDefault();
        setError(true);
        if (
            value.name !== '' &&
            value.email !== '' &&
            value.password !== '' &&
            value.conformPassword !== '' &&
            value.select !== '' &&
            value.checkBox
        ) {
            console.log(value);
            setValue(formData);
            setError(false);

            Swal.fire({
                title: 'Done',
                text: 'Do you want to continue',
                icon: "success",
                confirmButtonText: 'Nice'
            });
        }


    }

    return (
        <>
            <div className=''>
                <div className='flex items-center justify-center h-screen'>
                    <form action="" className='border border-solid border-black rounded-xl p-6'>
                        <h2 className='text-center text-4xl font-medium text-blue-400 py-7'>Login</h2>
                        <div>
                            <input className='py-2 px-3 border border-solid border-blue-600 rounded-2xl w-full max-w-[425px] outline-none' value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} type="text" placeholder='Name' />
                            <p className='text-red-500 text-base font-normal'>{error && !value.name && 'name is required'}</p>
                        </div>
                        <div className='mt-3'>
                            <input className='py-2 px-3 border border-solid border-blue-600 rounded-2xl w-full max-w-[425px] outline-none' type="email" placeholder='email' value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} />
                            <p className='text-red-500 text-base font-normal'>{error && !value.email && 'email required'}</p>
                        </div>
                        <div className='mt-3'>
                            <input className='py-2 px-3 border border-solid border-blue-600 rounded-2xl w-full max-w-[425px] outline-none' type={showPassword ? "text" : "password"} placeholder='password' value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} />
                            <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? "hide" : "show"}</span>
                            <p className='text-red-500 text-base font-normal'>{error && !value.password && 'password required'}</p>
                        </div>
                        <div className='mt-3'>
                            <input className='py-2 px-3 border border-solid border-blue-600 rounded-2xl w-full max-w-[425px] outline-none' type="password" placeholder='Conform Password' value={value.conformPassword} onChange={(e) => setValue({ ...value, conformPassword: e.target.value })} />
                            <p className='text-red-500 text-base font-normal'>{error && !value.conformPassword && 'password required'}</p>
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <select value={value.select} onChange={(e) => setValue({ ...value, select: e.target.value })} className='cursor-pointer py-2 px-3 w-5/12 bg-blue-500 text-white rounded-xl'>
                                <option className='text-white font-normal text-base cursor-pointer' value="money">money</option>
                                <option className='text-white font-normal text-base cursor-pointer' value="power">power</option>
                                <option className='text-white font-normal text-base cursor-pointer' value="peace">peace</option>
                            </select>
                        </div>
                        <div className='flex items-center mt-3'>
                            <input type="checkbox" />
                            <p className='text-blue'>i accept</p>
                        </div>
                        <p className='text-red-500 text-base font-normal'>{error && !value.conformPassword && 'check box required'}</p>
                        <button className='mt-3 border border-solid border-blue-600 py-3 px-10 w-full max-w-[425px] rounded-2xl text-black transition-all ease-linear duration-200 hover:bg-blue-700  hover:text-white' onClick={submitHandle}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewFormValidtion