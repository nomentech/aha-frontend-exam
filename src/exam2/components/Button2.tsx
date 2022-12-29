export default function Button2({ label, outlined = false }: any) {
  return (
    <div
      className={`px-2 w-fit h-[29px] text-xs font-semibold rounded-[20px] cursor-pointer 
                  flex flex-col justify-center items-center 
      ${
        outlined
          ? 'border border-white hover:bg-white hover:text-black'
          : 'bg-white text-black hover:border hover:border-white hover:bg-customblack hover:text-white'
      }`}
    >
      {label}
    </div>
  )
}
