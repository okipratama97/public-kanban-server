const { Task } = require("../models")

class TaskController {

  static async fetchAllTasks(req, res, next) {
    try {
      const tasks = await Task.findAll({ order: [["id"]] })
      res.status(200).json(tasks)
    } catch (err) {
      next(err)
    }
  }

  static async fetchTask(req, res, next) {
    try {
      const task = req.task
      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }

  static async addTask(req, res, next) {
    try {
      const { title, CategoryId } = req.body
      const UserId = req.user.id
      const input = { title, CategoryId, UserId }

      const newTask = await Task.create(input, { returning: true })

      res.status(201).json(newTask)
    } catch (err) {
      next(err)
    }
  }

  static async editTask(req, res, next) {
    try {
      const id = req.params.id
      const { title } = req.body
      const input = { title }

      const data = await Task.update(input, { where: { id }, returning: true })
      if (!data[0]) throw { name: "error_404_task_not_found" }

      const task = data[1][0]

      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }

  static async moveTask(req, res, next) {
    try {
      const id = req.params.id
      const { CategoryId } = req.body
      const input = { CategoryId }

      const data = await Task.update(input, { where: { id }, returning: true })
      if (!data[0]) throw { name: "error_404_task_not_found" }

      const task = data[1][0]

      res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }

  static async deleteTask(req, res, next) {
    try {
      const id = req.params.id
      
      const deletedRows = await Task.destroy({ where: { id } })
      if (!deletedRows) throw { name: "error_404_task_not_found" }
      const response = req.task

      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TaskController