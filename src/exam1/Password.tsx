import { useCallback, useState } from 'react'

export default function Password({
  label = 'Password',
  placeholder = 'Password',
  showOption = true,
  type = 'password',
  value,
  onFocus,
}: any) {
  const [options, setOptions] = useState([
    {
      check: false,
      content: 'Have at least one uppercase letter',
      validator: useCallback(
        (value: string) => new RegExp('[A-Z]').test(value),
        []
      ),
    },
    {
      check: false,
      content: 'Have at least one lowercase letter',
      validator: useCallback(
        (value: string) => new RegExp('[a-z]').test(value),
        []
      ),
    },
    {
      check: false,
      content: 'Have at least one number',
      validator: useCallback(
        (value: string) => new RegExp('[0-9]').test(value),
        []
      ),
    },
    {
      check: false,
      content: 'Have at least one special character (!@#$...etc)',
      validator: useCallback(
        (value: string) => new RegExp('[!@#$%^&*(),.?":{}|<>]').test(value),
        []
      ),
    },
    {
      check: false,
      content: 'Longer than 8 characters',
      validator: useCallback((value: string) => value.length > 8, []),
    },
  ])

  const MenuOption = ({ check, content }: any) => (
    <div className='flex flex-row items-center'>
      <div className='w-6 h-6 mx-3'>{check ? checkSolid : checkOutline}</div>
      <span className='text-sm'>{content}</span>
    </div>
  )

  const changeHandler = ({ target }: any) => {
    setOptions((options) =>
      options.map((option) => {
        option.check = option.validator(target.value)
        return option
      })
    )
  }

  return (
    <div className='w-[335px] text-white'>
      <div>
        <div className='relative top-2 left-3 px-1 text-xs w-fit bg-customblack '>
          {label}
        </div>
        <input
          className='px-2 h-14 rounded-lg w-full
                      bg-customblack border-[3px] border-customgray  
                      hover:border-white focus:outline-none focus:border-primary'
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          value={value}
          onFocus={onFocus}
        />
      </div>
      {showOption && (
        <div className='h-[226px] py-4 mt-5 flex flex-col justify-between rounded-lg bg-[#242424]'>
          {options.map((option, index) => (
            <MenuOption
              key={index}
              check={option.check}
              content={option.content}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const checkSolid = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6 text-secondary'
  >
    <path
      fillRule='evenodd'
      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
      clipRule='evenodd'
    />
  </svg>
)

const checkOutline = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6 text-customgray'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
)
