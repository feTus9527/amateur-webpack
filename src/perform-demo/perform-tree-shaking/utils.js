import _ from "lodash";

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function mod(a, b) {
  return a % b;
}

export function myChunk(arr) {
  return _.chunk(arr);
}
