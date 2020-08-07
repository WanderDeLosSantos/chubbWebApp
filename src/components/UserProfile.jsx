import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export function UserProfile(){
    const { user } = useAuth0()
    
    return<div>Hello {user.name}</div>
}