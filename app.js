import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import Header from './components/Header';
import Body from './components/body';
import Contact from './components/contact';
import About from './components/about';
import Error from './components/error';
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

// Chunking
// Code Spliting
// Dynamic bundling
// Lazy Loading ==>== 


const Applayout = () => {
    return (
  <div className='app'>
     <Header/>
     <Outlet/>
  </div> 
    );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <Applayout/>,
  children: [

{
  path: "/",
  element: <Body/>
}
,
{
  path: "/about",
  element: <About/>,
},

{
  path: "/contact",
  element: <Contact/>,
},

{
  path: "Restaurants/:resId",
  element: <RestaurantMenu/>
}

  ],
errorElement: <Error/>,
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
