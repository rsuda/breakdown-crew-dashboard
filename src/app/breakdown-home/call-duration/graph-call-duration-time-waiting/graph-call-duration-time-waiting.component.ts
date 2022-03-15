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
  legend: ApexLegend;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  yaxis: ApexYAxis;
};
@Component({
  selector: 'app-graph-call-duration-time-waiting',
  templateUrl: './graph-call-duration-time-waiting.component.html',
  styleUrls: ['./graph-call-duration-time-waiting.component.scss']
})
export class GraphCallDurationTimeWaitingComponent{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [50, 69, 40, 20, 22, 34, 14, 76, 35, 14],
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
        colors:["#163762", "#d3e2f5"],
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
