import Advanced from './features/Advanced'
import Calendar from './features/Calendar'
import Password from './features/Password'

export default function Home() {
  return (
    <div className='flex flex-row justify-around mt-40'>
      <Password />
      <Calendar />
      <Advanced />
    </div>
  )
}
