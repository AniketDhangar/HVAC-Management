import e from "express";
import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: [true, "Name is required."],
    },
    serviceDescription: {
      type: String,
      required: [true, "Discription is required."],
    },

    serviceType: {
      type: String,
      required: [true, "Please provide a service type"],
      enum: [
        "Repair",
        "Installation",
        "Service",
        "Heater Maintenance",
        "Other",
        "Maintenance",
      ],
    },
    serviceImage: {
      type: String,
      required: true,
    },

    // ServicePrice: {
    //     type: Number,
    //     required: true
    // },
    // ServiceCategory: {
    //     type: String,
    //     required: true
    // },
    // ServiceStatus: {
    //     type: String,
    //     required: true
    // },
    ServiceDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Service = mongoose.model("Service", ServicesSchema);
