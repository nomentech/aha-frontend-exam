import { CheckSolid, CheckOutline } from './Icons'

export default function Validator({ options }: any) {
  return (
    <div className='h-[226px] py-4 mt-5 flex flex-col justify-between rounded-lg bg-[#242424]'>
      {options.map((option: any) => (
        <div key={option.content} className='flex flex-row items-center'>
          <div className='w-6 h-6 mx-3'>
            {option.check ? <CheckSolid /> : <CheckOutline />}
          </div>
          <span className='text-sm'>{option.content}</span>
        </div>
      ))}
    </div>
  )
}
