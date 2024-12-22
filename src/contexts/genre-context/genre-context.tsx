"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface GenreContextType {
  genres: string[];
}

const GenreContext = createContext<GenreContextType | undefined>(undefined);

export const useGenreContext = () => {
  const context = useContext(GenreContext);
  if (context === undefined) {
    throw new Error("useGenreContext must be used within a GenreProvider");
  }
  return context;
};

interface GenreProviderProps {
  children: ReactNode;
  genres: string[];
}

export const GenreProvider: React.FC<GenreProviderProps> = ({
  children,
  genres,
}) => {
  return (
    <GenreContext.Provider value={{ genres }}>{children}</GenreContext.Provider>
  );
};
