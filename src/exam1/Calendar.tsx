import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function Calendar({ submit }: any) {
  const today = dayjs()

  const [days, setDays] = useState<any[]>([])
  const [currentMonth, setCurrentMonth] = useState(today)
  const [selectedDay, setSelectedDay] = useState(today)

  const [showPicker, setShowPicker] = useState(false)
  const [years, setYears] = useState<any[]>([])
  const [currentYear, setCurrentYear] = useState(today)

  const Title = () => (
    <div className='my-6 text-3xl font-bold'>
      {currentMonth.format('MMM, YYYY')}
    </div>
  )

  const Header = () => (
    <div className='flex flex-row justify-between items-center cursor-pointer'>
      <div
        onClick={() =>
          showPicker
            ? setCurrentYear((current) => current.subtract(20, 'year'))
            : setCurrentMonth((current) => current.subtract(1, 'month'))
        }
      >
        {leftArrow}
      </div>
      <div onClick={() => setShowPicker(true)}>
        {showPicker ? today.format('YYYY') : currentMonth.format('MMMM YYYY')}
      </div>
      <div
        onClick={() =>
          showPicker
            ? setCurrentYear((current) => current.add(20, 'year'))
            : setCurrentMonth((current) => current.add(1, 'month'))
        }
      >
        {rightArrow}
      </div>
    </div>
  )

  const Weekdays = () => (
    // Array.from(Array(7).keys()) generates [0, ..., 6]
    <div className='flex flex-row justify-between mt-3 mb-0.5 text-xs text-[#929292]'>
      {Array.from(Array(7).keys()).map((d: number) => (
        <div
          key={d}
          className='w-9 h-9 flex flex-col justify-center items-center'
        >
          {today.day(d).format('dd')}
        </div>
      ))}
    </div>
  )

  const Body = () => (
    <div className='text-sm cursor-pointer'>
      {days.map((week, index) => (
        <div key={index} className='flex flex-row justify-between'>
          {week.map((day: any) => (
            <div
              key={day.day}
              className={`w-9 h-9 flex flex-col justify-center items-center rounded-full 
                ${!day.isCurrentMonth && !day.isSelected && 'text-[#929292]'} 
                ${day.isToday && 'border border-primary'}
                ${
                  day.isSelected
                    ? 'bg-primary'
                    : 'hover:bg-white hover:text-black'
                }`}
              onClick={() => updateSelectedDay(day)}
            >
              {day.day}
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  const Footer = () => (
    <div className='m-6 flex flex-row justify-end items-center text-sm font-semibold cursor-pointer'>
      <div>Cancel</div>
      <div
        className='ml-16'
        onClick={() => submit(selectedDay.format('MM/DD/YYYY'))}
      >
        OK
      </div>
    </div>
  )

  const Picker = () => (
    <div className='cursor-pointer'>
      {years.map((row, index) => (
        <div key={index} className='flex flex-row justify-between my-7'>
          {row.map((col: any) => (
            <div
              key={col.year}
              className={`h-6 w-[60px] flex flex-col justify-center items-center rounded-sm
                ${
                  col.isSelected
                    ? 'bg-primary'
                    : 'hover:bg-white hover:text-black'
                }`}
              onClick={() => {
                setCurrentMonth(dayjs().set('year', col.year).startOf('year'))
                setShowPicker(false)
              }}
            >
              {col.year}
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  const updateSelectedDay = (day: any) => {
    setSelectedDay(dayjs(new Date(day.year, day.month, day.day)))
    setDays((days) =>
      days.map((week) =>
        week.map((d: any) => {
          if (
            d.day === day.day &&
            d.month === day.month &&
            d.year === day.year
          ) {
            d.isSelected = true
          } else {
            d.isSelected = false
          }
          return d
        })
      )
    )
  }

  const calculateDays = useCallback(() => {
    let currentDay = currentMonth.startOf('month').day(0)
    const nextMonth = currentMonth.add(1, 'month').month()

    let arrayOfDays = []
    let weekDays = []

    let weekCounter = 1
    while (currentDay.day(0).month() !== nextMonth) {
      weekDays.push({
        day: currentDay.date(),
        month: currentDay.month(),
        year: currentDay.year(),
        isCurrentMonth: currentDay.month() === currentMonth.month(),
        isToday: currentDay.isSame(today, 'day'),
        isSelected: currentDay.isSame(today, 'day'),
      })

      if (weekCounter === 7) {
        arrayOfDays.push(weekDays)
        weekDays = []
        weekCounter = 0
      }

      weekCounter++
      currentDay = currentDay.add(1, 'day')
    }

    setDays(arrayOfDays)
    if (days.length !== 0) updateSelectedDay(selectedDay)
  }, [currentMonth])

  const calculateYears = useCallback(() => {
    let start = Math.floor(currentYear.year() / 10) * 10 + 1
    const arrayOfYear = Array.from(Array(5), () => new Array(4))
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        const y = start++
        arrayOfYear[i][j] = {
          year: y,
          isCurrentYear: currentYear.year() === y,
          isSelected: currentYear.year() === y,
        }
      }
    }

    setYears(arrayOfYear)
  }, [currentYear])

  useEffect(() => {
    calculateYears()
  }, [currentYear, calculateYears])

  useEffect(() => {
    calculateDays()
  }, [currentMonth, calculateDays])

  return (
    <div className='h-[469px] w-[320px] px-5 py-7 rounded-lg bg-[#1B1B1B] text-white'>
      <Title />
      <Header />
      {!showPicker && <Weekdays />}
      {showPicker ? <Picker /> : <Body />}
      <Footer />
    </div>
  )
}

const leftArrow = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={3}
    stroke='currentColor'
    className='w-3 h-3'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 19.5L8.25 12l7.5-7.5'
    />
  </svg>
)

const rightArrow = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={3}
    stroke='currentColor'
    className='w-3 h-3'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 4.5l7.5 7.5-7.5 7.5'
    />
  </svg>
)
