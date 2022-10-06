import './App.css';
import Main from "./layouts/Main";
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCart } from "./loaders/productsAndCart";

import { createBrowserRouter,
  RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>
        },
        {
          path:'/Shop',
          loader:()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/Orders',
          loader: productsAndCart,
          element:<Orders></Orders>
        },
        {
          path:'/Inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/About',
          element:<About></About>
        }
      ]
    }
  ]);


  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
