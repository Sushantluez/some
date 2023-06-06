import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/RootLayOut';
import HomePages from './pages/components/HomePages';
import Pagenotfound from './pages/Pagenotfound';


const App = () => {


  return (
    <>

      <Routes>

        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePages />} />

          <Route path='*' element={<Pagenotfound />} />

        </Route>



      </Routes>

    </>
  )
}

export default App