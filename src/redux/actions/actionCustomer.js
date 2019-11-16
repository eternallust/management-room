import * as types from './../types'
import axios from 'axios'

export const getCustomer = (token) => ({
    type : types.CUSTOMER,
    payload : axios.get(`http://room-management-api.herokuapp.com/hotelky/customers`,{
        headers : {"Authorization" : `Bearer ${token}`}
    })
})

export const addCustomer = (params) =>({
    type : types.ADDCUSTOMER,
    payload : axios.post(`http://room-management-api.herokuapp.com/hotelky/customers/add`,params)
})

export const detailCustomer = (params,token) =>({
    type : types.DETAILCUSTOMER,
    payload : axios.get(`http://room-management-api.herokuapp.com/hotelky/customers/detail/${params}`,{
        headers : {"Authorization" : `Bearer ${token}`}})
})

export const updateCustomer = (params) =>({
    type : types.UPDATECUSTOMER,
    payload : axios.put(`http://room-management-api.herokuapp.com/hotelky/customers/edit/${params.id}`,{
        name : params.name,
        id_card : params.idCard,
        phone_number : params.phoneNumber
    })
})
