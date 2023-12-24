import express from "express";
import { AuthRouter } from "../modules/auth/auth.route";
import { BookingRouters } from "../modules/booking/booking.route";
import { MobileRoutes } from "../modules/mobile/mobile.route";

const router = express.Router();

// all module route is here
const AllModuleRoutes = [
  { path: "/auth", router: AuthRouter },
  { path: "/mobile", router: MobileRoutes },
  { path: "/book", router: BookingRouters },
];

AllModuleRoutes.forEach((route) => router.use(route.path, route.router));

export const RootRoutes = router;
