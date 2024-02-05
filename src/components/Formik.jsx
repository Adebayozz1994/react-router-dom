import React, { useState } from 'react'
// import axios from "axios"
// import { Toast } from 'bootstrap';
import { useFormik } from 'formik';








const Tenary = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        
    });

    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
        <h1>form </h1>
                <input type="text" onChange={formik.handleChange} placeholder='first name' value={formik.values.firstName} name="firstName" />
                <input type="text" onChange={formik.handleChange} placeholder='last name' value={formik.values.lastName} name="lastName"/>
                <input type="email" onChange={formik.handleChange} placeholder='Email' value={formik.values.email} name="email"/>
                <input type="password" onChange={formik.handleChange} placeholder='Password' value={formik.values.password} name="password"/>
                <button type='submit'>Submit</button>
            </form>
            {/* <h2>
                {name}
            </h2> */}
            {/* <h1>
                {allUsers.map((user, index) => (
                    <div key={index}>
                        {user.firstName} {user.lastName} {user.email} {user.password}
                    </div>
                ))}
            </h1> */}

        </div>
    )
    }



export default Tenary