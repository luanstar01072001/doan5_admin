import { Component, OnInit } from '@angular/core';

import { Loaisanpham } from 'src/app/loaisanpham/loaisanpham.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-lsp',
  templateUrl: './show-lsp.component.html',
  styleUrls: ['./show-lsp.component.css']
})
export class ShowLspComponent implements OnInit {
  TENLOAI:any;
  constructor(private service:SharedService) { }
  Ishow = false;
  listLoai:Loaisanpham[]
  ActivateAddEdit = false

  AddEdit:string = 'Thêm - sửa loại sản phẩm'
  tableName:string = 'Danh sách loại sản phẩm'
  objName:string = 'loại Sản phẩm'

  totalLength:any;
  page:number=1;

  obj:Loaisanpham
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL(){
    this.service.getAllCate().subscribe((data:any) => {
      this.listLoai = data;
      this.totalLength=this.listLoai.length;
      console.log(data);
    })

  }

  Search(){
    if(this.TENLOAI==""){
      this.ngOnInit();
    }else{
      this.listLoai=this.listLoai.filter(res=>{
        return res.TENLOAI.toLocaleLowerCase().match(this.TENLOAI.toLocaleLowerCase());
      })
    }
  }
  filterByCate(event:any){
    let cateid = parseInt(event?.target.value)
    if(cateid == 0){
      this.service.getAllCate().subscribe(data => {
        this.listLoai = data
      })
    }
    else{
      this.service.locTheoLoai(cateid).subscribe(data => {
        this.listLoai = data
      })
    }
  }
  addClick(){
    this.obj = {
      IDLOAI:0,
      TENLOAI:'',
      TRANGTHAI:'',
      UPDATE_AT:'',
    }
    this.AddEdit = 'Thêm mới sản phẩm'
    this.ActivateAddEdit = true;
  }

  editClick(Loaisanpham: any){
    this.obj = Loaisanpham
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa loại sản phẩm"
  }

  delClick(id:number, tenlsp:string){
    let cfm = confirm(`Bạn muốn xóa ${tenlsp}?`)
    if(cfm == true){
      this.service.deleteLoai(id).subscribe(data => {
        alert(`Đã xóa ${tenlsp}!`)
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
