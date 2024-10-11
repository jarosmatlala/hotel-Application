import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("Pay");
        } catch (err) {
            setError(err.message);
        }
    };


    const handleGoogleSignIn = async () => {
        e.preventDefault();
    };

    return (
        <>
            <div>
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

                            <Form.Control
                                type="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />

                        </Form.Group>


                        <div className="grid">
                            <Button variant="primary" type="Submit">
                                Log In
                            </Button>
                        </div>

                        <div>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>

                    </Form>
                    <hr />
                </div>


                <GoogleButton className="gbtn" type="dark" onClick={handleGoogleSignIn} />
            </div>
            <div className="box">
                Dont have an account ? <Link to="/Signup">Sign up</Link>
            </div>

        </>
    );
};

export default Login;