import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/shared/interfaces/stat';
import { StatService } from 'src/app/shared/services/stat/stat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats: Stat[] = [];
  dataLineChart: any = [];
  optionsLineChart: any = [];
  dataPieChart: any = [];
  optionsPieChart: any = [];
  constructor(private statService: StatService) {}

  ngOnInit(): void {
    this.stats = this.statService.getStats();
    this.dataLineChart = {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };
    this.optionsLineChart = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
            font: {
              family: 'Cairo',
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    this.dataPieChart = {
      labels: ['ذكور', 'إناث'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ['rgb(255, 99, 132)',
          'rgb(54, 162, 235)'],
          hoverBackgroundColor: ['rgb(255, 99, 132)',
          'rgb(54, 162, 235)',],
        },
      ],
    };
    this.optionsPieChart = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
    };
  }
}
