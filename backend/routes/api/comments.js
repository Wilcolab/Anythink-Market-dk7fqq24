const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//Hey GitHub Copilot, create a route to get all comments for a specific post

router.get("/post/:postId", async (req, res) => {
  try {
    /**
     * Retrieves all comments associated with a specific post.
     *
     * @async
     * @function getCommentsByPostId
     * @param {Object} req - The request object containing parameters.
     * @param {Object} req.params - The parameters from the request.
     * @param {string} req.params.postId - The ID of the post for which comments are being retrieved.
     * @returns {Promise<Array>} A promise that resolves to an array of comments for the specified post.
     * @throws {Error} Throws an error if the retrieval of comments fails.
     */
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Delete a comment by id
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});