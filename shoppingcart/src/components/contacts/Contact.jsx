import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../actions/ContactsAction";

const Contact = ({ contact, selectAll }) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input
                        id={"selectAllSingle_" + id}
                        value={selectAll}
                        type="checkbox"
                        className="custom-control-input"
                        onClick={() => { }}
                    />
                    <label className="custom-control-label" htmlFor={"selectAllSingle_" + id}
                    ></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2">edit</span>
                </Link>
                <span
                    className="material-icons  text-danger"
                    onClick={() => dispatch(deleteContact(id))}
                >
                    remove_circle
        </span>
            </td>
        </tr>
    );
};

export default Contact;
