import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useForm} from "react-hook-form";
import style from "./auth.module.sass"
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Navigate, useLocation, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {fakeAuth} from "./auth.slice.js";
import classNames from "classnames";

const Auth = () => {

    const {isAuth} = useSelector((state) => state.auth)

    const location = useLocation()

    if (isAuth) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = data => {
        dispatch(fakeAuth(true))
        navigate('/dashboard')
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className={style.auth}>
                <div className={classNames(style.auth__logo)}>
                    <svg viewBox="0 0 90 34" width="90" height="34" className="header-navbar-logo">
                        <use xlinkHref="#darkLogoFill" transform="translate(.6 .42)" fill="#fff"/>
                        <defs>
                            <path id="darkLogoFill" fillRule="evenodd"
        d="M77.447.143c3.36-.495 6.436.308 8.508 2.256 1.915 1.762 2.888 4.265 2.637 6.923-.44 4.915-2.857 8.872-9.638 15.394l-11.082.371s7.692-6.924 10.611-10.293c1.884-2.194 2.7-4.544 1.915-6.12-.502-.99-1.6-1.484-2.95-1.422V.142zM54.75 4.037v6.399l9.606-1.02V2.708l-9.606 1.33zM46.902 33V5.12l6.592-.929v28.81h-6.592zM20.814 8.735v5.41l7.283-.804V7.746l-7.283.99zM14.818 33V9.57l5.054-.71V33h-5.054zM0 11.61v4.791l13.06-1.421V9.817L0 11.61zm4.175 5.069V33h4.772V16.185l-4.772.494zm16.639 6.956v-5.503l4.771-.402v5.657l-4.771.248zm0 3.956V33h7.283v-5.627l-7.283.217zm33.936-5.78v-6.522l6.31-.556v6.738l-6.31.34zm0 4.792V33h9.606v-6.708l-9.606.31zM30.012 33V7.468l5.745-.804V33h-5.745zm6.812-5.873V33h8.32v-6.12l-8.32.247zm29.667-.896l.031 6.77H89v-7.42l-22.509.65zm.314-12.149C66.428 6.355 69.63 1.626 76.16.266l.031 7.233c-1.38.556-2.73 1.608-2.417 5.965l-6.97.618z"/>
                        </defs>
                    </svg>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={classNames(style.auth__form)}>
                    <div>
                        <h2>Добро пожаловать в
                            систему создания опросов Tele2!</h2>
                        <p>
                            Чтобы войти в систему, укажите свои доменные учетные данные
                        </p>
                    </div>
                    <TextField
                        {...(register("email", {
                            required: "Введите Email"
                        }))}
                        label="Email"
                        id="email"
                        variant="outlined"
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : false}
                    />
                    <TextField
                        {...(register("password", {
                            required: "Введите пароль"
                        }))}
                        label="Пароль"
                        id="password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : false}
                        InputProps={{
                            endAdornment:
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                        }}
                    />

                    <Button
                        type="submit"
                        variant="outlined">
                        Войти
                    </Button>
                </form>
            </div>
        </>
    )
};

export default Auth;