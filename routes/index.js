const express = require("express");
const router = express.Router();
const auth = require ('../middleware/authorization');

const userRouter = require('./user.routes');
const productRouter = require('./product.routes');



router.use('/user',userRouter);
router.use('/product',auth,productRouter);




module.exports=router;