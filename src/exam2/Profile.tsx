import { useState } from 'react'
import Button2 from './Button2'

const Item = () => (
  <div className='flex flex-row justify-between mb-4'>
    <div className='flex flex-row'>
      <img
        className='rounded'
        src='https://www.w3schools.com/howto/img_avatar.png'
        width={40}
        height={40}
      />
      <div className='ml-4'>
        <div className='text-sm'>Fullname</div>
        <div className='text-xs text-[#929292]'>@username</div>
      </div>
    </div>
    <Button2 label='Follow' outlined />
  </div>
)

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Followers')

  const Tab = ({ title }: any) => (
    <div
      className={`w-1/2 text-center pb-1 font-semibold text-[#929292] ${
        title === activeTab && 'border-b-2 border-b-white text-white'
      } `}
      onClick={() => setActiveTab(title)}
    >
      {title}
    </div>
  )

  return (
    <div className='w-[375px] pt-8'>
      <div className='flex flex-row cursor-pointer'>
        <Tab title='Followers' />
        <Tab title='Following' />
      </div>
      <div className='px-4 pt-8'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Item key={index} />
        ))}
      </div>
    </div>
  )
}
