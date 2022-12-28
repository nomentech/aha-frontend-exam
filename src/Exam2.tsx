import Content from './exam2/Content'
import Logo from './exam2/Logo'
import Menu from './exam2/Menu'
import Profile from './exam2/Profile'

export default function Exam2() {
  return (
    <div>
      <div>
        <div className='h-[70px] flex flex-col justify-center px-5 sm:hidden'>
          <Logo />
        </div>
        <div className='flex flex-row'>
          <div className='hidden sm:flex sm:flex-col p-5 sm:items-center space-y-10'>
            <Logo />
            <Menu direction='col' />
          </div>
          <Content />
          <div className='hidden min-[1440px]:block'>
            <Profile />
          </div>
        </div>
      </div>
      <div className='h-[66px] w-full flex flex-col justify-center items-center absolute bottom-0 bg-[#181818]/20 sm:hidden'>
        <Menu direction='row' />
      </div>
    </div>
  )
}
