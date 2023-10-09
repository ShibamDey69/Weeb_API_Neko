import express from 'express';
const router = express.Router()

router.get("/",(req,res) => {
  res.send({
    msg:"Hello Message!!"
  })
})

export default router
