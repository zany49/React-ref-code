import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useRoutes } from 'react-router-dom';
import Login from './pages/login/login';
import UserPageIndex from './pages/UserPage';
import AddList from './pages/UserPage/Addlist';
import ViewList from './pages/UserPage/viewList';

function App() {

  const baseRoutes = useRoutes([
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/user-page",
      element:<UserPageIndex />,
      children:[
        {
        path:"add-user",
        element:<AddList />,
      },
      {
        path:"add-user/:id",
        element:<ViewList />,
      },
      // {
      //   path:"add-user/ak",
      //   element:<ViewList />,
      // }
    ]
    }
])
  return (
 <>
 {baseRoutes}
 </>
  );
}

export default App;
