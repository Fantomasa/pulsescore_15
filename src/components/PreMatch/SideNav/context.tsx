"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SideNavContextType {
  isSideNavOpen: boolean;
  toggleSideNav: () => void;
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined);

export const SideNavProvider = ({ children }: { children: ReactNode }) => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => setSideNavOpen((prev) => !prev);

  return <SideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>{children}</SideNavContext.Provider>;
};

export const useSideNav = () => {
  const context = useContext(SideNavContext);
  if (context === undefined) {
    throw new Error("useSideNav must be used within a SideNavProvider");
  }
  return context;
};
