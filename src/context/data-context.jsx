import { useEffect } from "react";
import { useState , createContext, useContext } from "react";
import { GetNews } from "../services/services";


const dataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        GetNews(setData)
    },[])

    return(
        <dataContext.Provider value={{data,setData}}>
            { children }
        </dataContext.Provider>
    )
};

export const useNewsData = () => useContext(dataContext);