import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Profile from '../components/Profile'

export default function Layout({ isHome, children }: any) {
  return (
    <div>
      <div>
        <div
          className={`h-[70px] flex flex-col justify-center px-5 sm:hidden 
          ${!isHome && 'hidden'}`}
        >
          <Logo />
        </div>
        <div className='flex flex-row'>
          <div className='hidden sm:flex sm:flex-col p-5 sm:items-center space-y-10'>
            <Logo />
            <Menu direction='col' />
          </div>
          {children}
          <div className='hidden min-[1440px]:block'>
            <Profile />
          </div>
        </div>
      </div>
      <div
        className={`h-[66px] w-full flex flex-col justify-center items-center absolute bottom-0 bg-[#181818]/20 sm:hidden 
        ${!isHome && 'hidden'}`}
      >
        <Menu direction='row' />
      </div>
    </div>
  )
}
