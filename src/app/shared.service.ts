import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIURL="http://localhost:52713/api";
readonly PhotoUrl = 'http://localhost:52713/Photos/';

constructor(private http:HttpClient) { }

getLoaiList():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/LoaiSanPhams');
}

/////////////Loại Sản Phẩm
getAllCate(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/LoaiSanPhams')
}
addLoai(val:any){
  return this.http.post(this.APIURL+'/LoaiSanPhams',val)
}
updateLoai(IDLOAI: number, val: any){
 return this.http.put(this.APIURL+'/LoaiSanPhams/'+ IDLOAI,val)
}

deleteLoai(IDLOAI:number){

 return this.http.delete(this.APIURL+'/LoaiSanPhams/'+IDLOAI);
}
/////////////////Nhà cung cấp
 addNCC(val:any){
  return this.http.post(this.APIURL+'/NhaCungCaps',val)
}
updateNCC(NccID: number, val: any){
 return this.http.put(this.APIURL+'/NhaCungCaps/'+ NccID,val)
}
deleteNCC(NccID:number){

 return this.http.delete(this.APIURL+'/NhaCungCaps/'+NccID);
}
getAllNhaCC(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/NhaCungCaps')
}
/////////////////Loại tin

getLTList():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/LoaiSanPhams');
}
addLT(val:any){
  return this.http.post(this.APIURL+'/LoaiTins',val)
}
updateLT(LoaiTinID: number, val: any){
 return this.http.put(this.APIURL+'/LoaiTins/'+ LoaiTinID,val)
}
deleteLT(LoaiTinID:number){

 return this.http.delete(this.APIURL+'/LoaiTins/'+LoaiTinID);
}
getAllLT(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/LoaiTins')
}

 //SẢN PHẨM
 // tai anh len
 uploadPhoto(val: any) {
  return this.http.post(this.APIURL + '/SanPhams/savefile/', val)
}

// lấy về danh sách sản phẩm
getAllSP(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/Sanphams/get1')
}
//thống kê số lượng sản phẩm
getcountsanpham():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/Sanphams/CountSanpham');
}

// thêm mới sản phẩm
addSP(val: any) {
  return this.http.post(this.APIURL + '/SanPhams', val)
}

// sửa sản phẩm
editSP(SanPhamID: number, val: any) {
  return this.http.put(this.APIURL + '/SanPhams/' + SanPhamID, val)
}

//xóa
deleteSP(SanPhamID: number) {
  return this.http.delete(this.APIURL + '/SanPhams/' + SanPhamID)
}
// lọc thoe loại sản phẩm
locTheoLoai(maloai: number): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/SanPhams/LocTheoLoai?maloai=' + maloai)
}
/////////////////Banner
addBN(val:any){
  return this.http.post(this.APIURL+'/DanhGias',val)
}
updateBN(id: number, val: any){
 return this.http.put(this.APIURL+'/DanhGias/'+ id,val)
}
deleteBN(id:number){

 return this.http.delete(this.APIURL+'/DanhGias/'+id);
}
getAllBN(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/DanhGias')
}
 // tai anh len
 uploadPhoto1(val: any) {
  return this.http.post(this.APIURL + '/DanhGias/savefile1/', val)
}
/////////////////Khách hàng
addKH(val:any){
  return this.http.post(this.APIURL+'/KhachHangs',val)
}
updateKH(KhachHangID: number, val: any){
 return this.http.put(this.APIURL+'/KhachHangs/'+ KhachHangID,val)
}
deleteKH(KhachHangID:number){

 return this.http.delete(this.APIURL+'/KhachHangs/'+KhachHangID);
}
getAllKH(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/KhachHangs')
}

/////////////////Đơn hàng
addDH(val:any){
  return this.http.post(this.APIURL+'/DonHangs',val)
}
updateDH(DonHangID: number, val: any){
 return this.http.put(this.APIURL+'/DonHangs/'+ DonHangID,val)
}
deleteDH(DonHangID:number){

 return this.http.delete(this.APIURL+'/DonHangs/'+DonHangID);
}
getAllDH(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/DonHangs')
}

/////////////////Khách hàng
addCTDH(val:any){
  return this.http.post(this.APIURL+'/ChiTietDonHangs',val)
}
updateCTDH(CTDonHangID: number, val: any){
 return this.http.put(this.APIURL+'/ChiTietDonHangs/'+ CTDonHangID,val)
}
deleteCTDH(CTDonHangID:number){

 return this.http.delete(this.APIURL+'/ChiTietDonHangs/'+CTDonHangID);
}
getAllCTDH(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/ChiTietDonHangs')
}

getdonhangrDetail(orderID: number):Observable<any[]>{
  return this.http.get<any>(this.APIURL + '/CTDonhang/' + orderID)
}

}
