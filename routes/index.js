const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const taskRoutes = require('./taskRoutes')
const categoryRoutes = require('./categoryRoutes')
const authenticate = require('../middlewares/authenticate')

router.use("/", userRoutes)
router.use(authenticate)
router.use("/categories", categoryRoutes)
router.use("/tasks", taskRoutes)

module.exports = router