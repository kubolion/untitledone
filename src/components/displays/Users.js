import React from 'react';

const Users = ({data}) => {
    return (
        <div className="list-card">
            {data.map((item) =>
                <div className="post users">
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                    <p>{item.address.street}</p>
                </div>)}
        </div>
    );
};

export default Users;