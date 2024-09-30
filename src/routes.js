import ProductPage from './components/Product';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/HomePage';
import AboutUs from './components/AboutUs';

const routes = [
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    path: '/',
    children: [
      { path: '/', element: <Home /> }, 
      { path: 'product', element: <ProductPage /> }, 
      { path: 'aboutus', element: <AboutUs /> }, 
    ],
  },
];

export default routes;
