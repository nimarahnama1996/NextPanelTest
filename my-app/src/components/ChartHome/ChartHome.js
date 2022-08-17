import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



import arrowChart from '../../img/arrow.svg'
import closeChart from '../../img/close.svg'

import './ChartHome.css'


am4core.useTheme(am4themes_animated);

const ChartHome = () => {

    const chart = useRef(null);

    useLayoutEffect(() => {
      let x = am4core.create("line-chart", am4charts.XYChart);
  
      x.paddingRight = 20;
  
      let data = [];
      let visits = 10;
  
      for (let i = 1; i < 10; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }
  
      x.data = data;
  
      let dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
  
      let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;
  
      let series = x.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";
      x.cursor = new am4charts.XYCursor();
  
      
  
      chart.current = x;
  
      return () => {
        x.dispose();
      };
    }, []);

  return (
   <div>

   <div className='chart-home-title'>
    <h3>Requests <span>per second</span> </h3> 
   
   <div >
   <img src={arrowChart} alt='arrow' style={{marginLeft:'340px', marginTop:'-70px'}}/>
    <img src={closeChart} alt='close' style={{marginLeft:'360px', marginTop:'-113px'}}/>
   </div>
   </div>

<div id="line-chart" style={{ width: "70%", height: "300px" }}></div>
   </div>
  )
}

export default ChartHome