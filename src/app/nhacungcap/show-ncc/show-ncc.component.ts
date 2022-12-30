import { Component, OnInit } from '@angular/core';

import { Nhacungcap } from 'src/app/nhacungcap/nhacungcap.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ncc',
  templateUrl: './show-ncc.component.html',
  styleUrls: ['./show-ncc.component.css']
})
export class ShowNccComponent implements OnInit {
  TENNCC:any;
  constructor(private service:SharedService) { }

  listNcc:Nhacungcap[]
  ActivateAddEdit = false

  AddEdit:string = 'Thêm - sửa nhà cung cấp'
  tableName:string = 'Danh sách nhà cung cấp'
  objName:string = 'nhà cung cấp'

  totalLength:any;
  page:number=1;

  obj:Nhacungcap
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL(){
    this.service.getAllNhaCC().subscribe((data:any) => {
      this.listNcc = data;
      this.totalLength=this.listNcc.length;
      console.log(data);
    })

  }

  Search(){
    if(this.TENNCC==""){
      this.ngOnInit();
    }else{
      this.listNcc=this.listNcc.filter(res=>{
        return res.TENNCC.toLocaleLowerCase().match(this.TENNCC.toLocaleLowerCase());
      })
    }
  }
  addClick(){
    this.obj = {
      NccID:0,
      TENNCC:'',
      DIACHI:'',
      SODIENTHOAI:0,
      EMAIL:'',
      TRANGTHAI:'',
      UPDATE_AT:'',
    }
    this.AddEdit = 'Thêm mới nhà cung cấp'
    this.ActivateAddEdit = true;
  }

  editClick(Nhacungcap: any){
    this.obj = Nhacungcap
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa nhà cung cấp"
  }

  delClick(id:number, tenncc:string){
    let cfm = confirm(`Bạn muốn xóa ${tenncc}?`)
    if(cfm == true){
      this.service.deleteNCC(id).subscribe(data => {
        alert(`Đã xóa ${tenncc}!`)
        this.lamMoiDL();
      })
    }
  }

  closeClick(){
    this.ActivateAddEdit = false;
    this.lamMoiDL();
  }
}
