import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.css']
})
export class NhacungcapComponent implements OnInit {

  constructor(private service:SharedService) { }
  // loaisp:any=[];
  ngOnInit() {

}
}
