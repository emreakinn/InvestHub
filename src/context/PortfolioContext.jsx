import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {

    const [investments, setInvestments] = useState([])

    return (
        <PortfolioContext.Provider value={{ investments, setInvestments }}>
            {children}
        </PortfolioContext.Provider>
    );
};
