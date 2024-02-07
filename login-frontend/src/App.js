import {BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import UserManagement from './pages/UserManagement'
import Navbar from './components/Navbar'
import Login from './pages/Login';

function requireAuth(nextState, replace, next) {
  if (!authenticated) {
    replace({
      pathname: "/login",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}

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
              onEnter={requireAuth}
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
