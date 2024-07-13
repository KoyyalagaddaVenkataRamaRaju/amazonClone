import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css";

const SignUp = () => {
    const [udata, setUdata] = useState({
    
    });

     console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;
         console.log(name,value);

        setUdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    };
  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input type="text" name="fname"
                            onChange={adddata}
                            value={udata.fname}
                                id="fname" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                            onChange={adddata}
                            value={udata.email}  
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                              onChange={adddata}
                              value={udata.mobile}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                              onChange={adddata}
                              value={udata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password" name="cpassword"
                             onChange={adddata}
                             value={udata.cpassword}
                                id="passwordg" />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>


                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
             
            </div>
        </section>
  )
}

export default SignUp
