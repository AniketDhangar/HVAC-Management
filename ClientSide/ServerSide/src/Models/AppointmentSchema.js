import mongoose from "mongoose";

const AppointmentSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide a name"],
    },
    userMobile: {
      type: String,
      required: [true, "Please provide a mobile number"],
    },
    userEmail: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    deviceBrand: {
      type: String,
      required: [true, "Please provide a device brand"],
    },

    serviceType: {
      type: String,
      required: [true, "Please provide a service type"],
      enum: ["Repair", "Installation", "Service", "Other", "Maintenance"],
    },

    userAddress: {
      type: String,
      required: [true, "Please provide a address"],
    },
    problemDescription: {
      type: String,
    },

    // appointmentDate: {
    //     type: Date,
    //     required: [true, "Please provide a appointment date"] ,
    // },

    // appointmentTime: {
    //     type: String,
    //     required: [true, "Please provide a appointment time"] ,
    // },
    // appointmentDate: {
    //     type: String,
    //     required: [true, "Please provide a appointment date"] ,
    // },
    // appointmentStatus: {
    //   type: String,
    //   default: "Pending",
    //   enum: ["Pending", "Approved", "Completed", "Cancelled"],
    // },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model("Appointment", AppointmentSchema);
