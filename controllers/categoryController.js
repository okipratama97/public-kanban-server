const { Category, Task, User } = require("../models")

class CategoryController {

  static async fetchAllCategories(req, res, next) {
    try {
      const categories = await Category.findAll({
        order: [["id"]],
        include: {
          model: Task,
          include: [User]
        }
      })
      res.status(200).json(categories)
    } catch (err) {
      next(err)
    }
  }

  static async fetchCategory(req, res, next) {
    try {
      const id = req.params.id

      const category = await Category.findByPk(id)
      if (!category) throw { name: "error_404_category_not_found" }

      res.status(200).json(category)
    } catch (err) {
      next(err)
    }
  }

  static async addCategory(req, res, next) {
    try {
      const { title } = req.body
      const input = { title }

      const newCategory = await Category.create(input, { returning: true })

      res.status(201).json(newCategory)
    } catch (err) {
      next(err)
    }
  }

  static async editCategory(req, res, next) {
    try {
      const id = req.params.id
      const { title } = req.body
      const input = { title }

      const data = await Category.update(input, { where: { id }, returning: true })
      if (!data[0]) throw { name: "error_404_category_not_found" }

      const category = data[1][0]

      res.status(200).json(category)
    } catch (err) {
      next(err)
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const id = req.params.id

      const category = await Category.findByPk(id, { include: [Task] })
      if (!category) throw { name: "error_404_category_not_found" }
      if (category.Tasks.length !== 0) throw { name: "error_400_category_has_tasks"}

      const deletedRows = await Category.destroy({ where: { id } })
      if (!deletedRows) throw { name: "error_404_category_not_found" }
      const response = "Category successfully deleted"

      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CategoryController