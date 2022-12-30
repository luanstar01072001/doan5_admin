import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';

import { SharedService } from './shared.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { ShowLspComponent } from './loaisanpham/show-lsp/show-lsp.component';
import { AddEditLspComponent } from './loaisanpham/add-edit-lsp/add-edit-lsp.component';
import { AddEditNccComponent } from './nhacungcap/add-edit-ncc/add-edit-ncc.component';
import { ShowNccComponent } from './nhacungcap/show-ncc/show-ncc.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { LoaitinComponent } from './loaitin/loaitin.component';
import { ShowLtComponent } from './loaitin/show-lt/show-lt.component';
import { AddEditLtComponent } from './loaitin/add-edit-lt/add-edit-lt.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ShowSpComponent } from './sanpham/show-sp/show-sp.component';
import { AddEditSpComponent } from './sanpham/add-edit-sp/add-edit-sp.component'
import { EditorModule } from '@tinymce/tinymce-angular';
import { BannerComponent } from './banner/banner.component';
import { ShowBnComponent } from './banner/show-bn/show-bn.component';
import { AddEditBnComponent } from './banner/add-edit-bn/add-edit-bn.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { ShowKhComponent } from './khachhang/show-kh/show-kh.component';
import { AddEditKhComponent } from './khachhang/add-edit-kh/add-edit-kh.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ShowDhComponent } from './donhang/show-dh/show-dh.component';
import { AddEditDhComponent } from './donhang/add-edit-dh/add-edit-dh.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { ShowCtdhComponent } from './chitietdonhang/show-ctdh/show-ctdh.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaisanphamComponent,
    ShowLspComponent,
    AddEditLspComponent,
    AddEditNccComponent,
    ShowNccComponent,
    NhacungcapComponent,
    LoaitinComponent,
    ShowLtComponent,
    AddEditLtComponent,
    SanphamComponent,
    ShowSpComponent,
    AddEditSpComponent,
    BannerComponent,
    ShowBnComponent,
    AddEditBnComponent,
    KhachhangComponent,
    ShowKhComponent,
    AddEditKhComponent,
    DonhangComponent,
    ShowDhComponent,
    AddEditDhComponent,
    ChitietdonhangComponent,
    ShowCtdhComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgModule,
    FormsModule,
    EditorModule,
    HttpClientModule,
    // NgModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
