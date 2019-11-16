const models = require('../models')
const customers = models.customers
const rooms = models.rooms
const orders = models.orders

exports.show = async(req,res) =>{
    const type = req.params.type
    const result = await rooms.findAll({
      where: {
        type: type
      }
    })
    res.send(result)
}
exports.add = async(req,res) =>{
    const data = req.body
    const result = await rooms.create({
      name : data.name,
      available : true,
      type : data.type
    })
    res.send(result)
}
exports.update = async(req,res) =>{
  const roomId = req.params.roomId
  const data = req.body
  const result = await rooms.update(
    {
      name : data.name
    },
    {
      where: {
        id:roomId
      }
    }
  )
  res.send(result)
}
exports.delete = async(req,res) =>{
  const roomId = req.params.roomId
  const result = await rooms.destroy({
    where: {
      id: roomId
    }
  })
  res.send(roomId)
}
exports.detail = async(req,res) =>{
  const roomId = req.params.roomId
  const result = await rooms.findOne({
    where: {
      id: roomId
    }
  })
  res.send(result)
}
exports.roomCheckOut = async(req,res) =>{
  const roomId = req.params.roomId
  const result = await rooms.update(
    {
      available: true
    },
    {
      where: {
        id: roomId
      }
    })
  res.send(result)
}
exports.roomCheckIn = async(req,res) =>{
  const roomId = req.params.roomId
  const result = await rooms.update(
    {
      available: false
    },
    {
      where: {
        id: roomId
      }
    })
  res.send(result)
}
exports.roomType = async(req,res)=>{
  const type = req.params.type
  const result = await rooms.findAll({
    where: {
      type: type
    }
  })
  res.send(result)
}
 