import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-middle-first',
  templateUrl: './middle-first.component.html',
  styleUrls: ['./middle-first.component.css']
})
export class MiddleFirstComponent implements OnInit {
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [
          { label: "Total Income", 
            data: [100, 70, 80, 90] ,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar fill color
            borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
            borderWidth: 1 // Bar border width
          },
          { label: "Total Outcome", 
            data: [90, 60, 75, 88],
            backgroundColor: 'rgb(250, 212, 221)', // Bar fill color
            borderColor: 'rgb(250, 212, 221 )', // Bar border color
            borderWidth: 1 // Bar border width
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}
