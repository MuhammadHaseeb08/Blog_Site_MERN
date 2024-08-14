import axios from 'axios';
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm();
    const password = useRef({});
    let data = useForm()
    password.current = data.watch("password", "");
    let nevigate = useNavigate()
    let onSubmit = (data) => {
        console.log(data);

        let sendingUser=async()=>{
           let resp= await axios.post("/createUser",{data})
            if (resp.data.success==true) {
                nevigate("/")
            }
        }
        sendingUser()
    }
    let [pass, setPas] = useState("")
    return (
        <div>
            <div className='text-white '> <h1 className='font-bold text-center  md:text-5xl lg:text-5xl text-3xl mt-5'>Create an account</h1>

                <form action="">
                    <div className='flex-col flex items-center'>
                        <input type="text" name="" id="" className=' md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='name' {...data.register('name', { required: true })} />
                        {data.formState.errors.name && data.formState.errors.name.type == "required" && <div className="mt-5 text-red-500 "> PLease enter your name</div>}
                        <input type="text" name="" id="" className='md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='username' {...data.register('username', { required: true })} />
                        {data.formState.errors.username && <div className="mt-5 text-red-500 "> PLease enter your username</div>}
                        <input type="email" name="" id="" className='md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='email' {...data.register('email', { required: true, })} />
                        {data.formState.errors.username && data.formState.errors.username.type == "required" && <div className="mt-5 text-red-500 "> PLease enter your email</div>}
                        <input type="text" name="" id="" className='md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='password' {...data.register("password", { required: true })} onChange={(e) => { setPas(e.target.value) }} />
                        {/* <input type="text" name="" id="" className='md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='confirm password' {...data.register("cPassword", {
                            required: true, 
                        })} /> */}
                        {data.formState.errors.cPassword && data.formState.errors.cPassword.type == "check" && <div className="mt-5 text-red-500 "> PLease check your password</div>}
                        <button className='text-xl bg-blue-500 mt-14  rounded-xl w-72 p-4' onClick={data.handleSubmit(onSubmit)}>Sign in</button>



                    </div>
                </form>
                <div className='flex justify-center text-white mt-14'> <div>Already have an account?</div> <button className='mx-5 text-green-500 ' onClick={() => {
                    nevigate("/login")
                }}>Login</button></div>
            </div>


        </div>
    )
}

export default SignUp