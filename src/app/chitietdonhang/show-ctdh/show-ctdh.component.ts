import { Component, OnInit } from '@angular/core';
import { Donhang } from 'src/app/donhang/donhang.model';
import { Sanpham } from 'src/app/sanpham/sanpham.model';
import { SharedService } from 'src/app/shared.service';
import { Chitietdonhang } from '../chitietdonhang.model';

@Component({
  selector: 'app-show-ctdh',
  templateUrl: './show-ctdh.component.html',
  styleUrls: ['./show-ctdh.component.css']
})
export class ShowCtdhComponent implements OnInit {

  TENSP: any;
  constructor(private service: SharedService) { }

  listCTDH: Chitietdonhang[]
  ActivateAddEdit = false

  AddEdit: string = 'Thêm - sửa sản phẩm'
  tableName: string = 'Danh sách sản phẩm'
  objName: string = 'Sản phẩm'
  dsSanPham: Sanpham[]
  dsDonHang: Donhang[]
  obj: Sanpham
  totalLength: any;
  page: number = 1;
// thêm moi xem chi tiet


orderDetail: any

receiver: string
Period: string
DateOrder: Date
Address: string



  ngOnInit(): void {
    this.lamMoiDL();
    this.loadData()

  }
  loadData(){
    let orderID = localStorage.getItem("orderID")
    if(orderID){
      this.service.getdonhangrDetail(parseInt(orderID)).subscribe(data => {
        this.orderDetail = data
        this.receiver = data[0].NguoiNhan
        this.Period = data[0].ThoiGian
        this.DateOrder = data[0].NgayDat
        this.Address = data[0].DiaChi
        console.log(data);

      })
    }
  }






  lamMoiDL() {
    this.service.getAllCTDH().subscribe((data: any) => {
      this.listCTDH = data;
      this.totalLength = this.listCTDH.length;
      console.log(data);

    })
    this.service.getAllSP().subscribe(data => {
      return this.dsSanPham = data;
    })
    this.service.getAllDH().subscribe(data => {
      return this.dsDonHang = data;
    })

  }
  // Search() {
  //   if (this.TenSanPham == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.listCTDH = this.listCTDH.filter(res => {
  //       return res.TenSanPham.toLocaleLowerCase().match(this.TENSP.toLocaleLowerCase());
  //     })
  //   }
  // }

  filterByCate(event: any) {
    let cateid = parseInt(event?.target.value)
    if (cateid == 0) {
      this.service.getAllSP().subscribe(data => {
        this.listCTDH = data
      })
    }
    else {
      this.service.locTheoLoai(cateid).subscribe(data => {
        this.listCTDH = data
      })
    }
  }

  delClick(id: number, tenctdh: string) {
    let cfm = confirm(`Bạn muốn xóa ${tenctdh}?`)
    if (cfm == true) {
      this.service.deleteSP(id).subscribe(data => {
        alert(`Đã xóa ${tenctdh}!`)
        this.lamMoiDL();
      })
    }
  }

  closeClick() {
    this.ActivateAddEdit = false;
    this.lamMoiDL();
  }
}

