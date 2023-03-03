require("dotenv").config();
const helmet = require("helmet");
const express = require("express");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const app = express();

app.use(helmet()); // использование Helmet
app.disable("x-powered-by"); // отключить заголовок X-Powered-By
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса
app.use(requestLogger); // подключаем логгер запросов
app.use(cors); // подключаем cors заголовки

app.use("/", require("./routes/tweets"));

app.use(errorLogger); // errorLogger подключают после обработчиков роутов и до обработчиков ошибок

app.listen(PORT, () => {});
