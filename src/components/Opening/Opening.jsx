import satu from '../../assets/1.webp';
import dua from '../../assets/2.webp';
import tiga from '../../assets/3.webp';
import empat from '../../assets/4.webp';
import lima from '../../assets/5.webp';
import enam from '../../assets/6.webp';
import tujuh from '../../assets/7.webp';
import delapan from '../../assets/8.webp';
import sembilan from '../../assets/9.webp';
import sepuluh from '../../assets/10.webp';

const Opening = () => {
  const imgs = [
    {
      id:1,
      url:satu
    },
    {
      id:2,
      url:dua
    },
    {
      id:3,
      url:tiga
    },
    {
      id:4,
      url:empat
    },
    {
      id:5,
      url:lima
    },
    {
      id:6,
      url:enam
    },
    {
      id:7,
      url:tujuh
    },
    {
      id:8,
      url:delapan
    },
    {
      id:9,
      url:sembilan
    },
    {
      id:10,
      url:sepuluh
    },

  ]
  return (
    <section className="">
      <div  className="">
        <p className="fs-1 fw-bold text-center">KUISIONER PENELITIAN</p>
        <p className="fs-5 fw-semibold text-center border-top border-bottom py-2">“ANALISIS TINGKAT ADAPTASI PENGUNJUNG GENERASI Z TERHADAP KUALITAS ELEMEN INTERIOR GEDUNG DINAS PERPUSTAKAAN DAN KEARSIPAN KABUPATEN”</p>
        <p className='text-center border-bottom pb-2'>
          Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan adalah perpustakaan pertama di Kabupaten Pamekasan, berdiri pada tahun 1986 yang kemudian mendapat renovasi pada tahun 2008. Sebagai Lembaga satu-satunya yang bergerak di bidang perpustakaan dan kearsipan Dinas perpustakaan dan Kearsipan Kabupaten Pamekasan mengalami penurunan pengunjung dari 66.307 pada tahun 2022 ke 39.721 pada tahun 2023 (Diskominfo, 2023). Hingga bulan maret 2023 gedung fasilitas utama Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan mengalami re-desain secara total. Berikut adalah foto kondisi terakhir Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan:
        </p>
      </div>
      <div className="row">
        {imgs.map((image) => 
          <div key={image.id} className="col-6 gap-2">
            <img src={image.url} alt='img' className="w-100 mb-3 shadow-sm" />
          </div>
        )}
      </div>
      <div className='text-center'>
        <p>Isilah kusioner ini dengan jujur dan apa adanya, jangan lupa membaca arahan terlebih dahulu disetiap sesinya. Saya Achmad Fachriali Mulyadi S.Ds, selaku peneliti mengucapkan terima kasih banyak kepada anda yang sudah mengisi kusioner ini.</p>
      </div>
    </section>
  )
}

export default Opening
