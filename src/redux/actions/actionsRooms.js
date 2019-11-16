import * as types from './../types'
import axios from 'axios'

export const getRooms = (token,type) => ({
    type : types.ROOMS,
    payload : axios.get(`http://room-management-api.herokuapp.com/hotelky/rooms/${type}`,{
        headers : {"Authorization" : `Bearer ${token}`}
    })
})
export const addRooms = (params) =>({
    type : types.ADDROOM,
    payload : axios.post(`http://room-management-api.herokuapp.com/hotelky/rooms/add`,{
        name : params.nameRoom,
        type : params.type,
    })
})
export const deleteRooms = (params) =>({
    type : types.ROOMSDELETE,
    payload : axios.delete(`http://room-management-api.herokuapp.com/hotelky/rooms/delete/${params}`)
})
export const checkInRoom = (params) =>({
    type: types.ROOMSCHECKIN,
    payload: axios.put(`http://room-management-api.herokuapp.com/hotelky/rooms/checkin/${params.roomId}`,{
        available: 0
    })
})
export const checkOutRoom = (params) =>({
    type: types.ROOMSCHECKOUT,
    payload: axios.put(`http://room-management-api.herokuapp.com/hotelky/rooms/checkout/${params.idRoom}`,{
        available: 1
    })
})
export const updateRooms = (roomId,name) =>({
    types: types.ROOMSUPDATE,
    payload: axios.put(`http://room-management-api.herokuapp.com/hotelky/rooms/update/${roomId}`,{
        name: name
    })
})
export const detailRooms = (params) =>({
    types: types.ROOMSDETAIL,
    payload: axios.get(`http://room-management-api.herokuapp.com/hotelky/rooms/detail/${params}`)
})
export const getRoomType = (params) =>({
    types: types.ROOMTYPE,
    payload: axios.get(`http://room-management-api.herokuapp.com/hotelky/rooms/type/${params}`)
})