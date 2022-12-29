import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Exam1 from './exam1/Home'
import Exam2 from './exam2/pages/Home'
import Result from './exam2/pages/Result'
import Tag from './exam2/pages/Tag'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Aha Frondend Exam</div>,
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
