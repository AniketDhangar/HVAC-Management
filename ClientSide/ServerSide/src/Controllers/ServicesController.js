import { Service } from "../Models/ServicesSchema.js";

const addService = async (req, res) => {
  try {
    //here we are getting the file path
    //we are replacing the backslashes with forward slashes
    //because the path that we get from the multer is in backslashes
    //and we need to convert it into forward slashes
    //because the path that we get from the multer is in backslashes
    //and we need to convert it into forward slashes

    const filepath = req.file.path.replace("/\\/g", "/");
    console.log("file path ", filepath);
    //here we are creating the service
    //we are using the spread operator to get all the data from the body
    //and we are adding the file path to the service image
    //and then we are creating the service
    const addedService = await Service.create({
      ...req.body,
      serviceImage: filepath,
    });
    //file path is the path of the image that we uploaded
    console.log(addedService);
    res.status(200).json({ addedService });
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

const getServices = async (req, res) => {
  try {
    const allServices = await Service.find();
    console.log(allServices);
    res.status(200).json({ allServices });
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.body._id);
    console.log(deletedService);
    res.status(200).json({ deletedService });
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

export { addService, getServices ,deleteService};
