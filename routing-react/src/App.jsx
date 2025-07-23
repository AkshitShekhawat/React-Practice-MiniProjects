import './App.css'
import { BrowserRouter as Router, Routes, Route, Link }
    from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import NotFound from './NotFound';
import CurrentLocation from './CurrentLoation';
import Dashboard from './Dashboard';

   // BrowserRouter - it is the base componenet that enabel routing in our application and also we can refer BrowserRouter this an Router alias
  // its a container for all the app route componenet.
    // Route - it is going to define or map a specific path to a specific component. ex- /about -> About
 /*
    / -> Home
    /about -> About
    /contact -> Contact
*/
function App() {  

  return (
    <Router>
      <div className='min-h-screen bg-gray-300'>
      <nav className='bg-blue-600 p-4'>
        <ul className='flex justify-center space-x-6'>
          <li>
            <Link
              className='text-white hover:text-yellow-300 font-medium transition duration-300'
              to="/">Home
            </Link>
          </li>
          <li><Link
              className='text-white hover:text-yellow-300 font-medium transition duration-300'
              to="/about">About</Link></li>
          <li><Link
              className='text-white hover:text-yellow-300 font-medium transition duration-300'
              to="/contact">Contact</Link></li>

        </ul>
      </nav>

      <CurrentLocation/>

      <div className='container mx-auto py-8'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}>
            <Route path='team' element={<Team />}/>
          </Route>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />} />
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
      </div>
    </Router>
  )
}

export default App
