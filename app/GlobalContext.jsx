"use client";

import supabase from "./authCompany";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
      } else {
        const initialState = {
          entity_id: Cookies.get("entity_id") || user.id,
        };
        const value = {
          state: initialState,
        };
        setContextValue(value);
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
