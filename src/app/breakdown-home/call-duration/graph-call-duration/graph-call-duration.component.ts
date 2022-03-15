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
  ApexGrid,
  ApexYAxis
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
  selector: 'app-graph-call-duration',
  templateUrl: './graph-call-duration.component.html',
  styleUrls: ['./graph-call-duration.component.scss']
})
export class GraphCallDurationComponent{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [30, 20, 41, 67, 22, 43, 41, 67, 22, 43],
        },
        {
          data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        },
      ],
      chart: {
        type: "bar",
        height: "185px",
        width: "100%",
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
        colors:["#969696"],
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
