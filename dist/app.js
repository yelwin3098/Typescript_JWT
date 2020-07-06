"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("./routes/auth"));
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use('/api/auth', auth_1.default);
app.set('port', 3000);
exports.default = app;
//# sourceMappingURL=app.js.map