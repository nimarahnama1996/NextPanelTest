import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";



import arrowChart from '../../img/arrow.svg'
import closeChart from '../../img/close.svg'



import './HomeLineChart.css'





const data = {
    labels: ['22:30:30','22:30:32','22:30:34','22:30:36','22:30:38','22:30:40','22:30:42','22:30:44','22:30:46','22:30:48','22:30:50','22:30:52','22:30:54','22:30:56','22:30:58'],
    datasets: [
      {
        label: 'Iphone sales',
        data: [150,190,200,160,210,180,230,200,160,200,170,190,170,150,180,170],
        fill: false,
        borderColor:'#2477FF',
        tension: 0.5,
      },
    ],
  };
  
  const options = {
    plugins:{legend:{display:false}},
    aspectRatio:10,
    responsive:false,
    scales: {
      y:{
        ticks:{
          color:"white",
          font:{
            size:14
          }
        },
      },
      
      x:{
        ticks:{
          color:"white",
          font:{
            size:14
          }
        }
      }
    },
  };

const HomeLineChart = () => {
  
  return (
    <div>
     
     <div className='chart-home-title'>
    <h3>Requests <span>per second</span> </h3> 
   
   <div >
   <img src={arrowChart} alt='arrow' style={{marginLeft:'340px', marginTop:'-70px'}}/>
    <img src={closeChart} alt='close' style={{marginLeft:'360px', marginTop:'-113px'}}/>
   </div>
   </div>
      
    <div className='home-line-chart'>
    <Line data={data} options={options} />
    </div>
    </div>
  )
}

export default HomeLineChart