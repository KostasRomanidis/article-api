import winston from "winston";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const prod = process.env.NODE_ENV === "production";

const customFormat = winston.format.combine(
  winston.format.label({
    label: 'article-api'
  }),
  winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
  winston.format.colorize(),
  winston.format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level} [${label}]: ${message}`;
  })
);

const options = {
  file: {
    level: prod ? "info" : "info",
    filename: prod ? "info.log" : "info.log",
    datePattern: "DD-MM-YYYY HH:mm:ss",
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    maxSize: "20m", // 5MB
    maxFiles: 14,
    rotate: true,
    colorize: true,
    format: customFormat,
    prettyPrint: true
  },
  console: {
    level: "debug",
    handleExceptions: true,
    format: customFormat
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console),
  ]
});

if (process.env.NODE_ENV !== "production") {
  logger.debug("Logging initialized in debug level");
}

export default logger;
