import Advanced from './components/Advanced'
import Calendar from './components/Calendar'
import Password from './components/Password'

export default function Exam1() {
  return (
    <div className='flex flex-row justify-around mt-40'>
      <Password />
      <Calendar />
      <Advanced />
    </div>
  )
}
