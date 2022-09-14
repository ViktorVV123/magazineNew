import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import Autorization from "./pages/Autorization";
import {AppRouter} from "./components/AppRouter";
import {Shop} from "./pages/Shop";
import {Basket} from "./components/Basket";


function App() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BrowserRouter>

            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={'/autorisation'} element={<Autorization/>}/>
                <Route path={'/Basket'} element={<Basket/>}/>
            </Routes>

            <AppRouter/>

        </BrowserRouter>
    );
}

export default App;
