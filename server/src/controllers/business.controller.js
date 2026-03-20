import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { Business } from "../models/business.model.js";
import { Service } from "../models/service.model.js";
import { Booking } from "../models/booking.model.js";
import { Inventory } from "../models/inventory.model.js";

const getDashboard = asyncHandler(async (req, res) => {
  const userId = req.user?._id || req.body.userId; // temp for testing

  // get business
  const business = await Business.findOne({ owner: userId });

  if (!business) {
    return res.status(404).json({ message: "Business not found" });
  }

  // get related data
  const services = await Service.find({ business: business._id });
  const bookings = await Booking.find({ business: business._id });
  const inventory = await Inventory.find({ business: business._id });

  // simple analytics
  const totalBookings = bookings.length;

  res.json(
    new ApiResponse(200, {
      business,
      services,
      bookings,
      inventory,
      analytics: {
        totalBookings
      }
    }, "Dashboard fetched successfully")
  );
});

export { getDashboard };