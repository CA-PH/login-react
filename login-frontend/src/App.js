import {BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import UserManagement from './pages/UserManagement'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'


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
            <Route 
              path='/signup'
              element={<Signup/>}
              />
          </Routes>
        </div>
      </BrowserRouter>  
    </div>
  );
}


export default App;
