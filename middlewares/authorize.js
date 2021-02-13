const { Task } = require("../models")

module.exports = async function (req, _, next) {
  try {
    let id = req.params.id

    const task = await Task.findByPk(id)
    if (!task) throw { name: "error_404_task_not_found" }
    if (task.UserId !== req.user.id) throw { name: "error_403_task_forbidden" }
    req.task = task

    next()
  } catch (err) {
    next(err)
  }

}