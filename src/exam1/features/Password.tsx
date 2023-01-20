import { useCallback, useState } from 'react'
import Input from '../components/Input'
import Validator from '../components/Validator'

const initialOptions = [
  {
    check: false,
    content: 'Have at least one uppercase letter',
    validator: (value: string) => /[A-Z]/.test(value),
  },
  {
    check: false,
    content: 'Have at least one lowercase letter',
    validator: (value: string) => /[a-z]/.test(value),
  },
  {
    check: false,
    content: 'Have at least one number',
    validator: (value: string) => /\d/.test(value),
  },
  {
    check: false,
    content: 'Have at least one special character (!@#$...etc)',
    validator: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
  },
  {
    check: false,
    content: 'Longer than 8 characters',
    validator: (value: string) => value.length > 8,
  },
]

export default function Password() {
  const [options, setOptions] = useState(initialOptions)

  const handleChange = useCallback(({ target }: any) => {
    setOptions((options) =>
      options.map((option) => {
        option.check = option.validator(target.value)
        return option
      })
    )
  }, [])

  return (
    <div className='w-[335px] text-white'>
      <Input
        onChange={handleChange}
        label='Password'
        type='password'
        placeholder='Password'
      />
      <Validator options={options} />
    </div>
  )
}
