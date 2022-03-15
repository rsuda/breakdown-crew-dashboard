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
  selector: 'app-graph-events-handled-month',
  templateUrl: './graph-events-handled-month.component.html',
  styleUrls: ['./graph-events-handled-month.component.scss']
})
export class GraphEventsHandledMonthComponent{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() {

    this.chartOptions = {
      series: [162],
      colors: ["#fff"],
      labels: ["100% of goal"],
      chart: {
        height: "175",
        width: "175",
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
            },
            title: {
              text: "Calls Taken",
              align: "left",
              color: "#fff"
            },
          }
        }
      },

  }
};
}
