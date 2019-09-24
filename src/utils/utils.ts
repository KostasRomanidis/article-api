import logger from "../config/logger";
import { config } from "../config/constants";

export const toBoolean = (value: string): boolean => {
  return value === "true";
};

export const toNumber = (value: string): number => {
  return parseInt(value, 10);
};
