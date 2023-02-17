import { Link, Route, Routes } from "react-router-dom"
import Instructions from "./Instructions"
import UserContext from "./UserContext"
import Home from "./Home"
import Form from "./Form"

export default (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<UserContext><Home /></UserContext>}></Route>
                <Route path="/Form" element={<UserContext><Form /></UserContext>}></Route>
                <Route path="/Instructions" element={<UserContext><Instructions /></UserContext>}></Route>
            </Routes>
        </div>
    )

}