import express from "express";
import {
  createAppointment,
  getAppointments,
} from "../Controllers/AppointmentController.js";
import {
  addService,
  getServices,
  deleteService,
} from "../Controllers/ServicesController.js";
import { uploader } from "../middleware/multerUpload.js";

const router = express.Router();

//appoinment routes
router.post("/takeappoinment", createAppointment);
router.get("/getappoinment", getAppointments);

//services routes

//here we are using the middleware to upload the image
//uploader.single('image') is the middleware that we are using to upload the single image
//after this go to controller
router.post("/addservice", uploader.single("serviceImage"), addService);
router.get("/services", getServices);
router.delete("/deleteservice", deleteService);

export default router;
