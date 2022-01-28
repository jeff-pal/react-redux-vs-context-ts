import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginWithContext, HomeWithContext, LoginWithRedux, HomeWithRedux } from './pages';

function Router() {
    const store = process.env.REACT_APP_STORE;
    return(
        <BrowserRouter>
            {
                store === 'redux' ?
                <Routes>
                    <Route exact path="/loginWithRedux" element={<LoginWithRedux />} />
                    <Route exact path="/homeWithRedux" element={<HomeWithRedux />} />
                    <Route path="*" element={<Navigate to="/loginWithRedux"/>}/>
                </Routes> :
                <Routes>
                    <Route exact path="/loginWithContext" element={<LoginWithContext />} />
                    <Route exact path="/homeWithContext" element={<HomeWithContext />} />
                    <Route path="*" element={<Navigate to="/loginWithContext"/>}/>
                </Routes>
            }

        </BrowserRouter>
    )    
}

export default Router;