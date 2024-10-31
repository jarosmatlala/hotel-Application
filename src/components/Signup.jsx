import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import {Form,Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {useUserAuth} from "../context/UserAuthContext";
import GoogleButton from "react-google-button";



const SignUp = () =>{

    const [email,setEmail] = useState ("");
    const [password,setPassword] = useState ("");
    const [error,setError] = useState ("");
    const {signUp} = useUserAuth();
    const navigate = useNavigate();




    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email,password);
            navigate("/Login");
        }catch (err){
            setError(err.message);
        }
    };


    return(

        <>
        <div>
            <div className="p">
                <h2 className="h2">SignUp</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}  >
                    <Form.Group className="h2" controlId="formBasicEmail">
                        <Form.Control 
                        type="email" placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                <Form.Group className ="ps" controlId="formPassword">
                    <Form.Control 
                    type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>



                <div className="grid">
                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </div>
                </Form>
                <hr />
            </div>
            <GoogleButton className="gbtn" type="dark" />
        </div>
        <div className="box">
Dont have an account ? <Link to="/">Log In</Link>
        </div>

        </>
    );
};

export default SignUp;