import axios from 'axios';
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const useSignIn = () => {

    const baseUrl = `http://restapi.adequateshop.com`

    const { email, password } = useContext(AuthContext);

    const signIn = async () => {
        try {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };

            const res = await axios.post(`${baseUrl}/api/authaccount/login`, {
                email,
                password
            }, config);
            const data = res.data;
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

  return signIn
}

export default useSignIn