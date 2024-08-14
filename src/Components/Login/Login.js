// import React from 'react'
import axios from 'axios';
import React, { useState, useRef ,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/store';


const Login = () => {
    let nevigate = useNavigate()
    let data = useForm()
    let [cu, setCu] = useState({})
let navifate=useNavigate()
    let dispatch = useDispatch()
    let user=useSelector(store=>store.user)
useEffect(() => {
if (user._id!="") {
nevigate("/")
    
}
}, [user])
    let onSubmit = (data) => {
        // console.log(data);

        let sendingUser = async () => {
            let resp = await axios.post("/checkUser", { data })
            // console.log(resp.data);
            if (resp.data.success==true) {
                setCu(resp.data.data)
            // console.log(cu);
            dispatch(setUser(resp.data.data))
            localStorage.setItem("token",resp.data.meratoken)
            nevigate("/")
            }
            



        }
        sendingUser()
    }
    // console.log(cu);
    let [pass, setPas] = useState("")
    return (
        <div>

            <div>
                <div className='text-white '> <h1 className='font-bold text-center  md:text-5xl lg:text-5xl text-3xl mt-5'>Log in to your account</h1>

                    <form action="">
                        <div className='flex-col flex items-center'>

                            <input type="text" name="" id="" className='md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='username' {...data.register('username', { required: true })} />
                            {data.formState.errors.username && <div className="mt-5 text-red-500 "> PLease enter your username</div>}

                            <input type="text" name="" id="" className='md:text-3xl lg:text-3xl bg-inherit mt-14 p-4 rounded-xl border-2 border-white   ' placeholder='password' {...data.register("password", { required: true })} onChange={(e) => { setPas(e.target.value) }} />

                            <button className='text-xl bg-blue-500 mt-14  rounded-xl w-72 p-4' onClick={data.handleSubmit(onSubmit)}>Log in</button>



                        </div>
                    </form>
                    <div className='flex justify-center text-white mt-14'> <div>Not have an account?</div> <button className='mx-5 text-blue-500 ' onClick={() => {
                        nevigate("/signUp")
                    }}>Sign in</button></div>
                </div>


            </div>
        </div>
    )
}

export default Login