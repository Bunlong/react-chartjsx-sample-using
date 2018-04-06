import React, { Component } from 'react';
import { Line, Bar, Pie, Radar, PolarArea, Doughnut, HorizontalBar } from 'react-chartjsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    barChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    lineChartData: {
      labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      datasets: [{ 
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    pieChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478, 5267, 734, 784, 433]
      }]
    },
    radarChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77, 55.61, 21.69, 6.62, 6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48, 54.16, 7.61, 8.06, 4.45]
        }
      ]
    },
    polarAreaChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    },
    doughnutChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    },
    groupedBarChartData: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133, 221, 783, 2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408, 547, 675, 734]
        }
      ]
    },
    mixedChartsData: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408, 547, 675, 734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133, 221, 783, 2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408, 547, 675, 734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133, 221, 783, 2478]
        }
      ]
    },
    horizontalBarChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    }
  }

  clickBar() {
    this.setState({
      barChartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478, 5267, 734, 784, 1500]
          }
        ]
      }
    })
  }

  clickLine() {
    this.setState({
      lineChartData: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{ 
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 833],
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }
        ]
      }
    })
  }

  clickPie() {
    this.setState({
      pieChartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478, 5267, 734, 784, 833]
        }]
      }
    })
  }

  clickRadar() {
    this.setState({
      radarChartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "1950",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [8.77, 55.61, 21.69, 6.62, 6.82]
          }, {
            label: "2050",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            data: [25.48, 54.16, 7.61, 8.06, 23.45]
          }
        ]
      }
    })
  }

  clickPolarArea() {
    this.setState({
      polarAreaChartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478, 5267, 734, 784, 1088]
          }
        ]
      }
    })
  }

  clickDoughnut() {
    this.setState({
      doughnutChartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478, 5267, 734, 784, 833]
          }
        ]
      }
    })
  }

  clickGroupedBar() {
    this.setState({
      groupedBarChartData: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
          {
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 2478]
          }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 934]
          }
        ]
      }
    })
  }

  clickMixedCharts() {
    this.setState({
      mixedChartsData: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false
          }, {
            label: "Africa",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2078],
            fill: false
          }, {
            label: "Europe",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [408, 547, 675, 734],
          }, {
            label: "Africa",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2078]
          }
        ]
      }
    })
  }

  clickHorizontalBar() {
    this.setState({
      horizontalBarChartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,833]
          }
        ]
      }
    })
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div className="App">
        <Bar data={this.state.barChartData} 
             options={chartOptions} 
             width={800} 
             height={400} />
        <button onClick={this.clickBar.bind(this)}>Click bar</button>
        <Line data={this.state.lineChartData} 
              options={chartOptions} 
              width={800} 
              height={400} />
        <button onClick={this.clickLine.bind(this)}>Click line</button>
        <Pie data={this.state.pieChartData} 
             options={chartOptions} 
             width={800} 
             height={400} />
        <button onClick={this.clickPie.bind(this)}>Click pie</button>
        <Radar data={this.state.radarChartData} 
               options={chartOptions} 
               width={800} 
               height={400} />
        <button onClick={this.clickRadar.bind(this)}>Click radar</button>
        <PolarArea data={this.state.polarAreaChartData} 
                   options={chartOptions} 
                   width={800} 
                   height={400} />
        <button onClick={this.clickPolarArea.bind(this)}>Click polar area</button>
        <Doughnut data={this.state.doughnutChartData} 
                  options={chartOptions} 
                  width={800} 
                  height={400} />
        <button onClick={this.clickDoughnut.bind(this)}>Click doughnut</button>
        <Bar data={this.state.groupedBarChartData} 
             options={chartOptions} 
             width={800} 
             height={400} />
        <button onClick={this.clickGroupedBar.bind(this)}>Click grouped bar</button>
        <Bar data={this.state.mixedChartsData} 
             options={chartOptions} 
             width={800} 
             height={400} />
        <button onClick={this.clickMixedCharts.bind(this)}>Click mixed charts</button>
        <HorizontalBar data={this.state.horizontalBarChartData} 
                       options={chartOptions} 
                       width={800} 
                       height={400} />
        <button onClick={this.clickHorizontalBar.bind(this)}>Click horizontal bar</button>
      </div>
    );
  }
}

export default App;
