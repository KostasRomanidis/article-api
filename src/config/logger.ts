import winston from "winston";

const prod = process.env.NODE_ENV === "production";

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.label({ label: "article-api" }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level} [${label}]: ${message}`;
  })
);

const fileFormat = winston.format.combine(
  winston.format.label({ label: "article-api" }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level} [${label}]: ${message}`;
  })
);

// Explicitly type transports array to allow multiple transport types
const transports: winston.transport[] = [
  new winston.transports.Console({
    level: prod ? "info" : "debug",
    handleExceptions: true,
    format: consoleFormat,
  }),
];

if (prod) {
  transports.push(
    new winston.transports.File({
      filename: "info.log",
      level: "info",
      handleExceptions: true,
      format: fileFormat,
      maxsize: 20 * 1024 * 1024, // 20MB
      maxFiles: 14,
    })
  );
}

const logger = winston.createLogger({
  transports,
  exitOnError: false,
});

if (!prod) {
  logger.debug("Logging initialized at debug level");
}

export default logger;
