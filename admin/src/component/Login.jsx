import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../form.css"

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const onFormSumbit = (ev) => {
        ev.preventDefault();
        debugger;
        console.log(formData)

        if (formData.username && formData.password) {
            console.log(formData)
            {
                fetch("http://localhost:4001/user",
                    {
                        method: "POST",
                        body: JSON.stringify(formData),
                        headers: {
                            'Content-Type': 'application.json'
                        },
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("normal",data)
                        if (data.user) {
                            console.log("user",data.user)
                            navigate("/View")
                        }
                        else {
                            alert(data.error);
                        }
                    })
                    .catch((err) => console.log(err));
            }
        }
    }

    return (
        <>
            <div className="form">
                <form onSubmit={(ev) => onFormSumbit(ev)} >
                    <div className="input">
                        <label htmlFor=""> Username </label> <br />
                        <input type='text' placeholder='username' name='username' onChange={(ev) => handleChange(ev)} /> <br />
                    </div>

                    <div className="input">
                        <label htmlFor=""> Password </label> <br />
                        <input type='password' placeholder='password' name='password' onChange={(ev) => handleChange(ev)} />
                    </div>

                    <button type='submit' value='save' >Login</button>

                </form>
            </div>
        </>
    )
}

export default Login
