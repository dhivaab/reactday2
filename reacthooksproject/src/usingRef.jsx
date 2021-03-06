import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const UsingRef = () => {

    let history = useHistory();

    const inputref = useRef();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        inputref.current.focus();
    },[])
    const addnewcontactform = (e) => {
        e.preventDefault();
        const newContact = {
            id: 1,
            name: name,
            phone: phone,
            email: email,
        };
        history.push("/login");
    };


    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => addnewcontactform(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            ref ={inputref}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Create Contact
          </button>
                </form>
            </div>
        </div>
    );
};

export default UsingRef;
