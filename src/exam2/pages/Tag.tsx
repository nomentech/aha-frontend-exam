import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getTags from '../api/getTags'
import Button1 from '../components/Button1'
import Layout from '../components/Layout'
import Loading from '../components/Loading'

export default function Tag() {
  const [tags, setTags] = useState<any[]>()

  useEffect(() => {
    const fetchTags = async () => {
      const t = await getTags()
      setTags(t)
    }

    fetchTags()
  }, [])

  return (
    <Layout isHome={false}>
      <div className='flex flex-col w-full px-5 sm:px-36 sm:py-[54px]'>
        <div className='h-[70px] flex flex-row space-x-4 items-center'>
          <Link to='/exam2'>
            <div className='sm:-ml-10'>{leftArrow}</div>
          </Link>
          <span className='text-2xl sm:hidden'>Home Page</span>
        </div>
        <div className='text-2xl sm:-mt-[51px]'>Tags</div>
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-6 my-8'>
          {!tags ? (
            <Loading />
          ) : (
            tags.map((tag: any) => (
              <div key={tag.id}>
                <div className='flex flex-col justify-end p-3 aspect-square rounded-lg bg-[#1F1F1F]'>
                  <div className='px-2 font-bold border-4 border-white w-fit rounded-md'>
                    {tag.name}
                  </div>
                </div>
                <div className='text-sm mt-5'>{tag.name}</div>
                <div className='text-xs text-[#B2B2B2]'>
                  {tag.count} results
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}

const leftArrow = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={3}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 19.5L8.25 12l7.5-7.5'
    />
  </svg>
)
