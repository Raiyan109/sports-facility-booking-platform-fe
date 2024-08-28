import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { MoveUp } from 'lucide-react'



function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div className=''>
      <button className='fixed bottom-3 right-5 p-3 bg-accent z-10 text-grayText rounded-full' onClick={scrollToTop}>
        <MoveUp />
      </button>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
