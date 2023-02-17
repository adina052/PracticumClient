import { useContext, useState } from "react"
import UserContext, { userCtx } from "./UserContext"


export default function ChildForm(props) {
    const childrenContext = useContext(userCtx)
    const index=props.index;
    return (
        <div>
            <div className="form-outline">

                <label className="form-label">name:</label>
                <input type="text" name="name" className="form-control"
                defaultValue={childrenContext.children[index].name}
                    onChange={(e) => {
                        const arr=childrenContext.children;
                        arr[props.index].name=e.target.value;
                        childrenContext.setChildren(arr);
                    }} 
                    />
            </div>

            <div className="form-outline">

                <label className="form-label">date birth:</label>
                <input type="date" name="dateBirth" maxLength="9" className="form-control" pattern="[0-9]*" defaultValue={childrenContext.children[index].dateBirth}
                    onChange={(e) => {
                        const arr=childrenContext.children;
                        arr[props.index].dateBirth=e.target.value;
                        childrenContext.setChildren(arr);                    }} />
            </div>

            <div className="form-outline">

                <label className="form-label">identity:</label>
                <input type="text" name="identity" maxLength="9" className="form-control" defaultValue={childrenContext.children[index].identity}
                    onChange={(e) => {
                        const arr=childrenContext.children;
                        arr[props.index].identity=e.target.value;
                        childrenContext.setChildren(arr);                    }} />
            </div>


        </div>
    )
}