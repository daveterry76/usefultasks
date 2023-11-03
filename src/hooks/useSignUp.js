import axios from 'axios';
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const useSignUp = () => {

    const baseUrl = `http://restapi.adequateshop.com`

    const { name, email, password } = useContext(AuthContext);

    const signUp = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/authaccount/registration`, {
                name,
                email,
                password
            });
            const { data } = res.data;
            console.log(data, name);
        } catch (error) {
            console.log(error)
        }
    }

  return signUp
}

export default useSignUp