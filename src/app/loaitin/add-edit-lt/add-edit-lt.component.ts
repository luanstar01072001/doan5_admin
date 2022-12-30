import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Loaitin } from 'src/app/loaitin/loaitin.model';
@Component({
  selector: 'app-add-edit-lt',
  templateUrl: './add-edit-lt.component.html',
  styleUrls: ['./add-edit-lt.component.css']
})
export class AddEditLtComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() obj: Loaitin
  listProducts3: Loaitin[]

  LoaiTinID:number
  TENLOAITIN:string
  TRANGTHAI:string
  CREATE_AT:string

  listCate: any[]
  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.service.getLTList().subscribe(data => {
      this.listProducts3 = data;

      this.LoaiTinID = this.obj.LoaiTinID
      this.TENLOAITIN = this.obj.TENLOAITIN
      this.TRANGTHAI=this.obj.TRANGTHAI
      this.CREATE_AT=this.obj.CREATE_AT
    })
  }

  addNow3() {
    var loaitin = {
      LoaiTinID: this.LoaiTinID,
      TENLOAITIN: this.TENLOAITIN,
      TRANGTHAI:this.TRANGTHAI,
      CREATE_AT:this.CREATE_AT
    }
    this.service.addLT(loaitin).subscribe((data: any) => {
      alert(`Đã thêm ${this.TENLOAITIN}`)
      this.loadData();
    })
    console.log(loaitin);
  }

  editNow3(id: number) {
    var loaitin = {
      LoaiTinID: this.LoaiTinID,
      TENLOAITIN: this.TENLOAITIN,
      TRANGTHAI:this.TRANGTHAI,
      CREATE_AT:this.CREATE_AT
    }
    let x = confirm('Bạn muốn chỉnh sửa loại tin?')
    if (x == true) {
      this.service.updateLT(id, loaitin).subscribe((data: any) => {
        alert(`Sửa thành công!`)
      })
    }
  }

}
