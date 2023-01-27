//import express
import express from "express";

//import functions from controller
import {
  showUsers
} from "../controller/user.js";

//init express router
const router = express.Router();

//get all product
router.get("/users", showUsers);

//export default router
export default router;