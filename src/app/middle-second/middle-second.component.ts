import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-middle-second',
  templateUrl: './middle-second.component.html',
  styleUrls: ['./middle-second.component.css']
})


export class MiddleSecondComponent implements OnInit {
  constructor() { }
 ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyPieChart", {
      type: 'line', //this denotes tha type of chart
      // type: 'doughnut',

      data: {// values on X-Axis
        labels: ['2019','2020','2021','2022'],
	       datasets: [
          { label: "Total Sales",
            data: [75,60,55,85],
          },
          { label: "Total Revenue", data: [50,70,65,80],}]
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
    });}}