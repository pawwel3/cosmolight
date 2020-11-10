import { createContext } from "react";

export const defaultObject = {
  langue: false,
  setLangue: () => {},
};
export const LangueContext = createContext(defaultObject);
