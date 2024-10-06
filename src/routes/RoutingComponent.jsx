import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OurStory from '../pages/OurStory';
import WhySarav from '../pages/WhySarav';
import Products from '../pages/Products';
import Infrastructure from '../pages/Infrastructure';
import Industries from '../pages/Industries';
import ContactUs from '../pages/ContactUs';

const RoutingComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<OurStory />} />
      <Route path="/why-sarav" element={<WhySarav />} />
      <Route path="/products/:id?" element={<Products />} />
      <Route path="/infrastructre" element={<Infrastructure />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  )
}

export default RoutingComponent
