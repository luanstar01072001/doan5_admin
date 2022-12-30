import { TestBed } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { SharedService } from 'src/app/shared.service';
import { Loaisanpham } from 'src/app/loaisanpham/loaisanpham.model';
import { ShowLspComponent } from '../show-lsp/show-lsp.component';
@Component({
  selector: 'app-add-edit-lsp',
  templateUrl: './add-edit-lsp.component.html',
  styleUrls: ['./add-edit-lsp.component.css']
})
export class AddEditLspComponent implements OnInit {
  constructor(private service: SharedService) { }
  private showlsp: ShowLspComponent = new ShowLspComponent(this.service);

  @Input() obj: Loaisanpham
  listProducts1: Loaisanpham[]

  IDLOAI:number
  TENLOAI:string
  TRANGTHAI:string

  listCate: any[]
  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.service.getLoaiList().subscribe(data => {
      this.listProducts1 = data;

      this.IDLOAI = this.obj.IDLOAI
      this.TENLOAI = this.obj.TENLOAI
      this.TRANGTHAI=this.obj.TRANGTHAI
    })
  }

  addNow1() {
    var loaisanpham = {
      IDLOAI: this.IDLOAI,
      TENLOAI: this.TENLOAI,
      TRANGTHAI:this.TRANGTHAI
    }
    this.service.addLoai(loaisanpham).subscribe((data: any) => {
      alert(`Đã thêm ${this.TENLOAI}`)
      this.loadData();
    })
    this.showlsp.closeClick();
    console.log(loaisanpham);
  }

  editNow1(id: number) {
    var loaisanpham = {
      IDLOAI: this.IDLOAI,
      TENLOAI: this.TENLOAI,
      TRANGTHAI:this.TRANGTHAI
    }
    let x = confirm('Bạn muốn chỉnh sửa sản phẩm?')
    if (x == true) {
      this.service.updateLoai(id, loaisanpham).subscribe((data: any) => {
        alert(`Sửa thành công!`)
      })
    }

  }

}
