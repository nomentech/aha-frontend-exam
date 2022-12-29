import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function Range({ pageSize, setPageSize }: any) {
  const marks = { 3: 3, 6: 6, 9: 9, 12: 12, 15: 15, 50: 50 }

  return (
    <Slider
      min={1}
      max={50}
      defaultValue={pageSize}
      marks={marks}
      trackStyle={{
        backgroundImage: 'linear-gradient(to right, #FF5C01, #FFD25F)',
        height: 8,
      }}
      handleStyle={{
        borderColor: '#FFD05D',
        borderWidth: '4.5px',
        opacity: 1,
        height: 22,
        width: 22,
        marginTop: -8,
        backgroundColor: 'black',
      }}
      railStyle={{ backgroundColor: 'white', opacity: 0.3, height: 8 }}
      dotStyle={{ display: 'none' }}
      onChange={(value) => setPageSize(value)}
    />
  )
}
