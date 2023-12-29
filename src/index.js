import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User.jsx';
import Github from './Components/Github/Github.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
      </Route>
      <Route path='github' element={<Github/>}/>
      <Route path='*' element={<div>Not Found</div>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);