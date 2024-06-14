const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const { requireSignIn } = require("../middlewares/authMiddleware");

// CRUD
router.post("/user/create-blog", requireSignIn, blogController.createBlog);
router.get("/blogs", blogController.listAllBlogs)
router.get("/user/blogs", requireSignIn, blogController.listAllBlogsByID)
router.get("/user/blog/:id", requireSignIn, blogController.blogListByID)
router.put("/user/update-blog/:id", requireSignIn, blogController.updateBlogById)
router.delete("/user/delete-blog/:id", requireSignIn, blogController.deleteBlogByID)

module.exports = router;
