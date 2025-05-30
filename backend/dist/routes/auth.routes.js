"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post("/signup", auth_controller_1.signup);
router.post("/login", auth_controller_1.login);
router.get("/check-users", auth_controller_1.checkUsers);
router.post("/google/callback", auth_controller_1.handleGoogleCallback);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map