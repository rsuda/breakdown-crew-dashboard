import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-graph-calls-taken-week',
  templateUrl: './graph-calls-taken-week.component.html',
  styleUrls: ['./graph-calls-taken-week.component.scss']
})
export class GraphCallsTakenWeekComponent {


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Calls",
          data: [500, 700, 600, 450, 525, 486, 685, 389, 425]
        }
      ],
      chart: {
        width: "100%",
        height: "auto",
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#1565c0",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.5
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#1565c0", "#545454"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Calls Taken",
        align: "left",
        style: {
          fontSize:  '16px',
          fontWeight:  '500',
          fontFamily:  'Roboto',
          color:  '#263238'
        },
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["transparent"], // takes an array which will be repeated on columns
          opacity: 1
        },
        column: {
          opacity: 0.1
        }
      },
      markers: {
        size: 3,
        colors: ['#0d47a1'],
        strokeOpacity: 1,
        strokeDashArray: 500
      },
      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      },
      yaxis: {
        forceNiceScale: true,
        min: 0,
        max: 1200
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }

}
