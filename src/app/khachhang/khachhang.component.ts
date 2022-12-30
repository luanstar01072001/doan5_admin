import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit() {

  }
}
