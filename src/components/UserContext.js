import { createContext, useEffect, useState } from "react"

export const userCtx = createContext();

export default (props) => {
    const [user, setUser] = useState({ firstName: "", lastName: "", identity:null, dateBirth:null, gender:false, HMO:null ,numOfChildren:null})
    const [children, setChildren] = useState([]);
    return (
        <userCtx.Provider value={{ user,setUser,children,setChildren }}>
            {props.children}
        </userCtx.Provider>
    )
}