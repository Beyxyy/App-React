import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Rooter, Routes, Route, Router } from 'react-router-dom';

import Home from './Page/Home'
import Data from './Page/Data';
import Profile from './Page/Profile';
import Meal from './Page/Meal';
import Activity from './Page/Activity';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rooter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>  
        <Route path='/meal' element={<Meal/>}></Route>      
        <Route path='/profile' element={<Profile/>}></Route>      
        <Route path='/data' element={<Data/>}></Route>      
        <Route path='/activity' element={<Activity/>}></Route>      
      </Routes>

    </Rooter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);


