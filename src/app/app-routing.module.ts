import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { DonhangComponent } from './donhang/donhang.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { LoaitinComponent } from './loaitin/loaitin.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { SanphamComponent } from './sanpham/sanpham.component';



const routes: Routes = [
  { path: "loaisanpham", component: LoaisanphamComponent },
  { path: "nhacungcap", component: NhacungcapComponent },
  { path: "loaitin", component: LoaitinComponent },
  { path: 'sanpham', component: SanphamComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'khachhang', component: KhachhangComponent },
  { path: 'donhang', component: DonhangComponent },
  { path: 'chitietdonhang', component: ChitietdonhangComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
