import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-graph-events-handled',
  templateUrl: './graph-events-handled.component.html',
  styleUrls: ['./graph-events-handled.component.scss']
})
export class GraphEventsHandledComponent{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() {

    this.chartOptions = {
      series: [12],
      colors: ["#fff"],
      labels: ["12% of goal"],
      chart: {
        height: "175px",
        width: "175px",
        type: "radialBar",
        align: "center"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "75%",
          },
          track: {
            show: false
          },
          title: {
            text: "Calls Taken",
            align: "left",
            color: "#fff"
          },
          dataLabels: {
            name: {
              offsetY: 30,
              fontSize: '12px',
              color: '#fff',
              fontWeight: "200"
            },
            value: {
              offsetY: -20,
              fontSize: '32px',
              fontWeight: "bold",
              color: '#fff',
              formatter: function (val) {
                let labelValue = val;
                return labelValue;}
            }
          }
        }
      },

  }
};
}
