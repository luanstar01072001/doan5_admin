import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Khachhang } from '../khachhang.model';

@Component({
  selector: 'app-add-edit-kh',
  templateUrl: './add-edit-kh.component.html',
  styleUrls: ['./add-edit-kh.component.css']
})
export class AddEditKhComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() obj: Khachhang
  listProducts10: Khachhang[]

  KhachHangID:number
  TENKH:string
  SODIENTHOAI:number
  DIACHI:string
  TAIKHOAN:string
  MATKHAU:string
  EMAIL:string

  listCate: any[]
  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.service.getLoaiList().subscribe(data => {
      this.listProducts10 = data;
      this.KhachHangID = this.obj.KhachHangID
      this.TENKH = this.obj.TENKH
      this.DIACHI=this.obj.DIACHI
      this.SODIENTHOAI=this.obj.SODIENTHOAI
      this.TAIKHOAN=this.obj.TAIKHOAN
      this.MATKHAU=this.obj.MATKHAU
      this.EMAIL=this.obj.EMAIL
    })
  }

  addNow10() {
    var khachhang = {
      KhachHangID: this.KhachHangID,
      TENKH: this.TENKH,
      DIACHI:this.DIACHI,
      SODIENTHOAI:this.SODIENTHOAI,
      TAIKHOAN:this.TAIKHOAN,
      MATKHAU:this.MATKHAU,
      EMAIL:this.EMAIL
    }
    this.service.addKH(khachhang).subscribe((data: any) => {
      alert(`Đã thêm ${this.TENKH}`)
      this.loadData();
    })
    console.log(khachhang);
  }

  editNow10(id: number) {
    var khachhang = {
      KhachHangID: this.KhachHangID,
      TENKH: this.TENKH,
      DIACHI:this.DIACHI,
      SODIENTHOAI:this.SODIENTHOAI,
      TAIKHOAN:this.TAIKHOAN,
      MATKHAU:this.MATKHAU,
      EMAIL:this.EMAIL
    }
    let x = confirm('Bạn muốn chỉnh sửa khách hàng?')
    if (x == true) {
      this.service.updateKH(id, khachhang).subscribe((data: any) => {
        alert(`Sửa thành công!`)
      })
    }
  }

}
