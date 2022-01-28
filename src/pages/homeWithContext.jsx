import React, { useContext } from 'react';

import { Context } from '../context'

export default () => {
    
    const { id, user } = useContext(Context);
    return (
        <div>
            <h2>Home with Context</h2>
            <p>ID: {id}</p>
            <p>User: {user}</p>
        </div>
    )
}