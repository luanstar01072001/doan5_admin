import { TestBed } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { Nhacungcap } from 'src/app/nhacungcap/nhacungcap.model';
@Component({
  selector: 'app-add-edit-ncc',
  templateUrl: './add-edit-ncc.component.html',
  styleUrls: ['./add-edit-ncc.component.css']
})
export class AddEditNccComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() obj: Nhacungcap
  listProducts2: Nhacungcap[]

  NccID:number
  TENNCC:string
  DIACHI:string
  SODIENTHOAI:number
  EMAIL:string
  TRANGTHAI:string
  UPDATE_AT:string

  listCate: any[]
  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.service.getLoaiList().subscribe(data => {
      this.listProducts2 = data;

      this.NccID = this.obj.NccID
      this.TENNCC = this.obj.TENNCC
      this.DIACHI=this.obj.DIACHI
      this.SODIENTHOAI=this.obj.SODIENTHOAI
      this.EMAIL=this.obj.EMAIL
      this.TRANGTHAI=this.obj.TRANGTHAI
      this.UPDATE_AT=this.obj.UPDATE_AT
    })
  }

  addNow2() {
    var nhacungcap = {
      NccID: this.NccID,
      TENNCC: this.TENNCC,
      DIACHI:this.DIACHI,
      SODIENTHOAI:this.SODIENTHOAI,
      EMAIL:this.EMAIL,
      TRANGTHAI:this.TRANGTHAI,
      UPDATE_AT:this.UPDATE_AT
    }
    this.service.addNCC(nhacungcap).subscribe((data: any) => {
      alert(`Đã thêm ${this.TENNCC}`)
      this.loadData();
    })
    console.log(nhacungcap);
  }

  editNow2(id: number) {
    var nhacungcap = {
      NccID: this.NccID,
      TENNCC: this.TENNCC,
      DIACHI:this.DIACHI,
      SODIENTHOAI:this.SODIENTHOAI,
      EMAIL:this.EMAIL,
      TRANGTHAI:this.TRANGTHAI,
      UPDATE_AT:this.UPDATE_AT
    }
    let x = confirm('Bạn muốn chỉnh sửa nhà cung cấp?')
    if (x == true) {
      this.service.updateNCC(id, nhacungcap).subscribe((data: any) => {
        alert(`Sửa thành công!`)
      })
    }
  }

}
