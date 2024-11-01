import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "./login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            const room = location.state?.room;
            if (room) {
                navigate('/DatePickerWithLayout', { state: { room } });
            } else {
                navigate('Home');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="auth-container">
                <div className="p">
                    <br />
                    <br />
                    <br />

                    <h2 className="h2">LogIn</h2>
                    {error && <Alert variant="danger"> {error} </Alert>}


                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="h2" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="h2" controlId="formPassword">
                            <Form.Control
                                type="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />

                        </Form.Group>


                        <div className="grid">
                            <Button variant="primary" type="Submit">
                              <Link to="/Home">  Log In</Link>
                            </Button>
                        </div>

                        <div>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>
                        <div className="box">
                            Dont have an account ? <Link to="/Signup">Sign up</Link>
                        </div>
                    </Form>
                    <hr />
                </div>


            </div>


        </>
    );
};

export default Login;