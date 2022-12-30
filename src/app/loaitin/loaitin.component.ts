import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-loaitin',
  templateUrl: './loaitin.component.html',
  styleUrls: ['./loaitin.component.css']
})
export class LoaitinComponent implements OnInit {

  constructor(private service: SharedService) { }
  // loaisp:any=[];
  ngOnInit() {

  }
}
