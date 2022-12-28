import Advanced from './Advanced'
import Calendar from './Calendar'
import Password from './Password'

export default function Home() {
  return (
    <div className='flex flex-row justify-around mt-40'>
      <Password />
      <Calendar />
      <Advanced />
    </div>
  )
}
