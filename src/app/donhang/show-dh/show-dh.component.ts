import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Donhang } from '../donhang.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-dh',
  templateUrl: './show-dh.component.html',
  styleUrls: ['./show-dh.component.css']
})
export class ShowDhComponent implements OnInit {

  DonHangID:any;
  constructor(private service:SharedService,private route: Router) { }
  Ishow = false;
  listDh:Donhang[]
  ActivateAddEdit = false
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  AddEdit:string = 'Thêm - sửa đơn hàng'
  tableName:string = 'Danh sách đơn hàng'
  objName:string = 'đơn hàng'

  totalLength:any;
  page:number=1;

  obj:Donhang
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL(){
    this.service.getAllDH().subscribe((data:any) => {
      this.listDh = data;
      this.totalLength=this.listDh.length;
      console.log(data);
    })

  }
  viewDetail(id: number) {
    localStorage.removeItem("orderID")
    localStorage.setItem("orderID", id.toString())
    this.route.navigate(['/chitietdonhang'])
  }

  // Search(){
  //   if(this.DonHangID==""){
  //     this.ngOnInit();
  //   }else{
  //     this.listDh=this.listDh.filter(res=>{
  //       return res.DonHangID.toLocaleLowerCase().match(this.DonHangID.toLocaleLowerCase());
  //     })
  //   }
  // }
  addClick(){
    this.obj = {
      DonHangID:0,
      NGAYDAT:'',
      TONGTIEN:0,
      KHACHHANG:'',
      GHICHU:'',
      NGUOITAO:'',
      DIACHI:'',
      SDT:0,
      TENKH:'',
      TRANGTHAI:''
    }
    this.AddEdit = 'Thêm mới đơn hàng'
    this.ActivateAddEdit = true;
  }

  editClick(Donhang: any){
    this.obj = Donhang
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa đơn hàng"
  }

  delClick(id:number, tendh:string){
    let cfm = confirm(`Bạn muốn xóa ${tendh}?`)
    if(cfm == true){
      this.service.deleteDH(id).subscribe(data => {
        alert(`Đã xóa ${tendh}!`)
        this.lamMoiDL();
      })
    }
  }

  closeClick(){
    this.ActivateAddEdit = false;
    this.Ishow = true;
    this.lamMoiDL();
  }
}
