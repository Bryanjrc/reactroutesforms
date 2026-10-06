import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";

export default class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/cine" element={<Cine/>}></Route>
                    <Route path="/musica" element={<Musica/>}></Route>
                    <Route path="/formsimple" element={<FormSimple/>}></Route>
                    <Route path="/collatz" element={<Collatz/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }

}