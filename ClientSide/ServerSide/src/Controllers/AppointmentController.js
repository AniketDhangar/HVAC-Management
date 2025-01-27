import { Appointment } from "../Models/AppointmentSchema.js";

const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    console.log(appointment);
    res.status(201).json({ appointment });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ appointments });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const UpdateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      {
        _id: req.body.id,
      },
      {
        ServiceStatus: req.body.status
      },
      { new: true }
    );
    res.status(200).json({ appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { createAppointment, getAppointments };
