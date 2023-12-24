import express from "express";
import AuthGard from "../../middleware/auth";
import { BookingController } from "./booking.controller";

const router = express.Router();
router.post("/", BookingController.createBooking);
router.get("/my-booking", AuthGard(), BookingController.myBooking);
router.delete("/:id", BookingController.deleteBooking);
export const BookingRouters = router;
