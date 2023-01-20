import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { LeftArrow, RightArrow } from '../components/Icons'

interface Day {
  day: number
  month: number
  year: number
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
}

interface Year {
  year: number
  isSelected: boolean
}

const today = dayjs()

export default function Calendar({ submit, cancel }: any) {
  const [days, setDays] = useState<Day[][]>([])
  const [currentMonth, setCurrentMonth] = useState(today)
  const [selectedDay, setSelectedDay] = useState(today)

  const [showPicker, setShowPicker] = useState(false)
  const [years, setYears] = useState<Year[][]>([])
  const [currentYear, setCurrentYear] = useState(today)

  const updateSelectedDay = useCallback((day: Day) => {
    setSelectedDay(dayjs(new Date(day.year, day.month, day.day)))
    setDays((days) =>
      days.map((week) =>
        week.map((d: Day) => {
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
  }, [])

  useEffect(() => {
    function calculateYears() {
      let start = Math.floor(currentYear.year() / 10) * 10 + 1
      const arrayOfYear = Array.from(Array(5), () => new Array(4))
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
          const y = start++
          arrayOfYear[i][j] = {
            year: y,
            isSelected: currentYear.year() === y,
          }
        }
      }

      setYears(arrayOfYear)
    }

    calculateYears()
  }, [currentYear])

  useEffect(() => {
    function calculateDays() {
      let currentDay = currentMonth.startOf('month').day(0)
      const nextMonth = currentMonth.add(1, 'month').month()

      let arrayOfDays = []
      let weekDays: Day[] = []

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
    }

    calculateDays()
  }, [currentMonth])

  const handleLeftClick = useCallback(() => {
    showPicker
      ? setCurrentYear((current) => current.subtract(20, 'year'))
      : setCurrentMonth((current) => current.subtract(1, 'month'))
  }, [showPicker])

  const handleRightClick = useCallback(() => {
    showPicker
      ? setCurrentYear((current) => current.add(20, 'year'))
      : setCurrentMonth((current) => current.add(1, 'month'))
  }, [showPicker])

  const handleHeaderClick = useCallback(() => {
    setShowPicker(true)
  }, [])

  return (
    <div className='h-[469px] w-[320px] px-5 py-7 rounded-lg bg-[#1B1B1B] text-white'>
      <Title text={currentMonth.format('MMM, YYYY')} />
      <Header
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
        onHeaderClick={handleHeaderClick}
        headerTitle={
          showPicker ? today.format('YYYY') : currentMonth.format('MMMM YYYY')
        }
      />
      {!showPicker && <Weekdays />}
      {showPicker ? (
        <Picker
          years={years}
          setCurrentMonth={setCurrentMonth}
          setShowPicker={setShowPicker}
        />
      ) : (
        <Body days={days} update={updateSelectedDay} />
      )}
      <Footer
        onSubmit={() => submit(selectedDay.format('MM/DD/YYYY'))}
        onCancel={() => cancel()}
      />
    </div>
  )
}

function Title({ text }: { text: string }) {
  return <div className='my-6 text-3xl font-bold'>{text}</div>
}

function Header({
  onLeftClick,
  onRightClick,
  onHeaderClick,
  headerTitle,
}: any) {
  return (
    <div className='flex flex-row justify-between items-center cursor-pointer'>
      <div onClick={onLeftClick}>
        <LeftArrow />
      </div>
      <div onClick={onHeaderClick}>{headerTitle}</div>
      <div onClick={onRightClick}>
        <RightArrow />
      </div>
    </div>
  )
}

function Weekdays() {
  return (
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
}

function Body({ days, update }: any) {
  return (
    <div className='text-sm cursor-pointer'>
      {days.map((week: any) => (
        <div
          key={JSON.stringify(week)}
          className='flex flex-row justify-between'
        >
          {week.map((day: Day) => (
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
              onClick={() => update(day)}
            >
              {day.day}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function Footer({ onSubmit, onCancel }: any) {
  return (
    <div className='m-6 flex flex-row justify-end items-center text-sm font-semibold cursor-pointer'>
      <div onClick={onCancel}>Cancel</div>
      <div className='ml-16' onClick={onSubmit}>
        OK
      </div>
    </div>
  )
}

function Picker({ years, setCurrentMonth, setShowPicker }: any) {
  return (
    <div className='cursor-pointer'>
      {years.map((row: any) => (
        <div
          key={JSON.stringify(row)}
          className='flex flex-row justify-between my-7'
        >
          {row.map((col: Year) => (
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
}
