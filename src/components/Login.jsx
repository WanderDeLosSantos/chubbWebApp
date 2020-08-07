import React, { useState } from 'react'
import { LoginBtn } from '../components'

export function Login() {
    return(
        <div className="container">
            <div className="row ">
                <div className="card row blue">
                    <div className="avatar red col s6 center"></div>
                    <form className="col s12 l12">
                        <div className="input-field col s12 ">
                            <input className="input" type="text" placeholder="username"/>
                        </div>
                        <div className="input-field col s12 center">
                            <input className="" type="password" placeholder="password"/>
                        </div>
                        <div className="col s12 m12 l12">
                            <LoginBtn/>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    
                }
                .card{
                    position: relative;
                    width: 400px;
                    height: 600px;
                    top: 10em;

                    

                }

                .input-field {
                    position: relative;
                    
                }
                .card .avatar {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    border-radius: 100%;
                    margin: 10% 0 10% 25% !important;
                }
            `}</style>
        </div>
    )
}