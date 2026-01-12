const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
const User = mongoose.model("User");
const auth = require("../auth");

/**
 * GET /api/comments
 * Retrieve a list of comments.
 *
 * Query Parameters:
 * - limit: number (optional, default 100)
 * - offset: number (optional, default 0)
 *
 * Auth: optional (if provided, comments will be serialized for that user)
 *
 * Response: 200 JSON { comments: [...] } where each comment is serialized via Comment#toJSONFor(user)
 */
router.get("/", auth.optional, function(req, res, next) {
  var limit = 100;
  var offset = 0;

  if (typeof req.query.limit !== "undefined") {
    limit = req.query.limit;
  }

  if (typeof req.query.offset !== "undefined") {
    offset = req.query.offset;
  }

  Promise.resolve(req.payload ? User.findById(req.payload.id) : null)
    .then(function(user) {
      return Comment.find({})
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({ createdAt: "desc" })
        .populate("seller")
        .exec()
        .then(function(comments) {
          return res.json({
            comments: comments.map(function(comment) {
              return comment.toJSONFor(user);
            })
          });
        });
    })
    .catch(next);
});

/**
 * DELETE /api/comments/:id
 * Delete a comment by id.
 *
 * Params:
 * - id: Comment id (URL param)
 *
 * Auth: required
 *
 * Responses:
 * - 401: Unauthorized (user not found)
 * - 404: Not Found (comment does not exist)
 * - 403: Forbidden (user is not the comment owner)
 * - 204: No Content (comment deleted)
 *
 * Side-effects: removes comment document and pulls its ID from the associated Item.comments array (if present)
 */
router.delete("/:id", auth.required, async function(req, res, next) {
  try {
    const user = await User.findById(req.payload.id);
    if (!user) {
      return res.sendStatus(401);
    }

    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.sendStatus(404);
    }

    if (comment.seller.toString() === req.payload.id.toString()) {
      // If attached to an item, remove the reference from the item's comments array
      if (comment.item) {
        const Item = mongoose.model("Item");
        await Item.findByIdAndUpdate(comment.item, { $pull: { comments: comment._id } }).exec();
      }

      await comment.remove();
      return res.sendStatus(204);
    } else {
      return res.sendStatus(403);
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
