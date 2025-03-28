import { notFound } from 'next/navigation';
import ArtikelDetail from '@/components/artikel/ArticleDetail';

// Data dummy untuk artikel
const artikelData = [
  {
    id: '1',
    title: 'Kolaborasi LRT Palembang dengan Komunitas Lokal untuk Transportasi Berkelanjutan 🚆🌿',
    date: '20 Maret 2025',
    imagePath: '/images/gambar1-lrt.png',
    likes: 24,
    shares: 12,
    content: [
      {
        paragraphs: [
          "Palembang – LRT Sumatera Selatan terus berinovasi dalam meningkatkan peran transportasi publik yang berkelanjutan dengan menggandeng komunitas lokal dalam berbagai kolaboratif. Langkah ini diharapkan dapat lebih banyak menarik minat warga untuk beralih ke transportasi publik yang lebih ramah lingkungan serta tidak terjebak dengan kemacetan.",
          "Dalam beberapa bulan terakhir, LRT Palembang telah memulai kerja sama dengan berbagai komunitas, mulai dari komunitas seni, pegiat literasi, hingga aktivis lingkungan. Program ini diharapkan berbagai kegiatan, seperti pameran seni di stasiun LRT, kampanye literasi di dalam gerbong, serta gerakan pengurangan sampah plastik di area jalur LRT."
        ]
      },
      {
        subtitle: "Transportasi Publik dan Peran Komunitas",
        paragraphs: [
          "Salah satu inisiatif yang mendapat respons positif adalah LRT Green Movement, sebuah program penghijauan yang melibatkan komunitas lingkungan dan mahasiswa dari beberapa universitas di Palembang. Dalam program ini, para relawan menanam pohon di sekitar jalur dan stasiun LRT untuk mengurangi polusi udara serta menciptakan ruang hijau di area perkotaan.",
          "Selain itu, LRT Palembang juga berkolaborasi dengan pegiat literasi dalam program Gerbong Baca, dimana penumpang dapat membaca buku selama perjalanan. Rak-rak kecil berisi buku bacaan telah ditempatkan di beberapa gerbong, memberikan pengalaman yang lebih bermanfaat bagi para pengguna transportasi publik.",
          "Kami ingin menggalakkan masyarakat untuk lebih sadar akan pentingnya transportasi publik dan bagaimana kita bisa menjadikannya sebagai bagian dari gaya hidup yang lebih baik, kata Dina Rahmawati, koordinator program literasi."
        ]
      },
      {
        subtitle: "Dukungan untuk Transportasi Berkelanjutan",
        paragraphs: [
          "Pemerintah daerah turut mendorong inovasi ini dan LRT Palembang dalam memperkuat keterlibatan komunitas lokal. Kepala Dinas Perhubungan Sumatera Selatan, Hendriansyah, menyebut bahwa inovasi ini bisa menjadi contoh bagi kota-kota lain dalam mengelola transportasi publik yang lebih inklusif dan berkelanjutan.",
          "Kita ingin mendorong lebih banyak masyarakat untuk beralih ke transportasi publik. Dengan adanya inovasi seperti ini, LRT tidak hanya menjadi alat transportasi, tetapi juga menjadi pusat edukasi dan aktivitas komunitas, ujar Hendriansyah.,",
          "Ke depan, LRT Palembang berencana memperkuat kolaborasi dengan lebih banyak komunitas, termasuk sektor UMKM, untuk menghadirkan pasar kreatif di area stasiun. Dengan langkah ini, diharapkan LRT dapat semakin berperan dalam kehidupan modern bagi warga Palembang. Sebagai contoh transportasi berbasis rel di luar Pulau Jawa, LRT Palembang terus meningkatkan pengelolaan teknis tugas menjalankannya. Melalui kolaborasi dengan komunitas, LRT tidak hanya menjadi solusi mobilitas tetapi juga bagian dari identitas kota yang lebih hijau, inovatif, dan berkelanjutan."
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Perpanjangan Jam Operasional LRT Palembang',
    date: '15 Maret 2025',
    imagePath: '/images/gambar2-lrt.png',
    likes: 18,
    shares: 8,
    content: [
      {
        paragraphs: [
          "Demi meningkatkan pelayanan kepada masyarakat, LRT Sumatera Selatan kini memperpanjang jam operasionalnya hingga pukul 22.00 WIB. Perubahan ini bertujuan untuk memberikan fleksibilitas lebih bagi para pengguna transportasi publik.",
          "Perpanjangan jam operasional ini mulai berlaku sejak 1 Maret 2025 dan berlaku untuk seluruh rute LRT Palembang. Keputusan ini diambil setelah melalui kajian mendalam terkait permintaan masyarakat dan analisis pola pergerakan penumpang."
        ]
      },
      {
        subtitle: "Respon Terhadap Kebutuhan Masyarakat",
        paragraphs: [
          "Direktur Operasional LRT Palembang, Ahmad Faisal, menjelaskan bahwa keputusan ini merupakan respons terhadap kebutuhan masyarakat Palembang yang semakin dinamis. Banyak pengguna yang meminta layanan LRT hingga malam hari, terutama para pekerja shift malam dan mahasiswa yang kuliah di malam hari, ujarnya.",
          "Selain memperpanjang jam operasional, LRT Palembang juga menambah frekuensi keberangkatan pada jam sibuk, yaitu pagi hari (06.00-08.00 WIB) dan sore hari (16.00-19.00 WIB). Kereta akan beroperasi setiap 10 menit sekali pada jam sibuk dan setiap 15 menit sekali di luar jam sibuk."
        ]
      }
    ]
  },

];

interface ArtikelDetailPageProps {
  params: {
    id: string;
  };
}

export default function ArtikelDetailPage({ params }: ArtikelDetailPageProps) {
  const { id } = params;
  const artikel = artikelData.find(item => item.id === id);
 
  if (!artikel) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ArtikelDetail
          title={artikel.title}
          date={artikel.date}
          imagePath={artikel.imagePath}
          content={artikel.content}
          likes={artikel.likes}
          shares={artikel.shares}
        />
      </div>
    </main>
  );
}