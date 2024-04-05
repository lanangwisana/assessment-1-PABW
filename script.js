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
}
