export default function Button({ label }: any) {
  return (
    <div
      className='h-[40px] text-sm font-bold rounded-[4px] cursor-pointer 
              flex flex-col justify-center items-center 
              bg-white text-black hover:border hover:border-white hover:bg-customblack hover:text-white
              sm:max-w-[343px]'
    >
      {label}
    </div>
  )
}
