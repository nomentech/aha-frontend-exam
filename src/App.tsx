import Advanced from './components/Advanced'
import Calendar from './components/Calendar'
import Password from './components/Password'

function App() {
  return (
    <div className='flex flex-row justify-around mt-40'>
      <Password />
      <Calendar />
      <Advanced />
    </div>
  )
}

export default App
