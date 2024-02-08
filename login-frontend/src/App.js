import {BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import UserManagement from './pages/UserManagement'
import Navbar from './components/Navbar'
import Login from './pages/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<UserManagement />}
            />
            <Route 
              path='/login'
              element={<Login/>}
              />
          </Routes>
        </div>
      </BrowserRouter>  
    </div>
  );
}


export default App;
