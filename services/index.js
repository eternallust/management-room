require('express-group-routes')

const fs = require('fs')

const express = require('express')
const bodyParser = require('body-parser')
const mkdirp = require('mkdirp')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const dirCoverManga = 'uploads/cover/'
        mkdirp(dirCoverManga.toString(),null)
        cb(null,dirCoverManga)
    },
    filename : function(req, file, cb){
        const dirCoverManga = 'uploads/cover/'
        mkdirp(dirCoverManga.toString(),null)
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})

const storageImage = multer.diskStorage({
    destination: function(req, file, cb){
        const dirPageManga = 'uploads/page/'
        mkdirp(dirPageManga.toString(),null)
        cb(null,dirPageManga)
    },
    filename : function(req, file, cb){
        const dirPageManga = 'uploads/page/'
        mkdirp(dirPageManga.toString(),null)
        cb(null,file.originalname)
    }
})
const uploadImage = multer({storage:storageImage})

const app = express()
const port = 5000
app.use('/mangaky/uploads/cover/',express.static('uploads/cover'))
app.use('/mangaky/uploads/page/',express.static('uploads/page'))
app.use(bodyParser.json())

const authController = require('./controller/authController')
const customerController = require('./controller/customerController')
const roomController = require('./controller/roomController')
const orderController = require('./controller/orderController')
const authenticating = require('./middleware')

app.group("/hotelky",(router) => { 
    // Authentication API
    router.post('/register',authController.register)// signup
    router.post('/login',authController.login)// login
    router.get('/users',authController.show)

    // Customers API
    router.get('/customers',customerController.show)
    router.post('/customers/add',upload.single('image'),customerController.add)
    router.put('/customers/edit/:customerId',customerController.edit)
    router.get('/customers/detail/:customerId',customerController.detail)

    // Rooms Api
    router.get('/rooms/:type',roomController.show)
    router.post('/rooms/add',roomController.add)
    router.put('/rooms/checkin/:roomId',roomController.roomCheckIn)
    router.put('/rooms/checkout/:roomId',roomController.roomCheckOut)
    router.get('/rooms/detail/:roomId',roomController.detail)
    router.put('/rooms/update/:roomId',roomController.update)
    router.get('/rooms/type/:type',roomController.roomType)
    router.delete('/rooms/delete/:roomId',roomController.delete)

    // Orders API
    router.get('/orders',orderController.show)
    router.get('/orders/check/:roomId',orderController.checkRoom)
    router.put('/orders/checkout/:idOrder',orderController.orderCheckOut)
    router.post('/orders/checkIn',orderController.orderCheckIn)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))