import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("accToken"));
    const [user, setUser] = useState("");
    const storeTokenInLs = (serverToken) => {
        return localStorage.setItem('accToken', serverToken)
    };

    let isLoggedIn = !!token;

    // const userAuthentication = async() => {
    //     try{
    //         const response = await fetch("http://localhost:5001/results",
    //         {
    //             method : " GET ",
    //             headers : {
    //                 Authorization : `Bearer ${token}`
    //             }
    //         });

    //         if(response.ok){
    //             const data = await response.json();
    //             setUser(data);
    //         }

    //     }catch(error){
    //         console.error("Error fetching user data");
    //     }
    // }

    // useEffect(() => {
    //     userAuthentication();
    // }, [])

    //logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("accToken");
    };

    return (<AuthContext.Provider value={{isLoggedIn, storeTokenInLs, LogoutUser,user}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth =() => {
    return useContext(AuthContext);
}