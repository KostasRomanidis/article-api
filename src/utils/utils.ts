/**
 * Utility functions for converting string values to different types.
 */

/**
 * Converts a string value to a boolean.
 * Returns true if the value is the string "true", otherwise false.
 */
export const toBoolean = (value: string): boolean => value === "true";

/**
 * Converts a string value to a number using base 10.
 * Returns NaN if the value cannot be parsed as a number.
 */
export const toNumber = (value: string): number => parseInt(value, 10);
