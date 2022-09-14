import { createContext } from "react";
import React from 'react'
import { useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({ isAdmin: false });

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}

