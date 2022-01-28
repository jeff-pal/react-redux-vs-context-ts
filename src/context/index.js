import React, { createContext, useState } from 'react';
const Context = createContext();

function ContextProvider({ children }) {
    let [id, setId] = useState(0);
    let [user, setUser] = useState('Context');
    return (
        <Context.Provider value={{ id, setId, user, setUser }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };