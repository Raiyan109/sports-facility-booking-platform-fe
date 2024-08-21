import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'


function App() {

  return (
    <div className='max-w-[1480px] mx-auto container overflow-hidden px-10'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
