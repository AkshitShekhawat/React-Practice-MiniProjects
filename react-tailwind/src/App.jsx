import './App.css'
import DarkModeToggle from './DarkModeToggel'

function App() {

  return (
    <div className='bg-white p-4 min-h-screen dark:bg-gray-900 dark:text-white'>
      <DarkModeToggle/>
      <h1 className='text-2xl'>Welcome to Dark Mode App</h1>
      <p>This is an example of implementing dark mode using Tailwind CSS</p>
    </div>
  )
}

export default App
