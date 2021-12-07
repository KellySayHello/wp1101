import express from 'express'
import Post from '../models/post'
import moment from 'moment'

const router = express.Router()
const app = express()

// TODO 2-(1): create the 1st API (/api/allPosts)
app.get('/api/allPosts', async(req, res) =>{
    try{
        res.status(200).send({message:{
            "message": "success",
            "data": [Post]
        }})
    }catch(e){
        res.status(403).send({message:{
            "message": "error",
            "data": null
        }})
    }
})

// TODO 3-(1): create the 2nd API (/api/postDetail)
app.get('/api/postDetail', async(req, res) =>{
    const pid=req.query.postId;
    try{
        Post.findOne({postId:pid})
        res.status(200).send({message:{
            "message": "success",
            "post": Post
        }})
    }catch(e){
        res.status(403).send({message:{
            "message": "error",
            "data": null
        }})
    }
})

// TODO 4-(1): create the 3rd API (/api/newPost)
app.post('/api/newPost', async(req, res) =>{
    const data=req.body
    try{
        const newPost= new Post(data);
        newPost.save();
        res.status(200).send({message:{
            "message": "success"
        }})

    }catch(e){
        res.status(403).send({message:{
            "message": "error",
            "data": null
        }})
    }
})

// TODO 5-(1): create the 4th API (/api/post)
app.delete('/api/post', async(req, res) =>{
    const pid=req.query.pid;
    try{
        Post.deleteOne({postId:pid});
        res.status(200).send({message:{
            "message": "success"
        }})

    }catch(e){
        res.status(403).send({message:{
            "message": "error",
            "data": null
        }})
    }
})

export default router