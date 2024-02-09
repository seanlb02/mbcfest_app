import { createContext, useState } from "react";

export const Sidebar_props = createContext({});

export default function Context({ children }) {
  const [sidebarprops, setSidebarprops] = useState({});

  return (
    <Sidebar_props.Provider value={{ sidebarprops, setSidebarprops }}>
      {children}
    </Sidebar_props.Provider>
  );
}
