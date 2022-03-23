import postMessage from "../models/postMessage.js"

// define your functions for routes and end point here
export const getPosts = async (req, res) => {
    // res.send("this works")
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }

}
export const createPost = async (req, res) => {
    // res.send("post creation works")
    const myPost = req.body;
    const newPost = new postMessage(myPost);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}