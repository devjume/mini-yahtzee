import { createContext } from "react";

export const AppContext = createContext({
  username: null,
  showRules: false,
})