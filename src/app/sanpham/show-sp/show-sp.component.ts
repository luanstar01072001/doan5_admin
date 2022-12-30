import { Component, OnInit } from '@angular/core';
import { Loaisanpham } from 'src/app/loaisanpham/loaisanpham.model';
import { Sanpham } from 'src/app/sanpham/sanpham.model';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-sp',
  templateUrl: './show-sp.component.html',
  styleUrls: ['./show-sp.component.css']
})

export class ShowSpComponent implements OnInit {
  TENSP: any;
  constructor(private service: SharedService) { }

  listProducts: Sanpham[]
  ActivateAddEdit = false

  AddEdit: string = 'Thêm - sửa sản phẩm'
  tableName: string = 'Danh sách sản phẩm'
  objName: string = 'Sản phẩm'
  dsLoai: Loaisanpham[]
  obj: Sanpham
  totalLength: any;
  page: number = 1;
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL() {
    this.service.getAllSP().subscribe((data: any) => {
      this.listProducts = data;
      this.totalLength = this.listProducts.length;
      console.log(data);

    })
    this.service.getAllCate().subscribe(data => {
      return this.dsLoai = data;
    })
  }
  Search() {
    if (this.TENSP == "") {
      this.ngOnInit();
    } else {
      this.listProducts = this.listProducts.filter(res => {
        return res.TENSP.toLocaleLowerCase().match(this.TENSP.toLocaleLowerCase());
      })
    }
  }

  filterByCate(event: any) {
    let cateid = parseInt(event?.target.value)
    if (cateid == 0) {
      this.service.getAllSP().subscribe(data => {
        this.listProducts = data
      })
    }
    else {
      this.service.locTheoLoai(cateid).subscribe(data => {
        this.listProducts = data
      })
    }
  }

  addClick() {
    this.obj = {
      SanPhamID: 0,
      TENSP: '',
      GIABAN: 0,
      IMAGE: '',
      MALOAI: 0,
      MOTA: '',
      XUATXU: '',
      GIANHAP: 0,
      SOLUONGTON: 0,
      SOLUONG: 0,
      TRANGTHAI: '',
    }
    this.AddEdit = 'Thêm mới sản phẩm'
    this.ActivateAddEdit = true;
  }

  editClick(sanpham: any) {
    this.obj = sanpham
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa sản phẩm"
  }

  delClick(id: number, tensp: string) {
    let cfm = confirm(`Bạn muốn xóa ${tensp}?`)
    if (cfm == true) {
      this.service.deleteSP(id).subscribe(data => {
        alert(`Đã xóa ${tensp}!`)
        this.lamMoiDL();
      })
    }
  }

  closeClick() {
    this.ActivateAddEdit = false;
    this.lamMoiDL();
  }

}
