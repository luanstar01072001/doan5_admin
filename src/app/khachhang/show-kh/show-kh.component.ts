import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Khachhang } from '../khachhang.model';

@Component({
  selector: 'app-show-kh',
  templateUrl: './show-kh.component.html',
  styleUrls: ['./show-kh.component.css']
})
export class ShowKhComponent implements OnInit {

  TENKH:any;
  constructor(private service:SharedService) { }
  Ishow = false;
  listKh:Khachhang[]
  ActivateAddEdit = false

  AddEdit:string = 'Thêm - sửa khách hàng'
  tableName:string = 'Danh sách khách hàng'
  objName:string = 'Khách hàng'

  totalLength:any;
  page:number=1;

  obj:Khachhang
  ngOnInit(): void {
    this.lamMoiDL();
  }

  lamMoiDL(){
    this.service.getAllKH().subscribe((data:any) => {
      this.listKh = data;
      this.totalLength=this.listKh.length;
      console.log(data);
    })

  }

  Search(){
    if(this.TENKH==""){
      this.ngOnInit();
    }else{
      this.listKh=this.listKh.filter(res=>{
        return res.TENKH.toLocaleLowerCase().match(this.TENKH.toLocaleLowerCase());
      })
    }
  }
  addClick(){
    this.obj = {
      KhachHangID:0,
      TENKH:'',
      SODIENTHOAI:0,
      DIACHI:'',
      TAIKHOAN:'',
      MATKHAU:'',
      EMAIL:'',
    }
    this.AddEdit = 'Thêm mới khách hàng'
    this.ActivateAddEdit = true;
  }

  editClick(Khachhang: any){
    this.obj = Khachhang
    this.ActivateAddEdit = true;
    this.AddEdit = "Sửa khách hàng"
  }

  delClick(id:number, tenkh:string){
    let cfm = confirm(`Bạn muốn xóa ${tenkh}?`)
    if(cfm == true){
      this.service.deleteKH(id).subscribe(data => {
        alert(`Đã xóa ${tenkh}!`)
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
