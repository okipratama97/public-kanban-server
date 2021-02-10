const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')
const authorize = require('../middlewares/authorize')

router.get("/", TaskController.fetchAllTasks)
router.post("/", TaskController.addTask)
router.use("/:id", authorize)
router.get("/:id", TaskController.fetchTask)
router.patch("/:id", TaskController.moveTask)
router.delete("/:id", TaskController.deleteTask)
router.patch("/:id/title", TaskController.editTask)

module.exports = router