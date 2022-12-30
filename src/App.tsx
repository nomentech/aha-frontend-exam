import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Exam1 from './exam1/Home'
import Exam2 from './exam2/pages/Home'
import Result from './exam2/pages/Result'
import Tag from './exam2/pages/Tag'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='flex flex-row justify-around mt-40'>
        <Link to='/exam1'>Exam1</Link>
        <Link to='/exam2'>Exam2</Link>
      </div>
    ),
  },
  {
    path: 'exam1',
    element: <Exam1 />,
  },
  {
    path: 'exam2',
    element: <Exam2 />,
  },
  {
    path: 'exam2/result',
    element: <Result />,
  },
  {
    path: 'exam2/tag',
    element: <Tag />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
