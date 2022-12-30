import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Banner } from '../banner.model';

@Component({
  selector: 'app-add-edit-bn',
  templateUrl: './add-edit-bn.component.html',
  styleUrls: ['./add-edit-bn.component.css']
})
export class AddEditBnComponent implements OnInit {


  constructor(private service: SharedService) { }

  @Input() obj: Banner
  listBn: Banner[]
  id: number
  SODIEM: number
  BINHLUAN: string
  PhotoFilepath: string

  listCate: any[]
  ngOnInit(): void {
    this.loadData();
  }


  loadData() {
    this.service.getAllBN().subscribe(data => {
      this.listBn = data;

      this.id = this.obj.id
      this.SODIEM = this.obj.SODIEM
      this.BINHLUAN = this.obj.BINHLUAN
    })
  }

  addNow6() {
    var banner = {
      id: this.id,
      SODIEM: this.SODIEM,
      BINHLUAN: this.BINHLUAN,
    }
    this.service.addBN(banner).subscribe((data: any) => {
      alert(`Đã thêm ${this.BINHLUAN}`)
      this.loadData();
    })
    console.log(banner);
  }

  editNow6(id: number) {
    var banner = {
      id: this.id,
      SODIEM: this.SODIEM,
      BINHLUAN: this.BINHLUAN,
    }
    let x = confirm('Bạn muốn chỉnh sửa banner?')
    if (x == true) {
      this.service.updateBN(id, banner).subscribe((data: any) => {
        alert(`Sửa thành công!`)
      })
    }
  }

  chonhinhanh1(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto1(formData).subscribe((data: any) => {
      this.BINHLUAN = data.toString();
      this.PhotoFilepath = this.service.PhotoUrl + this.BINHLUAN;
    })
  }

}
