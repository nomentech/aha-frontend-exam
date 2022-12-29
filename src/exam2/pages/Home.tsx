import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Button1 from '../components/Button1'
import Divider from '../components/Divider'
import Input from '../components/Input'
import Range from '../components/Range'
import { useState } from 'react'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [pageSize, setPageSize] = useState(15)

  return (
    <Layout isHome={true}>
      <div className='flex flex-col w-full px-5 sm:px-36 sm:py-[54px] space-y-6'>
        <div className='text-2xl'>Search</div>
        <Input setKeyword={setKeyword} />
        <Divider />
        <div className='text-2xl'># Of Results Per Page</div>
        <div className='space-x-2'>
          <span className='text-5xl font-bold'>{pageSize}</span>
          <span>results</span>
        </div>
        <Range pageSize={pageSize} setPageSize={setPageSize} />
        <div className='h-2'></div>
        <Divider />
        <div className='h-[200px]'></div>
        <Link to={`/exam2/result?pageSize=${pageSize}&keyword=${keyword}`}>
          <Button1 label='Search' />
        </Link>
      </div>
    </Layout>
  )
}
