import { createContext, useState } from "react";

// Membuat dan mengekspor UserContext
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Fungsi untuk login
  const login = (username) => {
    setUser({ username });
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
