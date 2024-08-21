import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    // console.log(props)
    const name = props.user.name;
    const photo = props.user.photo;
    const email = props.user.email;
    const salary = props.user.salary;
    const addEventHandler = props.addEventHandler;
    return (
        <div className='card_box'>
            <img src={photo} alt="" />
            <h2>Hi I am {name}</h2>
            <p>Email: {email}</p>
            <p>Salary: {salary}$</p>
            <button onClick={() => addEventHandler(props.user)}>
                Add Me <FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default User;