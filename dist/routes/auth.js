"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const authController_1 = require("../controller/authController");
const validateToken_1 = require("../libs/validateToken");
router.post('/signup', authController_1.signup);
router.post('/signin', authController_1.signin);
router.get('/profile', validateToken_1.TokenValidateion, authController_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map