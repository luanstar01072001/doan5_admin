import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loaisanpham } from 'src/app/loaisanpham/loaisanpham.model';
import { Sanpham } from 'src/app/sanpham/sanpham.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sp',
  templateUrl: './add-edit-sp.component.html',
  styleUrls: ['./add-edit-sp.component.css']
})
export class AddEditSpComponent implements OnInit {


  constructor(private service: SharedService) { }

  @Input() obj: Sanpham
  listProducts: Sanpham[]
  SanPhamID:number
  TENSP:string
  IMAGE:string
  MALOAI:number
  XUATXU:string
  GIABAN:number
  SOLUONG:number
  MOTA:string
  TRANGTHAI:string
  SOLUONGTON:number
  GIANHAP:number
  PhotoFilepath: string

  listCate: any[]
  ngOnInit(): void {
    this.loadData();
    this.service.getAllCate().subscribe(data => {
      this.listCate = data
    })
  }

  loadData() {
    this.service.getAllSP().subscribe(data => {
      this.listProducts = data;

      this.SanPhamID = this.obj.SanPhamID
      this.TENSP = this.obj.TENSP
      this.GIANHAP = this.obj.GIANHAP
      this.GIABAN = this.obj.GIABAN
      this.IMAGE = this.obj.IMAGE
      this.MOTA = this.obj.MOTA
      this.SOLUONGTON = this.obj.SOLUONGTON
      this.XUATXU = this.obj.XUATXU
      this.TRANGTHAI=this.obj.TRANGTHAI
      this.MALOAI=this.obj.MALOAI
    })
  }

  addNow5() {
    var sanpham = {
      SanPhamID: this.SanPhamID,
      TENSP: this.TENSP,
      GIABAN: this.GIABAN,
      IMAGE: this.IMAGE,
      MALOAI: this.MALOAI,
      MOTA: this.MOTA,
      XUATXU: this.XUATXU,
      GIANHAP: this.GIANHAP,
      SOLUONGTON: this.SOLUONGTON,
    }
    this.service.addSP(sanpham).subscribe((data: any) => {
      alert(`Đã thêm ${this.TENSP}`)
      this.loadData();
    })
    console.log(sanpham);
  }

  editNow5(id: number) {
    var sanpham = {
      SanPhamID: this.SanPhamID,
      TENSP: this.TENSP,
      GIABAN: this.GIABAN,
      IMAGE: this.IMAGE,
      MALOAI: this.MALOAI,
      MOTA: this.MOTA,
      XUATXU: this.XUATXU,
      GIANHAP: this.GIANHAP,
      SOLUONGTON: this.SOLUONGTON,
    }
    let x = confirm('Bạn muốn chỉnh sửa sản phẩm?')
    if (x == true) {
      this.service.editSP(id, sanpham).subscribe((data: any) => {
        alert(`Sửa thành công!`)
      })
    }
  }

  chonhinhanh(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.IMAGE = data.toString();
      this.PhotoFilepath = this.service.PhotoUrl + this.IMAGE;
    })
  }

}
