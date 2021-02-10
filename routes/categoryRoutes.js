const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController')

router.get("/", CategoryController.fetchAllCategories)
router.post("/", CategoryController.addCategory)
router.get("/:id", CategoryController.fetchCategory)
router.put("/:id", CategoryController.editCategory)
router.delete("/:id", CategoryController.deleteCategory)

module.exports = router