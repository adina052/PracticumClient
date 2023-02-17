import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userCtx } from './UserContext'
import ChildForm from "./ChildForm";
import { useNavigate } from "react-router-dom"

export default () => {

    const userContext = useContext(userCtx);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const onFormSubmit = data => {
        console.log(userContext.children)
        console.log(userContext.user)
        const user = {
            idNumber: parseInt(userContext.user.identity), firstName: userContext.user.firstName, lastName: userContext.user.lastName,
            dateBirth: userContext.user.dateBirth, gender: true, HMO: parseInt(userContext.user.HMO)
        }
        console.log("user", user)
    
        axios.post("https://localhost:5001/api/User ", user)
            .then((d) => {
                console.log("data from post", d)
                userContext.children.map((c) => {
                    axios.post("https://localhost:5001/api/Child", { idNumber: c.identity, name: c.name, dateBirth: c.dateBirth, Parent1Id: d.data.id })
                        .catch(e => console.log(e))
                        .then(e => console.log(e))
                })
            })
            .catch(e => console.log(e))
  
    }


    const onErrors = errors => console.error(errors);

    const registerOptions = {
        firstName: { required: { value: true, message: "first name is required" } },
        lastName: { required: "last is required" },
        identity: { required: "identity is required" },
        dateBirth: { required: "dateBirth is required", },
        gender: { required: "gender is required" },
        HMO: { required: "HMO is required" },
        numOfChildren: { numOfChildren: "last is required" }
    };

    const [childrenArr, setChildrenArr] = useState([]);

    const UpdateChildren = (e) => {
        const x = [];
        const y = [];
        for (let i = 1; i <= e; i++) {
            <p>child number {i}</p>
            x.push(`child number${i}`, <ChildForm key={i - 1} index={i - 1} />)

            y.push({ name: "", dateBirth: "", identity: "" })
        }
        userContext.setChildren(y);
        setChildrenArr(x);
    }
    const nevigate = useNavigate();
  
    return (
        <div>

            <button onClick={() => { nevigate('/') }}>home</button>
            <form onSubmit={handleSubmit(onFormSubmit, onErrors)} style={{
                width: "50%",
                marginLeft: "25%"
            }}>

                <div className="form-outline">
                    <label className="form-label">first name:</label>
                    <input type="text" name="firstName" className="form-control"{...register('firstName', registerOptions.firstName)} defaultValue={userContext.user.firstName}
                        onChange={(e) => {
                            userContext.setUser({ firstName: e.target.value, lastName: userContext.user.lastName, identity: userContext.user.identity, dateBirth: userContext.user.dateBirth, gender: userContext.user.gender, HMO: userContext.user.HMO, numOfChildren: userContext.user.numOfChildren })
                        }} />
                    <small>  {errors?.firstName && errors.firstName.message}</small>
                </div>

                <div className="form-outline">
                    <label className="form-label">last name</label>
                    <input type="text" name="lastName" className="form-control"{...register('lastName', registerOptions.lastName)} defaultValue={userContext.user.lastName}
                        onChange={(e) => {

                            userContext.setUser({ firstName: userContext.user.firstName, lastName: e.target.value, identity: userContext.user.identity, dateBirth: userContext.user.dateBirth, gender: userContext.user.gender, HMO: userContext.user.HMO, numOfChildren: userContext.user.numOfChildren })
                        }} />
                    <small>  {errors?.lastName && errors.lastName.message}</small>
                </div>


                <div className="form-outline">
                    <label className="form-label">identity</label>
                    <input type="text" name="identity" className="form-control" maxLength="9" pattern="[0-9]*" {...register('identity', registerOptions.identity)} defaultValue={userContext.user.identity}
                        onChange={(e) => {
                            userContext.setUser({ firstName: userContext.user.firstName, lastName: userContext.user.lastName, identity: e.target.value, dateBirth: userContext.user.dateBirth, gender: userContext.user.gender, HMO: userContext.user.HMO, numOfChildren: userContext.user.numOfChildren })
                        }} />
                    <small>  {errors?.identity && errors.identity.message}</small>
                </div>

                <div className="form-outline">
                    <label className="form-label">date birth</label>
                    <input type="date" name="dateBirth" className="form-control" max="" {...register('dateBirth', registerOptions.dateBirth)} defaultValue={userContext.user.dateBirth}
                        onChange={(e) => {
                            userContext.setUser({ firstName: userContext.user.firstName, lastName: userContext.user.lastName, identity: userContext.user.identity, dateBirth: e.target.value, gender: userContext.user.gender, HMO: userContext.user.HMO, numOfChildren: userContext.user.numOfChildren })
                        }} />
                    <small>  {errors?.dateBirth && errors.dateBirth.message}</small>
                </div>

                <div className="form-outline">
                    <label className="form-check-label">male</label>
                    <input type="radio" name="gender" className="form-check-input" value="true" {...register('gender', registerOptions.gender)}
                        onInput={(e) => {
                            userContext.setUser({ firstName: userContext.user.firstName, lastName: userContext.user.lastName, identity: userContext.user.identity, dateBirth: userContext.user.dateBirth, gender: e.target.value, HMO: userContext.user.HMO, numOfChildren: userContext.user.numOfChildren })
                        }} />
                    <label className="form-check-label">female</label>
                    <input type="radio" name="gender" className="form-check-input" value="false" {...register('gender', registerOptions.gender)}
                        onInput={(e) => {
                            userContext.setUser({ firstName: userContext.user.firstName, lastName: userContext.user.lastName, identity: userContext.user.identity, dateBirth: userContext.user.dateBirth, gender: e.target.value, HMO: userContext.user.HMO, numOfChildren: userContext.user.numOfChildren })
                        }} />
                    <small>  {errors?.gender && errors.gender.message}</small>
                </div>

                <div className="form-outline">
                    <label className="form-label">HMO</label>
                    <select name="HMO" className="select"  {...register('HMO', registerOptions.HMO)}
                        onChange={(e) => {
                            userContext.setUser({ firstName: userContext.user.firstName, lastName: userContext.user.lastName, identity: userContext.user.identity, dateBirth: userContext.user.dateBirth, gender: userContext.user.gender, HMO: e.target.value, numOfChildren: userContext.user.numOfChildren })
                        }}>
                        <option value="0">Macabi</option>
                        <option value="1">Leumit</option>
                        <option value="2">Clalit</option>
                        <option value="3">Meuchedet</option>
                    </select>
                    <small>  {errors?.HMO && errors.HMO.message}</small>
                </div>

                <div className="form-outline">
                    <label className="form-label">num of children</label>
                    <input type="number" name="numOfChildren" id="form6Example1" className="form-control" min="0" {...register('numOfChildren', registerOptions.numOfChildren)} defaultValue={userContext.user.numOfChildren}
                        onChange={(e) => {
                            userContext.setUser({ firstName: userContext.user.firstName, lastName: userContext.user.lastName, identity: userContext.user.identity, dateBirth: userContext.user.dateBirth, gender: userContext.user.gender, HMO: userContext.user.HMO, numOfChildren: e.target.value })
                            UpdateChildren(e.target.value)
                        }} />

                    <small>  {errors?.numOfChildren && errors.numOfChildren.message}</small>
                </div>
                {childrenArr}
                <button className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}