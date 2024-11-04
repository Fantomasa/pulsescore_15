"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserFavoritesContextType {
  userFavorites: Array<string>;
  pushToUserFavorites: (tlName: string) => void;
  removeFromUserFavorites: (tlName: string) => void;
}

const UserFavoritesContext = createContext<UserFavoritesContextType | undefined>(undefined);

export const UserFavoritesProvider = ({ initUserFavorites, children }: { initUserFavorites: Array<string>; children: ReactNode }) => {
  const [userFavorites, setUserFavorites] = useState(initUserFavorites);

  const pushToUserFavorites = (tlName: string) => {
    setUserFavorites([...userFavorites, tlName]);
  };

  const removeFromUserFavorites = (tlName: string) => {
    const filteredFavorites = userFavorites.filter((f) => f !== tlName);
    setUserFavorites(filteredFavorites);
  };

  return (
    <UserFavoritesContext.Provider value={{ pushToUserFavorites, userFavorites, removeFromUserFavorites }}>
      {children}
    </UserFavoritesContext.Provider>
  );
};

export const useUserFavorites = () => {
  const context = useContext(UserFavoritesContext);
  if (context === undefined) {
    throw new Error("useUserFavorites must be used within a UserFavoritesProvider");
  }
  return context;
};
