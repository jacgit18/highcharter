import './App.css';
// import Highcharts from './highcharts';
// import HighchartsReact from './highcharts-react-official';
import ReactHighcharts from "react-highcharts";
import React, { Component } from "react";
import Particles from "react-tsparticles";

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
                  <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      >




            </Particles>

            <ReactHighcharts config={config} ref="chart" />
            <ReactHighcharts config={config} ref="chart" />
      
      </div>
      

    )}


}

// Optional after-render callback
// const afterRender = (chart) => { /* do stuff with the chart  */ };
// <ReactHighcharts config = {config} callback = {afterRender}></ReactHighcharts>

export default App;
