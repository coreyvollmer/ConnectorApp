import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface Policy {
  policy: string;
  insured: string;
  date: string;
  type: string;
}

const ELEMENT_DATA: Policy[] = [
  {policy: 'LLGL000091801', insured: 'Fiza Barajas', date: '2018-09-11', type: 'General Liability'},
  {policy: 'LLGL000091802', insured: 'Rick Cooley', date: '2018-09-03', type: 'Dwelling'},
  {policy: 'LLGL000091803', insured: 'Isabell Fields', date: '2018-07-01', type: 'Property'},
  {policy: 'LLGL000091804', insured: 'Amiee Black', date: '2018-09-14', type: 'Package'},
  {policy: 'LLGL000091805', insured: 'Hakeem Cartwright', date: '2018-06-01', type: 'General Liability'},
  {policy: 'LLGL000091806', insured: 'Henreitta Pratt', date: '2018-09-04', type: 'Motorcycle'},
  {policy: 'LLGL000091807', insured: 'Euan Soto', date: '2018-07-17', type: 'Snowmobile'},
  {policy: 'LLGL000091808', insured: 'Irfan Baldwin', date: '2018-09-01', type: 'General Liability'},
  {policy: 'LLGL000091809', insured: 'Sherry Nichols', date: '2018-06-29', type: 'Property'},
  {policy: 'LLGL000091810', insured: 'Beatrix Andrew', date: '2018-09-01', type: 'General Liability'},
];

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit {

  displayedColumns: string[] = ['policy', 'insured', 'date', 'type'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }

}
