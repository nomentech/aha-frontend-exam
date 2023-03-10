import { useCallback, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import getResults from '../api/getResults'
import Button1 from '../components/Button1'
import Layout from '../components/Layout'
import Loading from '../components/Loading'

export default function Result() {
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(1)
  const pageSize = searchParams.get('pageSize')
  const keyword = searchParams.get('keyword')

  const [results, setResults] = useState<any[]>()

  useEffect(() => {
    const fetchResults = async () => {
      const r = await getResults({ page, pageSize, keyword })
      setResults((prev) => (prev ? [...prev, ...r] : r))
    }

    fetchResults()
  }, [page, pageSize, keyword])

  const handleClick = useCallback(() => setPage((page) => page + 1), [])

  return (
    <Layout isHome={false}>
      <div className='flex flex-col w-full px-5 sm:px-36 sm:py-[54px]'>
        <div className='h-[70px] flex flex-row space-x-4 items-center'>
          <Link to='/exam2'>
            <div className='sm:-ml-10'>{leftArrow}</div>
          </Link>
          <span className='text-2xl sm:hidden'>Home Page</span>
        </div>
        <div className='text-2xl sm:-mt-[51px]'>Results</div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 my-8'>
          {!results ? (
            <Loading />
          ) : (
            results.map((result) => (
              <div key={result.id}>
                <img src={result.avater} alt='' />
                <div className='text-sm mt-5'>{result.name}</div>
                <div className='text-xs text-[#B2B2B2]'>
                  by {result.username}
                </div>
              </div>
            ))
          )}
        </div>
        <Button1 label='MORE' onClick={handleClick} />
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
