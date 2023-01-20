export default function Input({
  onChange = () => {},
  label,
  type,
  placeholder,
  value,
  onFocus,
}: any) {
  return (
    <div>
      <div className='relative top-2 left-3 px-1 text-xs w-fit bg-customblack '>
        {label}
      </div>
      <input
        className='px-2 h-14 rounded-lg w-full
                    bg-customblack border-[3px] border-customgray  
                    hover:border-white focus:outline-none focus:border-primary'
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
      />
    </div>
  )
}
