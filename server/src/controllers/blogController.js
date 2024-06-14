const blogModel = require("../models/blogModel");

// Create blog
exports.createBlog = async (req, res, next) => {
  try {
    const author = req.user._id;
    console.log("UserId: ", author);
    const { title, content } = req.body;

    // Validation
    if (!title) {
      throw new Error("Title is required");
    }
    if (!content) {
      throw new Error("Title is required");
    }

    // Check existing blog title
    const blogTitle = await blogModel.findOne({ title });
    if (blogTitle) {
      throw new Error("Blog title is already exist");
    }

    // Create New Blog
    const blog = await blogModel.create({ author, title, content });

    return res.status(201).json({
      status: "Success",
      message: "New blog Created",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

// find All Blog list
exports.listAllBlogs = async (req, res, next) => {
  try {
    const allBlog = await blogModel.find({});

    if (allBlog.length === 0) {
      throw new Error("Blogs are not found");
    }

    // response all blog
    return res.status(200).json({
      status: "Success",
      data: allBlog,
    });
  } catch (error) {
    next(error);
  }
};

// All Blog list by Author
exports.listAllBlogsByID = async (req, res, next) => {
  try {
    const userId = req.user._id;
    // console.log(userId)

    // Check blog list
    const allBlog = await blogModel.find({ author: userId });

    if (allBlog.length === 0) {
      throw new Error("Blogs are not found");
    }

    // response all blog
    return res.status(200).json({
      status: "Success",
      data: allBlog,
    });
  } catch (error) {
    next(error);
  }
};

// Blog list by blogID
exports.blogListByID = async (req, res, next) => {
  try {
    const blogID = req.params.id;
    console.log(blogID);

    // Check blog list
    const blog = await blogModel.find({ _id: blogID });
    console.log(blog);

    if (blog.length === 0) {
      throw new Error("Blog is not found");
    }

    // response all blog
    return res.status(200).json({
      status: "Success",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

// Update blog
exports.updateBlogById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const { title, content } = req.body;

    // Check existing blog
    const blog = await blogModel.findOne({ _id: blogId });
    if (!blog) {
      throw new Error("Blog is not found");
    }

    // update blog
    const updatedBlog = await blogModel.updateOne({ title, content });
    if(updatedBlog.modifiedCount === 0){
        throw new Error("blog has not been updated")
    }

    return res.status(201).json({
      status: "Success",
      message: "Blog has been updated",
      data: updatedBlog,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Blog by blogID
exports.deleteBlogByID = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    console.log(blogId);

    // Find blog list and delete
    const deleteBlog = await blogModel.findByIdAndDelete({ _id: blogId });
    console.log(deleteBlog);

    if (!deleteBlog) {
      throw new Error("Blog is not found");
    }

    // response all blog
    return res.status(200).json({
      status: "Success",
      message: "Blog has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
