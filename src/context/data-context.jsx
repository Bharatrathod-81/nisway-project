import { useReducer, createContext, useContext } from "react";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const dataHandler = (state, {type, payload}) => {
        switch (type) {
            case "GET_NEWS":
                return {...state,newsData:payload};
            default:
                return state;
        }
    }

    const [data,dispatchData] = useReducer(dataHandler,{
        newsData:[]
    })

    return(
        <dataContext.Provider value={{data,dispatchData}}>
            { children }
        </dataContext.Provider>
    )
};

export const useNewsData = () => useContext(dataContext);