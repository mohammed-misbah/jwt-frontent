import {BrowserRouter as Router ,Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute' 
import {AuthProvider} from './context/AuthContext'
import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Header/>
        <PrivateRoute component={HomePage} path='/' exact/>
        <Route component={LoginPage} path='/login'/>
        </AuthProvider>
      </Router>
    {/* <HomePage/> */}
    {/* <LoginPage/> */}
    </div>
  );
}

export default App;
