import { useState } from 'react'
import Calendar from './Calendar'
import Password from './Password'

export default function Advanced() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [birthday, setBirthday] = useState('')

  return (
    <div>
      <Password
        label='Birthday'
        placeholder='mm/dd/yyyy'
        showOption={false}
        type='text'
        value={birthday}
        onFocus={() => setShowCalendar(true)}
      />
      {showCalendar && (
        <Calendar
          submit={(value: string) => {
            setBirthday(value)
            setShowCalendar(false)
          }}
        />
      )}
    </div>
  )
}
