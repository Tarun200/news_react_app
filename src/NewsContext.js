import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
export const NewsContextProvider = (props) =>{
    const [data,setData] = useState();
    const apiKey = "d6e9edbccf67420184abe8cc96cebe19";
    useEffect(()=>{
        axios.get(
            `https://newsapi.org/v2/everything?q=tesla&from=2021-08-10&sortBy=publishedAt&apiKey=${apiKey}`


        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));

    },[]);
    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};