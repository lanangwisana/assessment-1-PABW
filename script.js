let buku = [
  { nama: "sherlock", jumlah: 2 },
  { nama: "lupin", jumlah: 2 },
  { nama: "aladin", jumlah: 2 },
];

function cekForm() {
  const jumlah = persenInt(document.getElementById("jumlah").value);
  const pilihBuku = document.getElementById("pilih-buku").value;

  if (jumlah === 0) {
    alert("Jumlah buku harus lebih dari 0");
    return false;
  }
  if (pilihBuku === "") {
    alert("Pilihan buku tidak boleh kosong");
    return false;
  }

  const bukuDitemukan = buku.find((buku) => nama === pilihBuku);
  if (!bukuDitemukan) {
    alert("Buku yang dipilih tidak ditemukan");
    return false;
  }
  if (jumlah > bukuDitemukan.jumlah) {
    alert("Jumlah buku yang dipesan melebihi stok yang tersedia");
    return false;
  }
  alert("Silahkan ambil buku anda");
  return true;
}
