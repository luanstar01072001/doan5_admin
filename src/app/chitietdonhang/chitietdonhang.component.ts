import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-chitietdonhang',
  templateUrl: './chitietdonhang.component.html',
  styleUrls: ['./chitietdonhang.component.css']
})
export class ChitietdonhangComponent implements OnInit {

  constructor(private service: SharedService) { }
  // loaisp:any=[];
  ngOnInit() {
  }
}
