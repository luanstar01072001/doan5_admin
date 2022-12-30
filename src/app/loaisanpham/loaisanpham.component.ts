import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent implements OnInit {

  constructor(private service:SharedService) { }
  // loaisp:any=[];
  ngOnInit() {

  }

}
