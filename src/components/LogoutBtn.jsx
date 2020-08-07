import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export function LogoutBtn(){

    const {
    
        isAuthenticated,
        logout,
    
    } = useAuth0()
    return !isAuthenticated && (
       <div>
            <button onClic={() => {
            logout({returnTo: window.location.origin})   
        }}>Log out</button>
       </div>
    )
}