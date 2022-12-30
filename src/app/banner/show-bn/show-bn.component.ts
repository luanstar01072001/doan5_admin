import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Banner } from '../banner.model';

@Component({
  selector: 'app-show-bn',
  templateUrl: './show-bn.component.html',
  styleUrls: ['./show-bn.component.css']
})
export class ShowBnComponent implements OnInit {
  BINHLUAN:any;
  constructor(private service:SharedService) { }
  listBn:Banner[]
  ActivateAddEdit = false

  AddEdit:string = 'Thêm - sửa banner'
  tableName:string = 'Danh sách banner'
  objName:string = 'loại banner'

  totalLength:any;
  page:number=1;

  obj:Banner
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL(){
    this.service.getAllBN().subscribe((data:any) => {
      this.listBn = data;
      this.totalLength=this.listBn.length;
      console.log(data);
    })

  }

  Search(){
    if(this.BINHLUAN==""){
      this.ngOnInit();
    }else{
      this.listBn=this.listBn.filter(res=>{
        return res.BINHLUAN.toLocaleLowerCase().match(this.BINHLUAN.toLocaleLowerCase());
      })
    }
  }
  addClick(){
    this.obj = {
      id:0,
      SODIEM:0,
      BINHLUAN:'',
    }
    this.AddEdit = 'Thêm mới banner'
    this.ActivateAddEdit = true;
  }

  editClick(Banner: any){
    this.obj = Banner
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa banner"
  }

  delClick(id:number, tenbn:string){
    let cfm = confirm(`Bạn muốn xóa ${tenbn}?`)
    if(cfm == true){
      this.service.deleteBN(id).subscribe(data => {
        alert(`Đã xóa ${tenbn}!`)
        this.lamMoiDL();
      })
    }
  }

  closeClick(){
    this.ActivateAddEdit = false;
    this.lamMoiDL();
  }
}
