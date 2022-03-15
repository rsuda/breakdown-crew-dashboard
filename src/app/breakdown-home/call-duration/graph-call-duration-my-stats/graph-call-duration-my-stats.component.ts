import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis
  legend: ApexLegend;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};
@Component({
  selector: 'app-graph-call-duration-my-stats',
  templateUrl: './graph-call-duration-my-stats.component.html',
  styleUrls: ['./graph-call-duration-my-stats.component.scss']
})
export class GraphCallDurationMyStatsComponent{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [30, 20, 41, 67, 22, 43, 41, 67, 22, 43],
        },
        {
          data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        },
      ],
      chart: {
        type: "bar",
        width: "100%",
        height: "185px",
        stacked: true,
        zoom: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false,
        labels: {
          colors: ["#163762", "#d5d5d5"],
          useSeriesColors: false
      },
      },
      title: {
        text: 'Call duration',
        align: 'left',
        floating: true
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          columnWidth: '40%',
          barHeight: '25%',
        }
      },
      yaxis: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        type: "category",
        position: 'top',
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ],
        labels: {
          show: true,
        }
      },
      fill: {
        colors:["#969696", "#efefef"],
        opacity: 1
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
    }
    };
  }

}