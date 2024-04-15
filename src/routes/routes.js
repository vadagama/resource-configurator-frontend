import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from '../pages/services';
import Faq from '../pages/faq';
import Saved from '../pages/saved';
import Scenarios from '../pages/scenarios';

function SiteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Services />} />
      <Route path='/services' element={<Services />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/scenarios' element={<Scenarios />} />
      <Route path='/faq' element={<Faq />} />
    </Routes>
  );
}

export default SiteRoutes;
