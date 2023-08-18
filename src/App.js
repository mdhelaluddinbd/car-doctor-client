import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/routes/Routes';


function App() {
  
  return (
    <div data-theme="light" className="App max-w-screen-xl mx-auto ">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
