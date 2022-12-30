import { Component, OnInit } from '@angular/core';

import { Loaitin } from 'src/app/loaitin/loaitin.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-lt',
  templateUrl: './show-lt.component.html',
  styleUrls: ['./show-lt.component.css']
})
export class ShowLtComponent implements OnInit {
  TENLOAITIN:any;
  constructor(private service:SharedService) { }

  listLt:Loaitin[]
  ActivateAddEdit = false

  AddEdit:string = 'Thêm - sửa loại tin'
  tableName:string = 'Danh sách loại tin'
  objName:string = 'loại tin'

  totalLength:any;
  page:number=1;

  obj:Loaitin
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL(){
    this.service.getAllLT().subscribe((data:any) => {
      this.listLt = data;
      this.totalLength=this.listLt.length;
      console.log(data);
    })

  }

  Search(){
    if(this.TENLOAITIN==""){
      this.ngOnInit();
    }else{
      this.listLt=this.listLt.filter(res=>{
        return res.TENLOAITIN.toLocaleLowerCase().match(this.TENLOAITIN.toLocaleLowerCase());
      })
    }
  }
  addClick(){
    this.obj = {
      LoaiTinID:0,
      TENLOAITIN:'',
      TRANGTHAI:'',
      CREATE_AT:'',
    }
    this.AddEdit = 'Thêm mới tin'
    this.ActivateAddEdit = true;
  }

  editClick(Loaitin: any){
    this.obj = Loaitin
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa loại tin"
  }

  delClick(id:number, tenlt:string){
    let cfm = confirm(`Bạn muốn xóa ${tenlt}?`)
    if(cfm == true){
      this.service.deleteLT(id).subscribe(data => {
        alert(`Đã xóa ${tenlt}!`)
        this.lamMoiDL();
      })
    }
  }

  closeClick(){
    this.ActivateAddEdit = false;
    this.lamMoiDL();
  }
}
