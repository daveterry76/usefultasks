import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');


  return (
    <AuthContext.Provider value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider