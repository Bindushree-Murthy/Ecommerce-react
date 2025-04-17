import React from 'react';
import Front from './Front';
import More from './More';
import Buy from './Buy';
import Login from './Login';
import Register from './Register';
import Purchase from './Purchase';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path='/' element={<Front />} />
                    <Route path='/more' element={<More />} />
                    <Route path='/buy' element={<Buy />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/purchase' element={<Purchase />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
    );
};
export default App;