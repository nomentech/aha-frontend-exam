import Button1 from '../components/Button1'
import Layout from '../components/Layout'

export default function Tag() {
  return (
    <Layout isHome={false}>
      <div className='flex flex-col w-full px-5 sm:px-36 sm:py-[54px]'>
        <div className='h-[70px] flex flex-row space-x-4 items-center'>
          <div className='sm:-ml-10'>{leftArrow}</div>
          <span className='text-2xl sm:hidden'>Home Page</span>
        </div>
        <div className='text-2xl sm:-mt-[51px]'>Tags</div>
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-6 my-8'>
          {Array.from({ length: 20 }).map((_, index): any => (
            <div key={index}>
              <div className='flex flex-col justify-end p-3 aspect-square rounded-lg bg-[#1F1F1F]'>
                <div className='px-2 text-2xl font-bold border-4 border-white w-fit rounded-md'>
                  Tag
                </div>
              </div>
              <div className='text-sm mt-5'>This is a title</div>
              <div className='text-xs text-[#B2B2B2]'>by username</div>
            </div>
          ))}
        </div>
        <Button1 label='MORE' />
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
