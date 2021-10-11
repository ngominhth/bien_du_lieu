//tinh diem sinh vien
let toan=prompt("Nhập điểm toán");
let hoa=prompt("Nhập điểm hóa");
let sinhhoc=prompt("nhập điêm sinh học");
let montoan=parseInt(toan);
let monhoa=parseInt(hoa);
let monsinh=parseInt(sinhhoc);
let dtb=(montoan+monhoa+monsinh)/3;
let tongmon=montoan+monhoa+monsinh;
document.write("Điểm trung binh:" +dtb+"<br>");
document.write("Tổng điểm:" +tongmon);