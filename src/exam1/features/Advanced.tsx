import { useCallback, useState } from 'react'
import Input from '../components/Input'
import Calendar from './Calendar'

export default function Advanced() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [birthday, setBirthday] = useState('')

  const handleSubmit = useCallback((value: string) => {
    setBirthday(value)
    setShowCalendar(false)
  }, [])

  const handleCancel = useCallback(() => setShowCalendar(false), [])
  const handleFocus = useCallback(() => setShowCalendar(true), [])

  return (
    <div className='w-[335px]'>
      <Input
        label='Birthday'
        placeholder='mm/dd/yyyy'
        showOption={false}
        type='text'
        value={birthday}
        onFocus={handleFocus}
      />
      {showCalendar && <Calendar submit={handleSubmit} cancel={handleCancel} />}
    </div>
  )
}
