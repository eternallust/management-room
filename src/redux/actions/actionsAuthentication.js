import * as types from './../types'
import axios from 'axios'

export const login = (inputUsername,inputPassword) => ({
    type : types.LOGIN,
    payload : axios.post('http://room-management-api.herokuapp.com/hotelky/login',{
        email : inputUsername,
        password : inputPassword
    })
})