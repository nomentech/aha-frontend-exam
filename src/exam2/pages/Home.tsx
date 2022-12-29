import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Button1 from '../components/Button1'
import Divider from '../components/Divider'
import Input from '../components/Input'
import Range from '../components/Range'

export default function Home() {
  return (
    <Layout isHome={true}>
      <div className='flex flex-col w-full px-5 sm:px-36 sm:py-[54px] space-y-6'>
        <div className='text-2xl'>Search</div>
        <Input />
        <Divider />
        <div className='text-2xl'># Of Results Per Page</div>
        <div className='space-x-2'>
          <span className='text-5xl font-bold'>30</span>
          <span>results</span>
        </div>
        <Range />
        <div className='h-2'></div>
        <Divider />
        <div className='h-[200px]'></div>
        <Link to='/exam2/result'>
          <Button1 label='Search' />
        </Link>
      </div>
    </Layout>
  )
}
