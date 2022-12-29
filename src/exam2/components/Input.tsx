export default function Input({ setKeyword }: any) {
  return (
    <div>
      <input
        className='h-[60px] w-full px-4 rounded-md bg-customblack border-[3px] border-customgray
          focus:outline-none focus:border-[#FF9B33]'
        placeholder='Keyword'
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  )
}
