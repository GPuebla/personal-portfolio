import React from 'react'
import { Gauge } from '@mui/x-charts/Gauge';


export const ChartGauge = () => {
  return (
    <div className='chart'>
      <Gauge width={100} height={100} value={50} />
    </div>
    
  )
}
