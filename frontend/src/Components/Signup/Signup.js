import { Card, Form, Button, Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [signupError, setSignupError] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const formSignup = async (data) => {
        console.log("data", data);
        try {
            const response = await axios.post("http://localhost:8000/register", data);
            console.log("response", response);
            navigate("/login");
        }
        catch (error) {
            console.log("error", error);
            setSignupError(error.response.data.msg);
        }


    }
    return (
        <section className="login-wrapper d-flex align-items-center justify-content-center">
            <Card body className="login-card p-4 my-4">
                <div className="text-center mb-4">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <Form onSubmit={handleSubmit(formSignup)}>
                    {
                        signupError &&
                        <Alert variant={"danger"}>
                            {signupError}
                        </Alert>
                    }
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            {...register("name", {
                                required: "Name is required"
                            })} />
                        {errors.name &&
                            <Form.Text className="text-danger">
                                {errors.name.message}
                            </Form.Text>
                        }
                    </Form.Group>
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
                        Already have an account? <NavLink to="/login">Login</NavLink>
                    </div>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Card>
        </section>
    )
}