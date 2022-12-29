import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { LoginUser, reset } from '../../features/authSlice'
import "./Login.css"


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
    );
  
    useEffect(() => {
      if (user || isSuccess ) {
        if(user.role === "user"){navigate("/");}
        if(user.role === "admin"){navigate("/admindash")}
      }
      dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);
  
    const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
    };
    
    
  return (
    <div className='divcont'>

      <div className='loginbigbox'>

      <div className="loginimg">
        {/* imgdiv */}
        </div>

        <div className="loginbox">
        <section className="logincont">
        <div className="logoimglogin">
                
                </div>
            <form onSubmit={Auth}>
            {isError && <p>{message}</p>} 
              
            <h3 className="logintitle">Login</h3>
            <div className="logininputs">
               <input type="text" className="email" value ={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='abc@gmail.com' />
                <div className="secondinput">
                    <input type="password" className="password" value ={password} placeholder="*******" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <button className='btn' onClick={Auth}>Login</button>
                
            </div>
            
            </form>
        </section>
        </div>

        </div>

    </div>
  )
}

export default Login;