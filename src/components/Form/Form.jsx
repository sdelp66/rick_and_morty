import React from "react";
import style from './Form.module.css';
import validate from "./validation";

export default function Forms(props) {

    const [userData, setUserData] = React.useState({ username: '', password: '' });

    const [errors, setErrors] = React.useState({username:'', password:'' })

    const handleInputChange = (evento) =>{
        setUserData({
            ...userData,
            [evento.target.name]:evento.target.value
        });

        setErrors(validate({
            ...userData,
            [evento.target.name]:evento.target.value
        }));

    }



    const handleSubmit = (evento) =>{
        evento.preventDefault();
        props.login(userData);
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className={style.form}>
                <br />
                <div className={style.uName}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" 
                        name="username" 
                        value={userData.username}
                        onChange={handleInputChange} />
                    <span className={style.danger}>{errors.username ? errors.username : ""}</span>
                </div>
                <br />
                <div className={style.uName}>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        name="password" 
                        value={userData.password}
                        onChange={handleInputChange} />
                    <span className={style.danger}>{errors.password ? errors.password : ""}</span>
                </div>
                <br />
                <button type="submit">Login</button>
                <br />
            </div>
        </form>
    );
};