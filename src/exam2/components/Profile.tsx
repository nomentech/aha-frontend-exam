import { useEffect, useState } from 'react'
import getUsers from '../api/getUsers'
import Button2 from './Button2'
import Loading from './Loading'

const User = ({ user }: any) => (
  <div className='flex flex-row justify-between mb-4'>
    <div className='flex flex-row'>
      <img
        className='rounded'
        src={user.avater}
        alt=''
        width={40}
        height={40}
      />
      <div className='ml-4'>
        <div className='text-sm'>{user.name}</div>
        <div className='text-xs text-[#929292]'>@{user.username}</div>
      </div>
    </div>
    {user.isFollowing ? (
      <Button2 label='Following' />
    ) : (
      <Button2 label='Follow' outlined />
    )}
  </div>
)

export default function Profile() {
  const [users, setUsers] = useState<any>()

  const [activeTab, setActiveTab] = useState('Followers')

  useEffect(() => {
    const fetchUsers = async () => {
      const u = await getUsers()
      setUsers(u)
    }

    fetchUsers()
  }, [])

  return (
    <div className='w-[375px] pt-8'>
      <div className='flex flex-row cursor-pointer'>
        <Tab
          title='Followers'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab title='Following' />
      </div>
      {!users ? <Loading /> : <Content activeTab={activeTab} users={users} />}
    </div>
  )
}

function Tab({ title, activeTab, setActiveTab }: any) {
  return (
    <div
      className={`w-1/2 text-center pb-1 font-semibold text-[#929292] ${
        title === activeTab && 'border-b-2 border-b-white text-white'
      } `}
      onClick={() => setActiveTab(title)}
    >
      {title}
    </div>
  )
}

function Content({ activeTab, users }: any) {
  return activeTab === 'Followers' ? (
    <div className='px-4 pt-8'>
      {users.followers.map((user: any) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  ) : (
    <div className='px-4 pt-8'>
      {users.following.map((user: any) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}
