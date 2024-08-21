import React from 'react';

const Caet = (props) => {
    return (
        <div className='cart_body'>
            <h3>Total Salary: {props.totalSalary}$</h3>
        </div>
    );
};

export default Caet;