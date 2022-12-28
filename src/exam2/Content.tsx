import Button1 from './Button1'
import Divider from './Divider'
import Input from './Input'
import Range from './Range'

export default function Content() {
  return (
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
      <Button1 label='Search' />
    </div>
  )
}
