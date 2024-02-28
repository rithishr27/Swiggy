import './App.css'
import Header from './Component/Header';
import ResContainer from './Component/Res-container';
import About from './Component/About';
import Contact from './Component/Contact'
import ResDetails from './Component/ResDetails';
import SignIn from './Component/SignIn';
import Body from './Component/Body';
import { Children, useEffect, useState } from 'react';
import { Outlet , RouterProvider , createBrowserRouter} from 'react-router-dom';

// const Counter = () => {

//   const [count,setCount] = useState(0);

//   const increment = () => {
//     setCount(count+1);
//   }

//   const decrement = () => {
//     setCount(count-1);
//   }

//   useEffect( () => {
//     console.log('Effect called');
//   } , [count])

//   return (
//     <>
//       <h3>Count : {count}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>decrement</button>
//     </>
//   )
// }


const Home = () => {

  return (
    <>
      {Header()}
      <Outlet />
    </>)
    
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    children : [
      {
        path : "/",
        element : <ResContainer/>
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact/>
      },{
        path : "restaurant/:resId",
        element : <ResDetails />
      }
    ]
}
])

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App;