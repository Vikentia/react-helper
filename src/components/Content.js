import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Component from './Component';
import Props from './Props';
import Main from './Main';
import State from './State';
import Events from './Events';
import Lifecycle from './Lifecycle';
import Key from './Key';
import Refs from './Refs';
import Async from './Async';
import VirtualDom from './VirtualDom';
import ReactMemo from './ReactMemo';
import Fragment from './Fragment';
import UseEffect from './UseEffect';
import Router from './Router';
import Context from './Context';
import Form from './Form';
import './Content-style.css';


function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path='/react-helper' element={<Main />} />
                <Route path='/components' element={<Component />} />
                <Route path='/props' element={<Props />} />
                <Route path='/state' element={<State />} />
                <Route path='/Lifecycle' element={<Lifecycle />} />
                <Route path='/events' element={<Events />} />
                <Route path='/key' element={<Key />} />
                <Route path='/refs' element={<Refs />} />
                <Route path='/async' element={<Async />} />
                <Route path='/virtual-dom' element={<VirtualDom />} />
                <Route path='/fragment' element={<Fragment />} />
                <Route path='/react-memo' element={<ReactMemo />} />
                <Route path='/useEffect' element={<UseEffect />} />
                <Route path='/router' element={<Router />} />
                <Route path='/context' element={<Context />} />
                <Route path='/form' element={<Form />} />
            </Routes >
        </div >
    );
}

export default Content;