let tinhDTBKhoi1 = (...diem) => {
    let tong = 0;
    for(let i=0; i<diem.length; i++) {
        tong += diem[i];
    };
    let DiemTB = (tong/diem.length);
    document.getElementById("tbKhoi1").innerHTML = DiemTB;
}

let DTBKhoi1 = () => {
    let diemToan = Number(document.getElementById("inpToan").value);
    let diemLy = Number(document.getElementById("inpLy").value);
    let diemHoa = Number(document.getElementById("inpHoa").value);

    if(diemToan >= 0 && diemToan <= 10
        && diemLy >= 0 && diemLy <= 10
        && diemHoa >= 0 && diemHoa <= 10) {
            tinhDTBKhoi1(diemToan,diemLy,diemHoa);
        } else {
            document.getElementById("tbKhoi1").innerHTML = "Các điểm không được để trống và nằm trong khoảng từ 0-10";
        }

}
document.getElementById("btnKhoi1").onclick = DTBKhoi1;

let tinhDTBKhoi2 = (...diem) => {
    let tong = 0;
    for(let i=0; i<diem.length; i++) {
        tong += diem[i];
    };
    let DiemTB = (tong/diem.length);
    document.getElementById("tbKhoi2").innerHTML = DiemTB;
}

let DTBKhoi2 = () => {
    let diemVan = Number(document.getElementById("inpVan").value);
    let diemSu = Number(document.getElementById("inpSu").value);
    let diemDia = Number(document.getElementById("inpDia").value);
    let diemAnh = Number(document.getElementById("inpEnglish").value);

    if(diemVan >= 0 && diemVan <= 10
        && diemSu >= 0 && diemSu <= 10
        && diemDia >= 0 && diemDia <= 10
        && diemAnh >= 0 && diemAnh <= 10) {
            tinhDTBKhoi2(diemVan,diemSu,diemDia,diemAnh);
        } else {
            document.getElementById("tbKhoi2").innerHTML = "Các điểm không được để trống và nằm trong khoảng từ 0-10";
        }
}
document.getElementById("btnKhoi2").onclick = DTBKhoi2;
