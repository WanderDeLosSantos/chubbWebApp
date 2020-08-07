import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export function LoginBtn(){

    const {
    
        isAuthenticated,
        loginWithPopup
    
    } = useAuth0()
    return !isAuthenticated && (
        <div>
            <button className="btn btn-large col s10" onClic={loginWithPopup}>Login</button>
        
        <style jsx>{`

            button {
                position: relative;
                left: 2em !important;
            }    
        `}</style>
        </div>
    )
}