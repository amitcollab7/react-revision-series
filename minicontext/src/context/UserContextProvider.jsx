import React from "react";
import UserContext from "./UserContext";

//step 2 create context provider
const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider