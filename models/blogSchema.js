const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, "title of blog is required"]
  },
  author: {
    type: String,
    required: [true, "author name is required"]
  },
  body: {
    type: String,
    required: [true, "blog is required"]
  }
});

const blog = mongoose.model("post", blogSchema);

module.exports = blog;
// ,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   meta: {
//     votes: Number,
//     favs: Number
//   }