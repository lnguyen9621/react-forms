import React from 'react';

export const UserList = (props) => {

    return (
        <div>
            {props.users.map(user => (
                <p>{user.name}, {user.age}, {user.gender}, {user.skills}, {user.about}</p>
            ))}
        </div>
    );
}