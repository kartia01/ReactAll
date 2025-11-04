import { createContext, useState } from "react";

export const UserContext02 = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
}