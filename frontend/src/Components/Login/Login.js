import { Card, Form, Button, Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_DETAILS } from "../../mobileRedux/action";

export default function Login() {
    const [loginError, setLoginError] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const formLogin = async (data) => {
        // console.log("data", data);
        try {
            const response = await axios.post("http://localhost:8000/login", data);
            // console.log("response", response.data.user);
            dispatch(USER_DETAILS(response.data.user))
            const {name, role} = response.data.user;
            const userDetails = {name, role}
            localStorage.setItem("userDetails", JSON.stringify(userDetails))
            navigate("/mobile");
        }
        catch (error) {
            console.log("error", error);
            setLoginError(true);
        }


    }
    return (
        <section className="login-wrapper d-flex align-items-center justify-content-center">
            <Card body className="login-card p-4 my-4">
                <div className="text-center mb-4">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <Form onSubmit={handleSubmit(formLogin)}>
                    {
                        loginError &&
                        <Alert variant={"danger"}>
                            Invalid Credentials
                        </Alert>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email is Invalid"
                                }
                            })} />
                        {errors.email &&
                            <Form.Text className="text-danger">
                                {errors.email.message}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password &&
                            <Form.Text className="text-danger">
                                {errors.password.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <div className="mb-3">
                        Don't have an account? <NavLink to="/signup">Signup</NavLink>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </section>
    )
}