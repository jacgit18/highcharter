import './App.css';
// import Highcharts from './highcharts';
// import HighchartsReact from './highcharts-react-official';
import ReactHighcharts from "react-highcharts";
import React, { Component } from "react";


const config = {
  chart: {
    type: 'bar'
},
title: {
    text: 'Fruit Consumption'
},
xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges']
},
yAxis: {
    title: {
        text: 'Fruit eaten'
    }
},
series: [{
    name: 'Jane',
    data: [1, 0, 4]
}, {
    name: 'John',
    data: [5, 7, 3]
}]

};


class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {

    return (
      <div className="App ">
            <ReactHighcharts config={config} ref="chart" />
            <ReactHighcharts config={config} ref="chart" />


      
      </div>
      

    )}


}

// Optional after-render callback
// const afterRender = (chart) => { /* do stuff with the chart  */ };
// <ReactHighcharts config = {config} callback = {afterRender}></ReactHighcharts>

export default App;
