import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export function Wrapper ({ children }) {
    const {
        isLoading,
        error, 

    } = useAuth0()

    if(isLoading) {
        return<div>Loading...</div>
    }

    if(error){
        return<div>Ooops... {error.message}</div>
    }

    return<>{children}</>
}