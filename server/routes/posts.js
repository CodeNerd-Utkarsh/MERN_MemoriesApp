// define your routes and endpoints here
// all routes will start from :- http://localhost:5000/posts

import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost)



export default router;