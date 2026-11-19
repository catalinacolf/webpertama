/**
 * PANTHEON ULAMA NUSANTARA — VANILLA JAVASCRIPT ENGINE
 * Mengelola database historis 5 ulama, Peta Pelayaran 3D dengan kapal SVG,
 * slide visual per tahap perjalanan, pop-up detail kota, dan kuis 20 soal.
 */

'use strict';

// ==========================================================================
// 1. DATABASE BIOGRAFI & RUTE PELAYARAN 5 ULAMA NUSANTARA
// ==========================================================================
const SCHOLARS_DATA = [
  {
    id: 'nawawi',
    romanNumeral: 'I',
    shortName: 'Syekh Nawawi Al-Bantani',
    originBadge: 'Banten • 1813–1897 M',
    themeColor: '#136f53', // Emerald Jade
    imageFile: 'img/nawawi.jpeg',
    crestTitle: 'AL-BANTANI',
    crestSubtitle: 'SAYYID ULAMA AL-HIJAZ',
    yearsSpan: '1813 – 1897 M',
    hero: {
      fullName: 'Syekh Nawawi Al-Bantani',
      epithet: 'Sayyid Ulama Al-Hijaz • Mahaguru Ulama Nusantara di Mekkah',
      region: 'Tanara, Kesultanan Banten',
      summary:
        'Ulama produktif asal Banten yang diakui sebagai pemimpin para ulama di Hijaz (Mekkah) pada abad ke-19. Melalui lebih dari seratus karya tulis berbahasa Arab di bidang tafsir, fiqih, tauhid, dan tasawuf, beliau membentuk fondasi kurikulum keilmuan pesantren di seluruh Nusantara.'
    },
    // Rute Pelayaran 3D & Slide Visual
    voyageStops: [
      {
        city: 'Tanara, Kesultanan Banten',
        era: '1813 – 1828 M',
        x: 755,
        y: 365,
        direction: 'Titik Awal • Kesultanan Banten',
        title: '1. Belajar Dasar Agama di Tanara & Purwakarta',
        summary: 'Lahir di Tanara, Serang, Banten. Sejak usia 5 tahun Syekh Nawawi mempelajari Al-Qur’an, bahasa Arab, dan fiqih dasar dari ayahandanya Kiai Umar bin Arabi, lalu berguru ke Kiai Sahal di Banten dan Raden Haji Yusuf di Purwakarta.',
        significance: 'Membentuk fondasi akhlak dan penguasaan gramatika bahasa Arab sebelum merantau ke Tanah Suci.',
        iconType: 'mosque'
      },
      {
        city: 'Mekkah Al-Mukarramah (Hijaz)',
        era: 'Sekitar 1828 M',
        x: 332,
        y: 185,
        direction: 'Berlayar Melintasi Samudra Hindia ke Hijaz',
        title: '2. Pelayaran Pertama ke Mekkah pada Usia 15 Tahun',
        summary: 'Menunaikan ibadah haji sekaligus bermukim untuk belajar kepada para ulama besar Haramain seperti Syekh Ahmad Zaini Dahlan dan Syekh Ahmad Khatib Sambas.',
        significance: 'Memperdalam ilmu tafsir, fiqih Mazhab Syafi’i, dan aqidah Ahlussunnah wal Jama’ah di pusat keilmuan Islam.',
        iconType: 'ship'
      },
      {
        city: 'Banten (Kembali ke Tanah Air)',
        era: 'Pertengahan Abad ke-19',
        x: 760,
        y: 372,
        direction: 'Pulang ke Nusantara & Menyaksikan Kolonialisme',
        title: '3. Kembali ke Banten dan Mengajar di Tanah Air',
        summary: 'Setelah beberapa tahun belajar di Mekkah, beliau sempat kembali ke Banten untuk mengajar. Namun pembatasan ketat pemerintah kolonial Belanda terhadap dakwah membuatnya memutuskan kembali ke Mekkah.',
        significance: 'Menumbuhkan kesadaran perjuangan kultural dan pendidikan untuk membebaskan umat dari kebodohan.',
        iconType: 'scroll'
      },
      {
        city: 'Masjidil Haram & Ma’la, Mekkah',
        era: '1860 – 1897 M',
        x: 325,
        y: 170,
        direction: 'Menetap Permanen & Menjadi Mahaguru Dunia Islam',
        title: '4. Mengajar di Masjidil Haram & Menulis 100+ Kitab',
        summary: 'Membuka halaqah di Syi’ib Ali dan Masjidil Haram, mendidik ribuan santri Nusantara (termasuk pendiri NU & Muhammadiyah), serta melahirkan lebih dari 100 kitab yang dicetak di Kairo dan Mekkah hingga wafat pada 1897 M.',
        significance: 'Dianugerahi gelar kehormatan Sayyid Ulama Al-Hijaz dan karya-karyanya menjadi kurikulum pesantren hingga kini.',
        iconType: 'book'
      }
    ],
    profile: {
      namaLengkap: 'Abu Abdul Mu’ti Muhammad Nawawi bin Umar bin Arabi Al-Bantani Al-Jawi',
      lahir: 'Tanara, Serang, Banten — 1230 H / 1813 M',
      wafat: 'Mekkah, Hijaz — 25 Syawal 1314 H / 1897 M (Dimakamkan di Ma’la)',
      asalDaerah: 'Tanara, Kabupaten Serang, Banten',
      bidangKeilmuan: 'Fiqih Mazhab Syafi’i, Tafsir Al-Qur’an, Tauhid, Tasawuf, Ilmu Alat (Nahwu-Sharaf)',
      julukan: 'Sayyid Ulama Al-Hijaz, Al-Imam Al-Muhaqqiq, Bapak Kitab Kuning Indonesia'
    },
    timeline: [
      {
        phase: '1813 – 1828 M • Masa Kecil & Pendidikan Awal',
        title: 'Tumbuh dalam Tradisi Keilmuan Keluarga di Tanara',
        desc: 'Lahir di Tanara, Banten, dari pasangan Kiai Umar bin Arabi dan Nyai Zubaidah. Sejak usia lima tahun, beliau mempelajari dasar-dasar ilmu agama, bahasa Arab, dan Al-Qur’an langsung dari ayahandanya sebelum berguru kepada Kiai Sahal di Banten dan Raden Haji Yusuf di Purwakarta.'
      },
      {
        phase: 'Sekitar 1828 M • Hijrah ke Tanah Suci',
        title: 'Menuntut Ilmu ke Mekkah dan Madinah',
        desc: 'Pada usia sekitar 15 tahun, beliau menunaikan ibadah haji sekaligus menetap di Mekkah untuk memperdalam ilmu agama. Setelah sempat kembali ke Banten selama beberapa tahun dan menyaksikan tekanan kolonial Belanda, beliau kembali dan menetap permanen di Mekkah.'
      },
      {
        phase: 'Pertengahan Abad ke-19 • Guru-Guru Besar Haramain',
        title: 'Berguru kepada Ulama Terkemuka Timur Tengah',
        desc: 'Di Mekkah dan Madinah, beliau menimba ilmu dari ulama-ulama besar lintas disiplin, di antaranya Syekh Ahmad Zaini Dahlan, Syekh Ahmad Khatib Sambas, Syekh Abdul Ghani Bima, Syekh Muhammad Khatib Al-Hanbali, dan Syekh Yusuf Sunbulawini.'
      },
      {
        phase: '1860 – 1890-an • Halaqah Masjidil Haram & Kepenulisan',
        title: 'Mengajar di Masjidil Haram dan Melahirkan Ratusan Kitab',
        desc: 'Beliau membuka halaqah pengajian di Masjidil Haram dan kediamannya di Syi’ib Ali, Mekkah. Setiap harinya ratusan penuntut ilmu dari Nusantara maupun berbagai penjuru dunia Islam belajar kepadanya.'
      },
      {
        phase: '1897 M • Akhir Hayat',
        title: 'Wafat di Mekkah dan Dimakamkan di Pemakaman Ma’la',
        desc: 'Syekh Nawawi Al-Bantani wafat di Mekkah pada 25 Syawal 1314 H (1897 M) dalam usia sekitar 84 tahun dan dimakamkan di Jannatul Ma’la, Mekkah.'
      }
    ],
    works: [
      {
        title: 'Tafsir Al-Munir li Ma’alim At-Tanzil (Marah Labid)',
        field: 'Tafsir Al-Qur’an (2 Jilid)',
        desc: 'Tafsir lengkap 30 juz berbahasa Arab yang memadukan pendekatan riwayat (bi al-ma’tsur) dan analisis kebahasaan secara ringkas dan sistematis.'
      },
      {
        title: 'Kasyifat As-Saja fi Syarh Safinat An-Najah',
        field: 'Fiqih Ibadah (Mazhab Syafi’i)',
        desc: 'Penjelasan mendalam atas kitab dasar fiqih Safinat An-Najah karya Syekh Salim bin Sumair Al-Hadhrami, menjadi rujukan wajib fiqih dasar di pesantren.'
      },
      {
        title: 'Nihayat Az-Zain fi Irsyad Al-Mubtadi’in',
        field: 'Fiqih Tingkat Lanjut',
        desc: 'Syarah atas kitab Qurrat Al-‘Ain karya Syekh Zainuddin Al-Malibari yang membahas hukum ibadah, muamalah, munakahat, dan jinayat.'
      },
      {
        title: 'Uqud Al-Lujain fi Bayan Huquq Az-Zaujain',
        field: 'Fiqih Keluarga & Etika Rumah Tangga',
        desc: 'Membahas hak, kewajiban, serta adab hubungan suami dan istri dalam membangun keluarga harmonis menurut tuntunan syariat.'
      }
    ],
    thoughts: {
      bidangFokus:
        'Konsisten mengembangkan keilmuan Islam tradisional (Mazhab Syafi’i dalam fiqih, Asy’ariyah dalam aqidah, dan tasawuf Sunni Al-Ghazali) dengan metode syarah agar teks klasik mudah dipahami pelajar non-Arab.',
      gagasanUtama:
        'Menekankan keseimbangan antara penguasaan syariat lahiriah (fiqih) dan penyucian batin (tasawuf), serta membangun kesadaran anti-kolonial secara kultural melalui penguatan literasi.',
      pengaruhIslam:
        'Menjadi guru langsung bagi pendiri organisasi Islam besar di Indonesia seperti KH. Hasyim Asy’ari (NU) dan KH. Ahmad Dahlan (Muhammadiyah).'
    },
    contributions: [
      { icon: 'bi-book-half', title: 'Pendidikan Islam & Pesantren', desc: 'Kitab-kitab karyanya menjadi kurikulum standar lintas generasi di ribuan pondok pesantren Nusantara.' },
      { icon: 'bi-globe-americas', title: 'Pengakuan Ulama Nusantara di Dunia', desc: 'Membuktikan ulama asal Nusantara mampu menjadi rujukan utama di pusat keilmuan Mekkah dan Kairo.' },
      { icon: 'bi-pen-fill', title: 'Tradisi Literasi & Kodifikasi Ilmu', desc: 'Menulis lebih dari 100 judul kitab yang dicetak oleh percetakan besar di Timur Tengah.' },
      { icon: 'bi-people-fill', title: 'Kaderisasi Tokoh Bangsa', desc: 'Mendidik ribuan santri Jawi yang kelak pulang menjadi pemimpin umat dan pelopor pergerakan kemerdekaan.' },
      { icon: 'bi-shield-check', title: 'Perlawanan Kultural Anti-Kolonial', desc: 'Membina semangat kemandirian dan kepedulian murid-muridnya terhadap nasib tanah air dari penjajahan.' }
    ],
    virtues: [
      { title: 'Ketekunan Menulis & Berbagi Ilmu', desc: 'Mengajar di siang hari dan menulis kitab di malam hari demi memudahkan generasi sesudahnya belajar.' },
      { title: 'Kerendahan Hati Meski Bergelar Mahaguru', desc: 'Tetap hidup bersahaja dan menghormati sesama penuntut ilmu walau dijuluki Sayyid Ulama Al-Hijaz.' },
      { title: 'Kegigihan Merantau Demi Ilmu', desc: 'Keterbatasan pendidikan di masa kolonial tidak menghalanginya menempuh perjalanan jauh ke Tanah Suci.' }
    ],
    references: [
      'Azra, Azyumardi. (2004). Jaringan Ulama Timur Tengah dan Kepulauan Nusantara Abad XVII & XVIII. Jakarta: Kencana.',
      'Steenbrink, Karel A. (1984). Beberapa Aspek Tentang Islam di Indonesia Abad ke-19. Jakarta: Bulan Bintang.',
      'Bruinessen, Martin van. (1995). Kitab Kuning, Pesantren dan Tarekat. Bandung: Mizan.'
    ]
  },

  {
    id: 'yusuf',
    romanNumeral: 'II',
    shortName: 'Syekh Yusuf Al-Makassari',
    originBadge: 'Gowa • 1626–1699 M',
    themeColor: '#d9534f', // Coral Crimson
    imageFile: 'img/yusuf.jpeg',
    crestTitle: 'AL-MAKASSARI',
    crestSubtitle: 'TUANTA SALAMAKA RI GOWA',
    yearsSpan: '1626 – 1699 M',
    hero: {
      fullName: 'Syekh Yusuf Al-Makassari',
      epithet: 'Tuanta Salamaka ri Gowa • Ulama Sufi & Pahlawan Dua Benua',
      region: 'Kesultanan Gowa, Sulawesi Selatan',
      summary:
        'Ulama besar asal Makassar yang memadukan kedalaman tasawuf dengan keberanian melawan kolonialisme VOC. Pengasingannya oleh Belanda hingga ke Sri Lanka dan Afrika Selatan justru menjadikannya pelopor penyebaran Islam di Tanjung Harapan (Cape Town).'
    },
    voyageStops: [
      {
        city: 'Kerajaan Gowa (Makassar)',
        era: '1626 – 1644 M',
        x: 868,
        y: 355,
        direction: 'Titik Awal • Sulawesi Selatan',
        title: '1. Pendidikan Awal di Istana Kesultanan Gowa',
        summary: 'Lahir di Moncongloe, Gowa, pada 3 Juli 1626 M. Dibesarkan di lingkungan istana Sultan Alauddin, beliau mempelajari dasar Al-Qur’an, bahasa Arab, dan tasawuf kepada ulama lokal sebelum merantau.',
        significance: 'Menjadi awal perjalanan panjang salah satu ulama pengembara terbesar dalam sejarah Nusantara.',
        iconType: 'mosque'
      },
      {
        city: 'Kesultanan Banten & Aceh',
        era: '1644 – 1649 M',
        x: 755,
        y: 368,
        direction: 'Berlayar ke Barat Nusantara (Banten & Aceh)',
        title: '2. Persahabatan di Banten & Berguru di Aceh',
        summary: 'Singgah di Banten dan bersahabat erat dengan Pangeran Surya (kelak Sultan Ageng Tirtayasa), lalu berlayar ke Aceh untuk berguru kepada Syekh Nuruddin Ar-Raniri sebelum menyeberangi Samudra Hindia.',
        significance: 'Membangun ikatan persaudaraan yang kelak membawanya kembali membela Banten melawan VOC.',
        iconType: 'ship'
      },
      {
        city: 'Yaman, Mekkah, Madinah & Damaskus',
        era: '1649 – 1664 M',
        x: 330,
        y: 175,
        direction: 'Menuntut Ilmu di Pusat Peradaban Timur Tengah',
        title: '3. Meraih Ijazah Tarekat di Hijaz & Damaskus',
        summary: 'Belajar selama belasan tahun di Yaman, Mekkah, dan Madinah (berguru kepada Syekh Ibrahim Al-Kurani & Syekh Ahmad Al-Qusyasyi), serta ke Damaskus menerima ijazah Tarekat Khalwatiyah dari Syekh Ayyub Al-Khalwati.',
        significance: 'Menguasai berbagai disiplin syariat dan tarekat mu’tabarah (Neo-Sufisme).',
        iconType: 'book'
      },
      {
        city: 'Kesultanan Banten (Perlawanan VOC)',
        era: '1664 – 1683 M',
        x: 752,
        y: 365,
        direction: 'Kembali ke Banten & Memimpin Perang Gerilya',
        title: '4. Mufti Kesultanan & Panglima Perlawanan VOC',
        summary: 'Karena Makassar telah dikuasai VOC, beliau menetap di Banten sebagai Mufti dan penasihat Sultan Ageng Tirtayasa. Saat konflik pecah pada 1682, beliau turun langsung memimpin pasukan melawan Belanda.',
        significance: 'Membuktikan bahwa tasawuf sejati melahirkan keberanian membela tanah air dari penjajahan.',
        iconType: 'shield'
      },
      {
        city: 'Sri Lanka (Ceylon)',
        era: '1684 – 1694 M',
        x: 548,
        y: 288,
        direction: 'Diasingkan VOC ke Pulau Ceylon (Sri Lanka)',
        title: '5. Dakwah & Menulis Kitab di Pengasingan Sri Lanka',
        summary: 'Setelah ditangkap Belanda melalui tipu muslihat pada 1683, beliau dibuang ke Sri Lanka. Di sana beliau tetap mengajar para jamaah haji Nusantara yang singgah dan menulis risalah Al-Nafhah As-Sailaniyah.',
        significance: 'Pengaruhnya tetap menjangkau Nusantara sehingga VOC memutuskan membuangnya lebih jauh lagi.',
        iconType: 'scroll'
      },
      {
        city: 'Cape Town / Zandvliet (Afrika Selatan)',
        era: '1694 – 1699 M',
        x: 142,
        y: 422,
        direction: 'Dipindahkan ke Tanjung Harapan, Afrika Selatan',
        title: '6. Pelopor Komunitas Muslim di Afrika Selatan',
        summary: 'Pada 1694 VOC memindahkannya ke Tanjung Harapan (Cape Town). Di kawasan Zandvliet (kini bernama Macassar), beliau membina komunitas Muslim awal hingga wafat pada 23 Mei 1699 M.',
        significance: 'Dihormati sebagai Pahlawan Nasional di dua negara sekaligus: Indonesia dan Afrika Selatan.',
        iconType: 'compass'
      }
    ],
    profile: {
      namaLengkap: 'Abul Mahasin Hadiyatullah Tajul Khalwati Muhammad Yusuf bin Abdullah Al-Makassari',
      lahir: 'Moncongloe, Kerajaan Gowa, Sulawesi Selatan — 3 Juli 1626 M (8 Syawal 1036 H)',
      wafat: 'Zandvliet (Macassar), Cape Town, Afrika Selatan — 23 Mei 1699 M (22 Zulkaidah 1110 H)',
      asalDaerah: 'Kesultanan Gowa, Sulawesi Selatan',
      bidangKeilmuan: 'Tasawuf (Tarekat Khalwatiyah, Naqsyabandiyah, Qadiriyah, Syattariyah), Ilmu Kalam, Fiqih',
      julukan: 'Tuanta Salamaka ri Gowa, Pahlawan Nasional Indonesia & Afrika Selatan'
    },
    timeline: [
      {
        phase: '1626 – 1644 M • Masa Kecil di Istana Gowa',
        title: 'Pendidikan Dasar Agama di Sulawesi Selatan',
        desc: 'Lahir di lingkungan kerabat Kerajaan Gowa dan dibesarkan di bawah asuhan Sultan Alauddin. Sejak kecil beliau belajar membaca Al-Qur’an, bahasa Arab, fiqih, dan tasawuf kepada ulama lokal.'
      },
      {
        phase: '1644 – 1664 M • Pengembaraan Intelektual Lintas Negeri',
        title: 'Menuntut Ilmu ke Banten, Aceh, Yaman, Hijaz, dan Damaskus',
        desc: 'Singgah di Banten, berguru kepada Syekh Nuruddin Ar-Raniri di Aceh, lalu melanjutkan studi ke Yaman, Mekkah, Madinah, serta Damaskus.'
      },
      {
        phase: '1664 – 1683 M • Mufti & Panglima Perjuangan di Banten',
        title: 'Menjadi Penasihat Sultan Ageng Tirtayasa dan Melawan VOC',
        desc: 'Menetap di Kesultanan Banten sebagai Mufti dan memimpin langsung pasukan gerilya melawan VOC pada 1682.'
      },
      {
        phase: '1684 – 1694 M • Pengasingan Pertama',
        title: 'Diasingkan VOC ke Sri Lanka (Ceylon)',
        desc: 'Di tempat pengasingan Sri Lanka beliau tetap mengajar, dikunjungi jamaah haji Nusantara, serta menulis berbagai risalah tasawuf.'
      },
      {
        phase: '1694 – 1699 M • Pengasingan di Afrika Selatan & Akhir Hayat',
        title: 'Membangun Komunitas Muslim di Cape Town hingga Wafat',
        desc: 'Dipindahkan ke Tanjung Harapan (Cape Town), Afrika Selatan, dan membina komunitas Muslim di kawasan Zandvliet (Macassar) hingga wafat pada 23 Mei 1699 M.'
      }
    ],
    works: [
      { title: 'Zubdat Al-Asrar fi Tahqiq Ba’dh Masyarib Al-Akhyar', field: 'Tasawuf & Hakikat Tauhid', desc: 'Menguraikan inti ajaran tasawuf yang selaras dengan syariat menuju pengenalan kepada Allah.' },
      { title: 'Taj Al-Asrar fi Tahqiq Masyarib Al-‘Arifin', field: 'Tasawuf Sunni', desc: 'Menjelaskan kedudukan ulama dan kaum arifin serta pentingnya berpegang teguh pada Al-Qur’an dan Sunnah.' },
      { title: 'Al-Nafhah As-Sailaniyah', field: 'Risalah Tasawuf (Ditulis di Sri Lanka)', desc: 'Disusun saat masa pengasingan di Ceylon berisi nasihat spiritual dan keteguhan iman menghadapi ujian.' },
      { title: 'Mathalib As-Salikin', field: 'Etika & Jalan Penuntut Ilmu Spiritual', desc: 'Membahas syarat-syarat utama bagi seorang penempuh jalan spiritual (salik).' }
    ],
    thoughts: {
      bidangFokus: 'Menyelaraskan ajaran tasawuf filosofis dengan tasawuf Sunni berbasis syariat (Neo-Sufisme).',
      gagasanUtama: 'Tasawuf bukan sikap pasif menjauh dari realitas sosial, melainkan kekuatan batin yang melahirkan keberanian membela keadilan dan kemerdekaan umat.',
      pengaruhIslam: 'Memperkuat jaringan Tarekat Khalwatiyah di Sulawesi Selatan sekaligus meletakkan fondasi komunitas Islam di Afrika Selatan.'
    },
    contributions: [
      { icon: 'bi-shield-shaded', title: 'Perjuangan Melawan Kolonialisme', desc: 'Memimpin perlawanan bersenjata bersama Sultan Ageng Tirtayasa mempertahankan kedaulatan Banten dari VOC.' },
      { icon: 'bi-compass-fill', title: 'Pelopor Islam di Afrika Selatan', desc: 'Menjadi tokoh sentral lahirnya komunitas Muslim di Cape Town (Macassar) pada akhir abad ke-17.' },
      { icon: 'bi-diagram-3-fill', title: 'Pengembangan Tarekat Khalwatiyah', desc: 'Menyebarkan ajaran Tarekat Khalwatiyah Yusufiyah yang memadukan dzikir dengan ketaatan syariat.' },
      { icon: 'bi-feather', title: 'Warisan Manuskrip Keagamaan', desc: 'Menulis puluhan risalah keislaman dalam bahasa Arab yang menjadi rujukan kajian filologi.' },
      { icon: 'bi-award-fill', title: 'Simbol Persahabatan Lintas Bangsa', desc: 'Dianugerahi gelar Pahlawan Nasional Indonesia (1995) dan penghargaan Oliver Tambo Afrika Selatan (2009).' }
    ],
    virtues: [
      { title: 'Keteguhan Prinsip di Tengah Pengasingan', desc: 'Dibuang melintasi samudra tidak memadamkan semangat dakwahnya di setiap tempat singgah.' },
      { title: 'Keseimbangan Ilmu dan Aksi Nyata', desc: 'Piawai menulis kitab sekaligus berani hadir di garis depan membela rakyat tertindas.' },
      { title: 'Semangat Belajar Lintas Benua', desc: 'Menghabiskan dua dekade belajar dari satu pusat ilmu ke pusat ilmu lainnya.' }
    ],
    references: [
      'Azra, Azyumardi. (2004). Jaringan Ulama Timur Tengah dan Kepulauan Nusantara Abad XVII & XVIII. Jakarta: Kencana.',
      'Hamid, Abu. (1994). Syekh Yusuf Makassar: Seorang Ulama, Sufi dan Pejuang. Jakarta: Yayasan Obor Indonesia.',
      'Lubis, Nabilah. (1996). Syekh Yusuf Al-Taj Al-Makasari. Bandung: Mizan.'
    ]
  },

  {
    id: 'palimbani',
    romanNumeral: 'III',
    shortName: 'Syekh Abdus Samad Al-Palimbani',
    originBadge: 'Palembang • ±1704–1789 M',
    themeColor: '#e67e22', // Amber Sunburst
    imageFile: 'img/somad.jpeg',
    crestTitle: 'AL-PALIMBANI',
    crestSubtitle: 'ULAMA SUFI & PENULIS JAWI',
    yearsSpan: '± 1704 – 1789 M',
    hero: {
      fullName: 'Syekh Abdus Samad Al-Palimbani',
      epithet: 'Tokoh Pembaharu Tasawuf Sunni Nusantara & Ulama Jawi di Haramain',
      region: 'Kesultanan Palembang Darussalam',
      summary:
        'Ulama besar asal Palembang yang menjadi penghubung utama ajaran Imam Al-Ghazali dan Tarekat Sammaniyah ke dunia Melayu-Nusantara. Karya monumentalnya, Siyar As-Salikin, menjadi mahakarya prosa keagamaan berbahasa Melayu.'
    },
    voyageStops: [
      {
        city: 'Kesultanan Palembang Darussalam',
        era: 'Awal Abad ke-18',
        x: 730,
        y: 332,
        direction: 'Titik Awal • Sumatera Selatan',
        title: '1. Masa Kecil di Palembang & Kedah',
        summary: 'Lahir di Palembang dari ayah keturunan ulama Yaman (Syekh Abdul Jalil) dan ibu asli Palembang (Raden Ranti). Pendidikan awalnya ditempuh di Palembang dan Kedah sebelum berlayar ke Timur Tengah.',
        significance: 'Menguasai bahasa Melayu-Jawi dan Arab sejak dini sebagai bekal menulis kitab bagi umat Nusantara.',
        iconType: 'mosque'
      },
      {
        city: 'Mekkah & Madinah (Haramain)',
        era: 'Pertengahan Abad ke-18',
        x: 332,
        y: 172,
        direction: 'Berlayar ke Mekkah dan Madinah',
        title: '2. Menjadi Khalifah Tarekat Sammaniyah di Madinah',
        summary: 'Di Madinah beliau berguru kepada Syekh Muhammad bin Abdul Karim As-Samman dan diangkat menjadi khalifah Tarekat Sammaniyah, sekaligus belajar kepada Syekh Ibrahim Ar-Rais dan Syekh Abdul Mun’im Ad-Damanhuri.',
        significance: 'Membawa pembaruan tasawuf Sunni yang terikat kuat pada syariat untuk disebarkan ke Nusantara.',
        iconType: 'ship'
      },
      {
        city: 'Mekkah & Ta’if (Pusat Kepenulisan Jawi)',
        era: '1764 – 1788 M',
        x: 344,
        y: 192,
        direction: 'Menyusun Mahakarya Melayu-Jawi di Hijaz',
        title: '3. Melahirkan Hidayat As-Salikin & Siyar As-Salikin',
        summary: 'Dari Mekkah dan Ta’if, beliau menulis Hidayat As-Salikin (1778 M) dan Siyar As-Salikin (4 jilid, 1779–1788 M) dalam aksara Melayu-Jawi agar ajaran Imam Al-Ghazali mudah dipelajari masyarakat Nusantara.',
        significance: 'Karyanya dicetak di Kairo, Mekkah, Bombay, hingga Singapura dan menyebar luas ke Palembang dan seluruh Nusantara.',
        iconType: 'book'
      }
    ],
    profile: {
      namaLengkap: 'Abdus Samad bin Abdullah Al-Jawi Al-Palimbani',
      lahir: 'Palembang, Sumatera Selatan — diperkirakan sekitar 1116 H / 1704 M (sebagian sumber mencatat ±1736 M)',
      wafat: 'Diperkirakan wafat sekitar 1203 H / 1789 M (tahun wafat belum terkonfirmasi tunggal dalam sumber primer)',
      asalDaerah: 'Kesultanan Palembang Darussalam, Sumatera Selatan',
      bidangKeilmuan: 'Tasawuf Sunni (Al-Ghazali & Tarekat Sammaniyah), Ilmu Kalam, Sastra Kitab Melayu-Jawi',
      julukan: 'Ulama Jawi Utama Abad ke-18, Pengembang Tarekat Sammaniyah di Nusantara'
    },
    timeline: [
      {
        phase: 'Awal Abad ke-18 • Masa Kecil di Palembang & Kedah',
        title: 'Pendidikan Dasar Agama di Lingkungan Kesultanan',
        desc: 'Lahir di Palembang dari ayah keturunan ulama Yaman dan ibu asli Palembang. Pendidikan awalnya ditempuh di Palembang dan Kedah sebelum berangkat ke Timur Tengah.'
      },
      {
        phase: 'Pertengahan Abad ke-18 • Studi di Mekkah dan Madinah',
        title: 'Berguru kepada Syekh Muhammad As-Samman Al-Madani',
        desc: 'Di Madinah beliau belajar kepada Syekh Muhammad bin Abdul Karim As-Samman yang mengangkatnya menjadi khalifah Tarekat Sammaniyah.'
      },
      {
        phase: '1760 – 1780-an • Karya Monumental Bahasa Melayu-Jawi',
        title: 'Menyusun Hidayat As-Salikin dan Siyar As-Salikin',
        desc: 'Menulis Hidayat As-Salikin (1778 M) dan Siyar As-Salikin (1779–1788 M) dalam aksara Jawi yang mengadaptasi sekaligus memperkaya karya Imam Al-Ghazali.'
      },
      {
        phase: 'Akhir Abad ke-18 • Jaringan Intelektual & Kepedulian Sosial',
        title: 'Menjalin Komunikasi dengan Penguasa dan Ulama Nusantara',
        desc: 'Aktif berkirim surat kepada para sultan di Jawa dan Sumatera untuk mendorong penegakan keadilan dan kewaspadaan terhadap kolonialisme.'
      }
    ],
    works: [
      { title: 'Siyar As-Salikin ila Ibadat Rabb Al-‘Alamin (4 Jilid)', field: 'Tasawuf & Etika Islam (Bahasa Melayu-Jawi)', desc: 'Karya terbesarnya yang mengadaptasi dan memperluas kitab Lubab Ihya ‘Ulumuddin karya Imam Al-Ghazali.' },
      { title: 'Hidayat As-Salikin fi Suluk Maslak Al-Muttaqin', field: 'Tasawuf Dasar & Ibadah', desc: 'Adaptasi kitab Bidayat Al-Hidayah karya Imam Al-Ghazali memandu adab keseharian seorang Muslim.' },
      { title: 'Zahrat Al-Murid fi Bayan Kalimat At-Tauhid', field: 'Ilmu Tauhid & Logika', desc: 'Risalah ringkas yang ditulis di Mekkah pada 1764 M mengenai makna kalimat tauhid.' },
      { title: 'Nasihat Al-Muslimin wa Tadzkirat Al-Mu’minin', field: 'Etika Sosial & Perjuangan Umat', desc: 'Karya berbahasa Arab yang menyerukan persatuan umat Islam mempertahankan negeri dari agresi kolonial.' }
    ],
    thoughts: {
      bidangFokus: 'Memasyarakatkan ajaran tasawuf Imam Al-Ghazali dan Tarekat Sammaniyah ke dalam bahasa Melayu-Jawi.',
      gagasanUtama: 'Mengklasifikasikan tingkat pembelajaran tasawuf secara bertahap (pemula, menengah, dan lanjut) agar mudah dicerna umat.',
      pengaruhIslam: 'Menjadikan Palembang sebagai salah satu pusat intelektual Islam terpenting di Sumatera pada abad ke-18.'
    },
    contributions: [
      { icon: 'bi-translate', title: 'Pengayaan Khazanah Bahasa Melayu-Jawi', desc: 'Memperkaya kosakata ilmiah bahasa Melayu melalui penulisan kitab-kitab tebal berstandar tinggi.' },
      { icon: 'bi-stars', title: 'Penyebaran Tarekat Sammaniyah', desc: 'Memperkenalkan Tarekat Sammaniyah ke Palembang dan wilayah Nusantara lainnya.' },
      { icon: 'bi-journal-text', title: 'Jembatan Pemikiran Al-Ghazali', desc: 'Membawa pemikiran Imam Al-Ghazali ke tengah masyarakat Asia Tenggara melalui Siyar As-Salikin.' },
      { icon: 'bi-megaphone-fill', title: 'Kesadaran Solidaritas Umat', desc: 'Membangun komunikasi lintas kerajaan di Nusantara memperkuat solidaritas moral menghadapi kolonial.' },
      { icon: 'bi-mortarboard-fill', title: 'Rujukan Pendidikan Islam Klasik', desc: 'Kitab-kitabnya dicetak berulang kali di Mekkah, Kairo, Bombay, Singapura, hingga Surabaya.' }
    ],
    virtues: [
      { title: 'Kepedulian terhadap Akses Ilmu bagi Masyarakat', desc: 'Memilih menulis karya besarnya dalam bahasa Melayu agar masyarakat awam bisa memahami ajaran agama.' },
      { title: 'Kecintaan pada Tanah Air dari Kejauhan', desc: 'Menetap lama di Tanah Suci tidak membuatnya lupa mengirimkan karya dan nasihat untuk Nusantara.' },
      { title: 'Sistematis dan Terstruktur dalam Mengajar', desc: 'Menyusun materi pembelajaran agama secara bertingkat sesuai kemampuan pembaca.' }
    ],
    references: [
      'Azra, Azyumardi. (2004). Jaringan Ulama Timur Tengah dan Kepulauan Nusantara Abad XVII & XVIII. Jakarta: Kencana.',
      'Quzwain, M. Chatib. (1985). Mengenal Allah: Ajaran Tasawuf Syaikh ‘Abdus-Samad Al-Palimbani. Jakarta: Bulan Bintang.',
      'Drewes, G.W.J. (1977). Directions for Travellers on the Mystic Path. The Hague: Martinus Nijhoff.'
    ]
  },

  {
    id: 'singkili',
    romanNumeral: 'IV',
    shortName: 'Syekh Abdurrauf As-Singkili',
    originBadge: 'Aceh • ±1615–1693 M',
    themeColor: '#1565c0', // Royal Sapphire
    imageFile: 'img/images.jpeg',
    crestTitle: 'AS-SINGKILI',
    crestSubtitle: 'TEUNGKU SYIAH KUALA',
    yearsSpan: '± 1615 – 1693 M',
    hero: {
      fullName: 'Syekh Abdurrauf As-Singkili',
      epithet: 'Teungku Syiah Kuala • Penulis Tafsir Lengkap Pertama Berbahasa Melayu',
      region: 'Singkil, Kesultanan Aceh Darussalam',
      summary:
        'Mufti besar Kesultanan Aceh Darussalam yang berjasa menyusun tafsir Al-Qur’an 30 juz pertama dalam bahasa Melayu (Tarjuman Al-Mustafid) serta meredam konflik pemikiran keagamaan di Aceh melalui pendekatan moderat dan bijaksana.'
    },
    voyageStops: [
      {
        city: 'Singkil & Banda Aceh',
        era: '± 1615 – 1642 M',
        x: 665,
        y: 265,
        direction: 'Titik Awal • Kesultanan Aceh Darussalam',
        title: '1. Belajar di Dayah Simpang Kanan & Banda Aceh',
        summary: 'Lahir di Singkil, Aceh, dan menerima pendidikan awal dari ayahnya Syekh Ali Al-Fansuri sebelum menuntut ilmu di ibu kota Kesultanan Aceh Darussalam.',
        significance: 'Tumbuh di pusat peradaban Islam ujung barat Nusantara yang dikenal sebagai Serambi Mekkah.',
        iconType: 'mosque'
      },
      {
        city: 'Yaman (Zabid & Mokha)',
        era: '1642 – 1650-an',
        x: 365,
        y: 235,
        direction: 'Berlayar ke Pesisir Yaman & Teluk Arab',
        title: '2. Menuntut Ilmu Hadits & Fiqih di Yaman',
        summary: 'Mengawali pengembaraan 19 tahun di Timur Tengah dengan belajar di Doha lalu menetap lama di kota-kota ilmu di Yaman seperti Zabid dan Mokha.',
        significance: 'Menguasai sanad ilmu hadits dan fiqih Mazhab Syafi’i dari para ulama terkemuka Yaman.',
        iconType: 'ship'
      },
      {
        city: 'Mekkah & Madinah (Haramain)',
        era: '1650-an – 1661 M',
        x: 328,
        y: 168,
        direction: 'Berguru kepada Ulama Besar Madinah',
        title: '3. Berguru kepada Syekh Ahmad Al-Qusyasyi & Ibrahim Al-Kurani',
        summary: 'Di Madinah beliau belajar kepada dua mahaguru besar Haramain yang memberinya otoritas keilmuan serta khalifah Tarekat Syattariyah sebelum pulang ke Nusantara.',
        significance: 'Menjadi mata rantai utama penyebaran Tarekat Syattariyah yang moderat di Asia Tenggara.',
        iconType: 'book'
      },
      {
        city: 'Kuala Aceh, Banda Aceh',
        era: '1661 – 1693 M',
        x: 660,
        y: 256,
        direction: 'Kembali ke Aceh & Menjabat Mufti Kerajaan',
        title: '4. Qadhi Malik Al-Adil & Penulis Tarjuman Al-Mustafid',
        summary: 'Kembali ke Aceh pada 1661 M, diangkat sebagai Mufti Kerajaan (Qadhi Malik Al-Adil), menyusun tafsir 30 juz pertama berbahasa Melayu (Tarjuman Al-Mustafid), dan dimakamkan di Kuala Aceh.',
        significance: 'Namanya diabadikan menjadi Universitas Syiah Kuala (USK) di Aceh.',
        iconType: 'scroll'
      }
    ],
    profile: {
      namaLengkap: 'Aminuddin Abdurrauf bin Ali Al-Jawi Al-Fansuri As-Singkili',
      lahir: 'Singkil, Aceh — diperkirakan sekitar 1024 H / 1615 M',
      wafat: 'Kuala Aceh, Banda Aceh — diperkirakan sekitar 1105 H / 1693 M',
      asalDaerah: 'Singkil, Kesultanan Aceh Darussalam',
      bidangKeilmuan: 'Tafsir Al-Qur’an, Fiqih Mazhab Syafi’i, Tasawuf (Tarekat Syattariyah), Hadits',
      julukan: 'Teungku Syiah Kuala (Ulama Besar di Kuala Aceh), Qadhi Malik Al-Adil'
    },
    timeline: [
      {
        phase: '± 1615 – 1642 M • Pendidikan Awal di Singkil dan Banda Aceh',
        title: 'Belajar Dasar Agama di Kesultanan Aceh',
        desc: 'Lahir di Singkil dan menerima pendidikan awal dari ayahnya, Syekh Ali Al-Fansuri, sebelum belajar di Banda Aceh.'
      },
      {
        phase: '1642 – 1661 M • 19 Tahun Menuntut Ilmu di Timur Tengah',
        title: 'Menjelajahi Pusat Keilmuan Yaman, Mekkah, dan Madinah',
        desc: 'Belajar selama 19 tahun di Doha, Yaman (Zabid dan Mokha), Jeddah, Mekkah, dan Madinah kepada Syekh Ahmad Al-Qusyasyi dan Syekh Ibrahim Al-Kurani.'
      },
      {
        phase: '1661 M • Kembali ke Aceh & Diangkat Menjadi Mufti',
        title: 'Menjabat Qadhi Malik Al-Adil di Kesultanan Aceh',
        desc: 'Dipercaya menjadi Mufti Kerajaan dan mendampingi empat sultanah berturut-turut dalam urusan hukum dan pemerintahan.'
      },
      {
        phase: '1661 – 1690-an • Rekonsiliasi Intelektual & Karya Monumental',
        title: 'Menulis Tarjuman Al-Mustafid dan Mir’at Ath-Thullab',
        desc: 'Memulihkan keharmonisan umat setelah polemik paham Wujudiyah dan melahirkan karya perintis tafsir serta fiqih berbahasa Melayu.'
      },
      {
        phase: '± 1693 M • Akhir Hayat di Kuala Aceh',
        title: 'Wafat dan Dikenang sebagai Teungku Syiah Kuala',
        desc: 'Wafat sekitar tahun 1693 M dan dimakamkan di Kuala Krueng Aceh, Banda Aceh.'
      }
    ],
    works: [
      { title: 'Tarjuman Al-Mustafid', field: 'Tafsir Al-Qur’an Lengkap 30 Juz (Bahasa Melayu)', desc: 'Tafsir lengkap seluruh Al-Qur’an pertama dalam bahasa Melayu-Jawi yang menjadi rujukan utama di Nusantara.' },
      { title: 'Mir’at Ath-Thullab fi Tashil Ma’rifat Al-Ahkam Asy-Syar’iyyah', field: 'Fiqih Muamalah & Hukum Perdata Islam', desc: 'Kitab fiqih berbahasa Melayu pertama mengenai hukum transaksi ekonomi dan peradilan atas permintaan Sultanah Safiatuddin.' },
      { title: 'Umdat Al-Muhtajin ila Suluk Maslak Al-Mufridin', field: 'Tasawuf & Tarekat Syattariyah', desc: 'Membahas tata cara dzikir, adab murid dan guru, serta silsilah keilmuan beliau selama di Timur Tengah.' },
      { title: 'Mawa’izh Al-Badi’ah', field: 'Hadits Qudsi & Etika Moral', desc: 'Kumpulan hadits qudsi dan nasihat akhlak yang diterjemahkan ke dalam bahasa Melayu.' }
    ],
    thoughts: {
      bidangFokus: 'Integrasi syariat dan tasawuf secara moderat serta pengembangan literatur tafsir dan hukum dalam bahasa Melayu.',
      gagasanUtama: 'Menolak sikap ekstrem dalam menyikapi perbedaan penafsiran tasawuf dan mengutamakan persatuan umat.',
      pengaruhIslam: 'Melalui muridnya seperti Syekh Burhanuddin Ulakan dan Syekh Abdul Muhyi Pamijahan, ajarannya tersebar ke Minangkabau dan Jawa Barat.'
    },
    contributions: [
      { icon: 'bi-book-fill', title: 'Perintis Tafsir Al-Qur’an Nusantara', desc: 'Menyusun Tarjuman Al-Mustafid yang membuka akses pemahaman Al-Qur’an bagi masyarakat berbahasa Melayu.' },
      { icon: 'bi-bank2', title: 'Reformasi Hukum & Fiqih Muamalah', desc: 'Menyediakan pedoman hukum Islam praktis bagi para hakim di Kesultanan Aceh.' },
      { icon: 'bi-peace-fill', title: 'Pendamai Polemik Keagamaan', desc: 'Meredakan ketegangan intelektual di Aceh dengan sikap arif dan berorientasi persatuan.' },
      { icon: 'bi-signpost-split-fill', title: 'Jaringan Murid Lintas Pulau', desc: 'Melahirkan ulama-ulama besar di Sumatera Barat dan Pulau Jawa.' },
      { icon: 'bi-building-check', title: 'Warisan Institusi Pendidikan', desc: 'Namanya diabadikan menjadi nama Universitas Syiah Kuala (USK) di Aceh.' }
    ],
    virtues: [
      { title: 'Kebijaksanaan dan Sikap Moderat', desc: 'Memilih jalan dialog dan edukasi daripada perpecahan saat menghadapi perbedaan pendapat.' },
      { title: 'Kesabaran Panjang dalam Menuntut Ilmu', desc: 'Tekun belajar selama 19 tahun di Timur Tengah membangun fondasi keilmuan yang kokoh.' },
      { title: 'Dedikasi pada Kemaslahatan Publik', desc: 'Menggunakan posisi mufti untuk menyusun pedoman hukum dan tafsir bagi masyarakat luas.' }
    ],
    references: [
      'Azra, Azyumardi. (2004). Jaringan Ulama Timur Tengah dan Kepulauan Nusantara Abad XVII & XVIII. Jakarta: Kencana.',
      'Riddell, Peter G. (2001). Islam and the Malay-Indonesian World. Honolulu: University of Hawai’i Press.',
      'Fathurahman, Oman. (2008). Tarekat Syattariyah di Minangkabau. Jakarta: Prenada Media.'
    ]
  },

  {
    id: 'khatib',
    romanNumeral: 'V',
    shortName: 'Syekh Ahmad Khatib Al-Minangkabawi',
    originBadge: 'Agam • 1860–1916 M',
    themeColor: '#6f42c1', // Royal Amethyst
    imageFile: 'img/ahmad.jpeg',
    crestTitle: 'AL-MINANGKABAWI',
    crestSubtitle: 'IMAM & KHATIB MASJIDIL HARAM',
    yearsSpan: '1860 – 1916 M',
    hero: {
      fullName: 'Syekh Ahmad Khatib Al-Minangkabawi',
      epithet: 'Imam & Khatib Mazhab Syafi’i Masjidil Haram • Guru Para Tokoh Pembaru Indonesia',
      region: 'Koto Tuo, Agam, Minangkabau (Sumatera Barat)',
      summary:
        'Putra Minangkabau pertama yang dipercaya menjabat sebagai Imam dan Khatib Mazhab Syafi’i di Masjidil Haram, Mekkah. Selain menguasai fiqih, beliau juga pakar ilmu falak (astronomi) dan hisab (matematika), serta mendidik tokoh-tokoh pelopor organisasi Islam modern Indonesia.'
    },
    voyageStops: [
      {
        city: 'Koto Tuo, Agam & Bukittinggi',
        era: '1860 – 1871 M',
        x: 695,
        y: 305,
        direction: 'Titik Awal • Ranah Minangkabau, Sumatera Barat',
        title: '1. Memadukan Pendidikan Surau & Sekolah Raja Bukittinggi',
        summary: 'Lahir di Koto Tuo, Ampek Angkek, Agam. Selain mengaji di surau, beliau bersekolah di Kweekschool (Sekolah Raja) Bukittinggi sehingga menguasai matematika (ilmu hitung) sejak usia belia.',
        significance: 'Perpaduan ilmu agama dan ilmu hitung menjadi ciri khas keahliannya di bidang waris dan falak.',
        iconType: 'compass'
      },
      {
        city: 'Mekkah (Menuntut Ilmu di Haramain)',
        era: '1871 – 1880-an',
        x: 335,
        y: 180,
        direction: 'Berlayar ke Mekkah pada Usia 11 Tahun',
        title: '2. Mendalami Fiqih, Ushul Fiqih, & Falak di Mekkah',
        summary: 'Diajak ayahandanya ke Mekkah pada 1871 M dan berguru kepada Syekh Sayyid Bakri Syatha (pengarang I’anat Ath-Thalibin), Syekh Ahmad Zaini Dahlan, dan Syekh Yahya Al-Kabli.',
        significance: 'Menguasai kitab-kitab induk Mazhab Syafi’i sekaligus astronomi Islam.',
        iconType: 'ship'
      },
      {
        city: 'Masjidil Haram, Mekkah',
        era: 'Akhir Abad ke-19 – 1916 M',
        x: 326,
        y: 172,
        direction: 'Diangkat menjadi Imam & Khatib Masjidil Haram',
        title: '3. Imam Mazhab Syafi’i & Mahaguru Tokoh Indonesia',
        summary: 'Diangkat menjadi Imam dan Khatib Mazhab Syafi’i di Masjidil Haram. Dari halaqahnya lahir pendiri Muhammadiyah (KH. Ahmad Dahlan), NU (KH. Hasyim Asy’ari), dan PERTI (Syekh Sulaiman Ar-Rasuli).',
        significance: 'Menjadi titik temu intelektual kebangkitan Islam modern dan pesantren di Indonesia.',
        iconType: 'book'
      }
    ],
    profile: {
      namaLengkap: 'Ahmad Khatib bin Abdul Lathif Al-Minangkabawi',
      lahir: 'Koto Tuo, Balai Gurah, Ampek Angkek, Agam, Sumatera Barat — 6 Zulhijjah 1276 H / 26 Juni 1860 M',
      wafat: 'Mekkah, Hijaz — 9 Jumadil Awal 1334 H / 13 Maret 1916 M',
      asalDaerah: 'Kabupaten Agam, Sumatera Barat',
      bidangKeilmuan: 'Fiqih Mazhab Syafi’i, Ushul Fiqih, Ilmu Faraidh (Hukum Waris), Ilmu Falak (Astronomi), Ilmu Hisab (Matematika)',
      julukan: 'Imam & Khatib Masjidil Haram, Mahaguru Ulama Kaum Muda dan Kaum Tua Minangkabau'
    },
    timeline: [
      {
        phase: '1860 – 1871 M • Pendidikan Agama dan Sekolah Umum di Bukittinggi',
        title: 'Memadukan Tradisi Surau dan Ilmu Hitung Modern',
        desc: 'Lahir di Koto Tuo, Agam. Selain mengaji di surau, beliau bersekolah di Sekolah Raja (Kweekschool) di Bukittinggi tempat ia menguasai ilmu hitung.'
      },
      {
        phase: '1871 M • Berangkat ke Mekkah',
        title: 'Menetap dan Memperdalam Ilmu di Tanah Suci',
        desc: 'Pada usia sekitar 11 tahun berangkat ke Mekkah dan berguru kepada Syekh Sayyid Bakri Syatha, Syekh Ahmad Zaini Dahlan, dan Syekh Yahya Al-Kabli.'
      },
      {
        phase: 'Akhir Abad ke-19 • Diangkat Menjadi Imam & Khatib Masjidil Haram',
        title: 'Meraih Kehormatan Tertinggi di Pusat Dunia Islam',
        desc: 'Syarif Mekkah mengangkat beliau menjadi Imam dan Khatib resmi untuk Mazhab Syafi’i di Masjidil Haram.'
      },
      {
        phase: '1890 – 1916 M • Membina Generasi Pelopor Pergerakan Indonesia',
        title: 'Mengajar Murid-Murid yang Kelak Mengubah Wajah Nusantara',
        desc: 'Mendidik KH. Ahmad Dahlan, KH. Hasyim Asy’ari, Syekh Abdul Karim Amrullah, Syekh Muhammad Jamil Jambek, dan Syekh Sulaiman Ar-Rasuli.'
      },
      {
        phase: '13 Maret 1916 M • Akhir Hayat di Mekkah',
        title: 'Wafat di Mekkah dengan Warisan Keilmuan Lintas Disiplin',
        desc: 'Wafat di Mekkah pada 13 Maret 1916 M meninggalkan karya penting di bidang ushul fiqih, waris, serta astronomi Islam.'
      }
    ],
    works: [
      { title: 'Hasyiyah An-Nafahat ‘ala Syarh Al-Waraqat', field: 'Ushul Fiqih (Metodologi Hukum Islam)', desc: 'Komentar mendalam atas kitab Al-Waraqat karya Imam Al-Haramain Al-Juwaini.' },
      { title: 'Al-Jawahir An-Naqiyyah fi Al-A’mal Al-Jaibiyyah', field: 'Ilmu Falak (Astronomi Islam)', desc: 'Perhitungan astronomi menggunakan instrumen klasik Rubu’ Mujayyab untuk menentukan arah kiblat dan waktu shalat.' },
      { title: 'Raudhat Al-Hussab fi ‘Ilm Al-Hisab', field: 'Ilmu Hisab (Matematika)', desc: 'Buku ajar matematika berbahasa Arab untuk membantu perhitungan pembagian harta waris (faraidh) secara presisi.' },
      { title: 'Ad-Da’i Al-Masmu’ fi Ar-Radd ‘ala Man Yuwarrits Al-Ikhwah', field: 'Ilmu Faraidh (Hukum Waris Islam)', desc: 'Kajian hukum waris Islam yang meluruskan pembagian harta agar sesuai ketentuan Al-Qur’an.' }
    ],
    thoughts: {
      bidangFokus: 'Penguatan metodologi hukum Islam (Ushul Fiqih), hukum waris (Faraidh), serta pemanfaatan matematika dan astronomi dalam ibadah.',
      gagasanUtama: 'Mendorong umat agar tidak taklid buta dan menguasai ilmu pengetahuan eksakta (hisab dan falak).',
      pengaruhIslam: 'Menjadi titik temu intelektual bagi lahirnya gerakan pembaruan Islam maupun penguatan pesantren di Indonesia.'
    },
    contributions: [
      { icon: 'bi-star-fill', title: 'Imam Besar di Masjidil Haram', desc: 'Mengharumkan nama Nusantara dengan menjabat Imam dan Khatib Mazhab Syafi’i di Masjidil Haram.' },
      { icon: 'bi-calculator-fill', title: 'Integrasi Ilmu Agama & Sains Eksakta', desc: 'Menulis kitab matematika (hisab) dan astronomi (falak) yang memadukan syariat dan sains.' },
      { icon: 'bi-people-fill', title: 'Guru Para Pendiri Ormas Islam', desc: 'Mendidik pendiri Muhammadiyah, Nahdlatul Ulama, dan Persatuan Tarbiyah Islamiyah.' },
      { icon: 'bi-compass', title: 'Pelurus Arah Kiblat Masjid', desc: 'Memberikan panduan ilmiah berbasis ilmu falak untuk ketepatan arah kiblat.' },
      { icon: 'bi-lightbulb-fill', title: 'Pemicu Kebangkitan Literasi', desc: 'Mendorong murid-muridnya mendirikan sekolah modern (Sumatera Thawalib) dan majalah keislaman.' }
    ],
    virtues: [
      { title: 'Keterbukaan terhadap Ilmu Pengetahuan Umum', desc: 'Memadukan kitab kuning dengan matematika dan astronomi untuk memecahkan persoalan umat.' },
      { title: 'Menghargai Kebebasan Berpikir Murid', desc: 'Tetap membimbing murid-muridnya yang kelak memiliki corak pemikiran berbeda dengan penuh kasih sayang.' },
      { title: 'Integritas dan Keberanian Menyampaikan Kebenaran', desc: 'Tegas menyuarakan prinsip syariat melalui argumentasi ilmiah yang santun.' }
    ],
    references: [
      'Noer, Deliar. (1973). The Modernist Muslim Movement in Indonesia 1900–1942. Kuala Lumpur: Oxford University Press.',
      'Steenbrink, Karel A. (1984). Beberapa Aspek Tentang Islam di Indonesia Abad ke-19. Jakarta: Bulan Bintang.',
      'Hamka. (1982). Ayahku. Jakarta: Umminda.'
    ]
  }
];

// ==========================================================================
// 2. BANK 20 SOAL KUIS (BERDASARKAN MATERI BIOGRAFI DI ATAS)
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    scholar: 'Syekh Nawawi Al-Bantani',
    question: 'Apa julukan kehormatan masyhur yang disematkan kepada Syekh Nawawi Al-Bantani karena kepemimpinan keilmuannya di Tanah Suci?',
    options: ['Tuanta Salamaka ri Gowa', 'Sayyid Ulama Al-Hijaz', 'Teungku Syiah Kuala', 'Qadhi Malik Al-Adil'],
    answerIndex: 1,
    explanation: 'Syekh Nawawi Al-Bantani dijuluki Sayyid Ulama Al-Hijaz (Pemimpin Para Ulama Hijaz) serta Bapak Kitab Kuning Indonesia.'
  },
  {
    scholar: 'Syekh Nawawi Al-Bantani',
    question: 'Kitab tafsir Al-Qur’an lengkap 30 juz berbahasa Arab karya Syekh Nawawi Al-Bantani yang terdiri atas dua jilid adalah...',
    options: ['Tarjuman Al-Mustafid', 'Siyar As-Salikin', 'Tafsir Al-Munir li Ma’alim At-Tanzil (Marah Labid)', 'Mir’at Ath-Thullab'],
    answerIndex: 2,
    explanation: 'Tafsir Al-Munir li Ma’alim At-Tanzil (Marah Labid) merupakan tafsir lengkap 30 juz berbahasa Arab karya Syekh Nawawi Al-Bantani.'
  },
  {
    scholar: 'Syekh Nawawi Al-Bantani',
    question: 'Karya fiqih dasar karya Syekh Nawawi Al-Bantani yang merupakan penjelasan (syarah) atas kitab Safinat An-Najah adalah...',
    options: ['Kasyifat As-Saja', 'Uqud Al-Lujain', 'Tijan Ad-Darari', 'Hidayat As-Salikin'],
    answerIndex: 0,
    explanation: 'Kasyifat As-Saja fi Syarh Safinat An-Najah adalah syarah atas kitab Safinat An-Najah yang menjadi rujukan wajib fiqih dasar di pesantren.'
  },
  {
    scholar: 'Syekh Nawawi Al-Bantani',
    question: 'Di pemakaman manakah Syekh Nawawi Al-Bantani dimakamkan setelah wafat pada tahun 1897 M?',
    options: ['Pemakaman Baqi, Madinah', 'Jannatul Ma’la, Mekkah', 'Kuala Krueng Aceh, Banda Aceh', 'Zandvliet (Macassar), Cape Town'],
    answerIndex: 1,
    explanation: 'Syekh Nawawi Al-Bantani wafat di Mekkah pada 25 Syawal 1314 H (1897 M) dan dimakamkan di Jannatul Ma’la, Mekkah.'
  },
  {
    scholar: 'Syekh Yusuf Al-Makassari',
    question: 'Gelar kehormatan dari masyarakat Gowa untuk Syekh Yusuf Al-Makassari yang bermakna "Guru Kami yang Membawa Keselamatan" adalah...',
    options: ['Tuanta Salamaka ri Gowa', 'Sayyid Ulama Al-Hijaz', 'Teungku Syiah Kuala', 'Al-Imam Al-Muhaqqiq'],
    answerIndex: 0,
    explanation: 'Masyarakat Sulawesi Selatan menghormati Syekh Yusuf Al-Makassari dengan gelar Tuanta Salamaka ri Gowa.'
  },
  {
    scholar: 'Syekh Yusuf Al-Makassari',
    question: 'Ke dua wilayah manakah Syekh Yusuf Al-Makassari diasingkan oleh VOC setelah memimpin perlawanan gerilya bersama Sultan Ageng Tirtayasa?',
    options: ['Mesir dan Yaman', 'Sri Lanka (Ceylon) dan Cape Town (Afrika Selatan)', 'Singapura dan Malaka', 'Damaskus dan Madinah'],
    answerIndex: 1,
    explanation: 'VOC mengasingkan Syekh Yusuf ke Sri Lanka pada 1684, lalu memindahkannya pada 1694 ke Tanjung Harapan (Cape Town), Afrika Selatan.'
  },
  {
    scholar: 'Syekh Yusuf Al-Makassari',
    question: 'Risalah tasawuf yang ditulis Syekh Yusuf Al-Makassari selama menjalani masa pengasingan di Sri Lanka adalah...',
    options: ['Al-Nafhah As-Sailaniyah', 'Zahrat Al-Murid', 'Mawa’izh Al-Badi’ah', 'Raudhat Al-Hussab'],
    answerIndex: 0,
    explanation: 'Al-Nafhah As-Sailaniyah disusun Syekh Yusuf saat masa pengasingannya di Ceylon (Sri Lanka) atas permintaan sahabat-sahabatnya.'
  },
  {
    scholar: 'Syekh Yusuf Al-Makassari',
    question: 'Tarekat apa yang ijazahnya diterima langsung oleh Syekh Yusuf Al-Makassari dari Syekh Ayyub Al-Khalwati saat belajar di Damaskus?',
    options: ['Tarekat Sammaniyah', 'Tarekat Syattariyah', 'Tarekat Khalwatiyah', 'Tarekat Naqsyabandiyah'],
    answerIndex: 2,
    explanation: 'Di Damaskus, Syekh Yusuf berguru kepada Syekh Ayyub Al-Khalwati dan menerima ijazah Tarekat Khalwatiyah.'
  },
  {
    scholar: 'Syekh Abdus Samad Al-Palimbani',
    question: 'Karya monumental Syekh Abdus Samad Al-Palimbani dalam 4 jilid berbahasa Melayu-Jawi yang mengadaptasi Lubab Ihya ‘Ulumuddin karya Imam Al-Ghazali adalah...',
    options: ['Siyar As-Salikin ila Ibadat Rabb Al-‘Alamin', 'Tarjuman Al-Mustafid', 'Nihayat Az-Zain', 'Zubdat Al-Asrar'],
    answerIndex: 0,
    explanation: 'Siyar As-Salikin (4 jilid) mengadaptasi dan memperluas kitab Lubab Ihya ‘Ulumuddin karya Imam Al-Ghazali ke dalam bahasa Melayu-Jawi.'
  },
  {
    scholar: 'Syekh Abdus Samad Al-Palimbani',
    question: 'Syekh Abdus Samad Al-Palimbani diangkat menjadi khalifah Tarekat Sammaniyah setelah berguru di Madinah kepada...',
    options: ['Syekh Ahmad Zaini Dahlan', 'Syekh Muhammad bin Abdul Karim As-Samman', 'Syekh Ibrahim Al-Kurani', 'Syekh Sayyid Bakri Syatha'],
    answerIndex: 1,
    explanation: 'Di Madinah beliau berguru kepada Syekh Muhammad bin Abdul Karim As-Samman dan diangkat menjadi khalifah Tarekat Sammaniyah.'
  },
  {
    scholar: 'Syekh Abdus Samad Al-Palimbani',
    question: 'Kitab berbahasa Melayu karya Syekh Abdus Samad Al-Palimbani yang mengadaptasi Bidayat Al-Hidayah untuk memandu adab ibadah keseharian adalah...',
    options: ['Hidayat As-Salikin fi Suluk Maslak Al-Muttaqin', 'Umdat Al-Muhtajin', 'Mathalib As-Salikin', 'Nur Az-Zalam'],
    answerIndex: 0,
    explanation: 'Hidayat As-Salikin merupakan adaptasi kitab Bidayat Al-Hidayah karya Imam Al-Ghazali dalam aksara Melayu-Jawi.'
  },
  {
    scholar: 'Syekh Abdus Samad Al-Palimbani',
    question: 'Karya berbahasa Arab Syekh Abdus Samad Al-Palimbani yang berisi seruan persatuan umat Islam dan kewajiban mempertahankan negeri dari agresi kolonial adalah...',
    options: ['Nasihat Al-Muslimin wa Tadzkirat Al-Mu’minin', 'Taj Al-Asrar', 'Al-Jawahir An-Naqiyyah', 'Hasyiyah An-Nafahat'],
    answerIndex: 0,
    explanation: 'Nasihat Al-Muslimin wa Tadzkirat Al-Mu’minin menyerukan solidaritas umat Islam menghadapi ancaman kolonialisme.'
  },
  {
    scholar: 'Syekh Abdurrauf As-Singkili',
    question: 'Apa nama kitab tafsir Al-Qur’an lengkap 30 juz pertama dalam bahasa Melayu-Jawi yang disusun oleh Syekh Abdurrauf As-Singkili?',
    options: ['Tarjuman Al-Mustafid', 'Tafsir Al-Munir', 'Siyar As-Salikin', 'Zahrat Al-Murid'],
    answerIndex: 0,
    explanation: 'Tarjuman Al-Mustafid merupakan tafsir lengkap seluruh Al-Qur’an pertama dalam bahasa Melayu-Jawi.'
  },
  {
    scholar: 'Syekh Abdurrauf As-Singkili',
    question: 'Jabatan tinggi apa yang diemban Syekh Abdurrauf As-Singkili di Kesultanan Aceh Darussalam pada masa pemerintahan Sultanah Safiatuddin?',
    options: ['Imam Masjidil Haram', 'Mufti Kerajaan (Qadhi Malik Al-Adil)', 'Panglima Perang Kesultanan Banten', 'Syarif Mekkah'],
    answerIndex: 1,
    explanation: 'Syekh Abdurrauf As-Singkili dipercaya menjabat sebagai Mufti Kerajaan Aceh dengan gelar Qadhi Malik Al-Adil.'
  },
  {
    scholar: 'Syekh Abdurrauf As-Singkili',
    question: 'Kitab fiqih muamalah dan hukum peradilan berbahasa Melayu pertama yang ditulis Syekh Abdurrauf As-Singkili atas permintaan Sultanah Safiatuddin adalah...',
    options: ['Mir’at Ath-Thullab fi Tashil Ma’rifat Al-Ahkam Asy-Syar’iyyah', 'Kasyifat As-Saja', 'Ad-Da’i Al-Masmu’', 'Uqud Al-Lujain'],
    answerIndex: 0,
    explanation: 'Mir’at Ath-Thullab disusun sebagai pedoman hukum muamalah dan peradilan berbahasa Melayu bagi para hakim (qadhi).'
  },
  {
    scholar: 'Syekh Abdurrauf As-Singkili',
    question: 'Berapa lama Syekh Abdurrauf As-Singkili menuntut ilmu di Timur Tengah (Yaman, Mekkah, dan Madinah) sebelum kembali mengabdi di Aceh?',
    options: ['Sekitar 5 tahun', 'Sekitar 10 tahun', 'Sekitar 19 tahun (1642 – 1661 M)', 'Sekitar 30 tahun'],
    answerIndex: 2,
    explanation: 'Beliau menghabiskan sekitar 19 tahun (1642–1661 M) belajar di Yaman, Mekkah, dan Madinah.'
  },
  {
    scholar: 'Syekh Ahmad Khatib Al-Minangkabawi',
    question: 'Kehormatan langka apa yang diraih Syekh Ahmad Khatib Al-Minangkabawi sebagai putra Minangkabau pertama di pusat dunia Islam?',
    options: [
      'Menjadi Mufti Kesultanan Aceh Darussalam',
      'Diangkat menjadi Imam dan Khatib Mazhab Syafi’i di Masjidil Haram',
      'Mendirikan kerajaan Islam di Afrika Selatan',
      'Menjadi pemimpin Tarekat Sammaniyah di Madinah'
    ],
    answerIndex: 1,
    explanation: 'Syarif Mekkah mengangkat Syekh Ahmad Khatib Al-Minangkabawi menjadi Imam dan Khatib resmi Mazhab Syafi’i di Masjidil Haram.'
  },
  {
    scholar: 'Syekh Ahmad Khatib Al-Minangkabawi',
    question: 'Selain bidang fiqih, ushul fiqih, dan hukum waris, cabang ilmu eksakta apa yang juga dikuasai dan ditulis kitabnya oleh Syekh Ahmad Khatib Al-Minangkabawi?',
    options: ['Ilmu Falak (astronomi) dan Ilmu Hisab (matematika)', 'Ilmu Kedokteran dan Botani', 'Ilmu Geologi dan Pertambangan', 'Ilmu Kimia dan Metalurgi'],
    answerIndex: 0,
    explanation: 'Beliau menguasai sekaligus menulis kitab dalam bidang Ilmu Falak (astronomi Islam) dan Ilmu Hisab (matematika).'
  },
  {
    scholar: 'Syekh Ahmad Khatib Al-Minangkabawi',
    question: 'Karya Syekh Ahmad Khatib Al-Minangkabawi yang membahas perhitungan astronomi menggunakan instrumen klasik Rubu’ Mujayyab untuk menentukan arah kiblat adalah...',
    options: ['Al-Jawahir An-Naqiyyah fi Al-A’mal Al-Jaibiyyah', 'Raudhat Al-Hussab fi ‘Ilm Al-Hisab', 'Tarjuman Al-Mustafid', 'Tijan Ad-Darari'],
    answerIndex: 0,
    explanation: 'Al-Jawahir An-Naqiyyah membahas perhitungan astronomi Islam menggunakan instrumen Rubu’ Mujayyab untuk menentukan arah kiblat.'
  },
  {
    scholar: 'Syekh Ahmad Khatib Al-Minangkabawi',
    question: 'Sebelum berangkat ke Mekkah pada usia 11 tahun, di mana Syekh Ahmad Khatib Al-Minangkabawi sempat mempelajari dasar ilmu hitung (matematika)?',
    options: ['Sekolah Raja (Kweekschool) di Bukittinggi', 'Dayah Simpang Kanan di Singkil', 'Pesantren Tanara di Banten', 'Istana Kerajaan Gowa di Makassar'],
    answerIndex: 0,
    explanation: 'Syekh Ahmad Khatib sempat menempuh pendidikan di Sekolah Raja (Kweekschool) Bukittinggi tempat ia menguasai dasar ilmu hitung.'
  }
];

// ==========================================================================
// 3. STATE APLIKASI
// ==========================================================================
let currentScholarId = 'nawawi';
let currentSlideIndex = 0;
let mapDisplayMode = 'single'; // 'single' | 'all'
let voyageModalInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.getElementById('voyageStopModal');
  if (modalEl && window.bootstrap) {
    voyageModalInstance = new bootstrap.Modal(modalEl);
  }

  renderPedestalSelector();
  renderMapLegend();
  renderScholarContent(currentScholarId, false);
  initHeroPortrait3DTilt();
  initAtlas3DTilt();
  initVoyageControls();
  initScrollRevealObserver();
  initReadingProgress();
  initQuizEngine();
});

// ==========================================================================
// 4. RENDER 5 PILAR PEMILIH TOKOH (COLORFUL 3D PEDESTALS)
// ==========================================================================
function renderPedestalSelector() {
  const grid = document.getElementById('scholar-selector-grid');
  if (!grid) return;

  grid.innerHTML = SCHOLARS_DATA.map((scholar) => {
    const isActive = scholar.id === currentScholarId ? 'active' : '';
    return `
      <div class="col-6 col-md-4 col-lg pedestal-wrapper">
        <div
          class="pedestal-card ${isActive}"
          style="--scholar-color: ${scholar.themeColor};"
          role="button"
          tabindex="0"
          data-scholar-id="${scholar.id}"
          aria-pressed="${scholar.id === currentScholarId}"
          aria-label="Pilih biografi ${scholar.shortName}"
        >
          <div class="pedestal-depth-1 d-flex justify-content-between align-items-center">
            <span class="pedestal-number">PILAR ${scholar.romanNumeral}</span>
            <img
              src="${scholar.imageFile}"
              alt="Foto ${scholar.shortName}"
              class="pedestal-avatar"
              onerror="this.style.display='none'"
            />
          </div>
          <h3 class="pedestal-name pedestal-depth-2">${scholar.shortName}</h3>
          <div class="pedestal-origin pedestal-depth-1">${scholar.originBadge}</div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.pedestal-card').forEach((card) => {
    const id = card.getAttribute('data-scholar-id');

    card.addEventListener('click', () => handleScholarSelect(id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleScholarSelect(id);
      }
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;

      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ==========================================================================
// 5. PERGANTIAN TOKOH DENGAN TRANSISI PANGGUNG 3D
// ==========================================================================
function handleScholarSelect(scholarId) {
  currentScholarId = scholarId;
  currentSlideIndex = 0;

  document.querySelectorAll('.pedestal-card').forEach((card) => {
    const isMatch = card.getAttribute('data-scholar-id') === scholarId;
    card.classList.toggle('active', isMatch);
    card.setAttribute('aria-pressed', isMatch);
  });

  document.querySelectorAll('.legend-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.getAttribute('data-scholar-id') === scholarId);
  });

  const stage = document.getElementById('archive-dynamic-stage');
  if (stage) {
    stage.classList.add('stage-switching');
    setTimeout(() => {
      renderScholarContent(scholarId, true);
      stage.classList.remove('stage-switching');
    }, 240);
  } else {
    renderScholarContent(scholarId, true);
  }
}

// ==========================================================================
// 6. PETA PELAYARAN 3D, KAPAL SVG ANIMASI, SLIDE VISUAL & POP-UP
// ==========================================================================
function renderMapLegend() {
  const legendBar = document.getElementById('map-legend-bar');
  if (!legendBar) return;

  legendBar.innerHTML = SCHOLARS_DATA.map((s) => `
    <button
      type="button"
      class="legend-chip ${s.id === currentScholarId ? 'active' : ''}"
      data-scholar-id="${s.id}"
    >
      <span class="legend-dot" style="background-color: ${s.themeColor};"></span>
      <span>${s.shortName}</span>
    </button>
  `).join('');

  legendBar.querySelectorAll('.legend-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scholar-id');
      handleScholarSelect(id);
    });
  });
}

function initVoyageControls() {
  const btnSingle = document.getElementById('btn-mode-single');
  const btnAll = document.getElementById('btn-mode-all');
  const btnPrev = document.getElementById('btn-prev-slide');
  const btnNext = document.getElementById('btn-next-slide');
  const btnPopup = document.getElementById('btn-open-stop-popup');

  if (btnSingle) {
    btnSingle.addEventListener('click', () => {
      mapDisplayMode = 'single';
      btnSingle.classList.add('active');
      btnAll.classList.remove('active');
      renderVoyageMapAndSlides();
    });
  }

  if (btnAll) {
    btnAll.addEventListener('click', () => {
      mapDisplayMode = 'all';
      btnAll.classList.add('active');
      btnSingle.classList.remove('active');
      renderVoyageMapAndSlides();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      const scholar = SCHOLARS_DATA.find((s) => s.id === currentScholarId);
      if (!scholar) return;
      currentSlideIndex = (currentSlideIndex - 1 + scholar.voyageStops.length) % scholar.voyageStops.length;
      animateSlideChange();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const scholar = SCHOLARS_DATA.find((s) => s.id === currentScholarId);
      if (!scholar) return;
      currentSlideIndex = (currentSlideIndex + 1) % scholar.voyageStops.length;
      animateSlideChange();
    });
  }

  if (btnPopup) {
    btnPopup.addEventListener('click', () => {
      const scholar = SCHOLARS_DATA.find((s) => s.id === currentScholarId);
      if (!scholar) return;
      openStopDetailModal(scholar, scholar.voyageStops[currentSlideIndex]);
    });
  }
}

function animateSlideChange() {
  const slideCard = document.getElementById('voyage-slides-panel');
  if (slideCard) {
    slideCard.classList.add('slide-animating');
    setTimeout(() => {
      renderVoyageMapAndSlides();
      slideCard.classList.remove('slide-animating');
    }, 180);
  } else {
    renderVoyageMapAndSlides();
  }
}

function renderVoyageMapAndSlides() {
  const activeScholar = SCHOLARS_DATA.find((s) => s.id === currentScholarId) || SCHOLARS_DATA[0];
  const stops = activeScholar.voyageStops;
  const activeStop = stops[currentSlideIndex] || stops[0];

  const labelEl = document.getElementById('map-current-scholar-label');
  if (labelEl) labelEl.textContent = activeScholar.shortName.replace('Syekh ', '');

  const routesLayer = document.getElementById('map-routes-layer');
  const pinsLayer = document.getElementById('map-pins-layer');
  const shipGroup = document.getElementById('voyage-ship-group');
  const tooltip = document.getElementById('map-hover-tooltip');

  if (!routesLayer || !pinsLayer) return;

  // Tentukan ulama mana saja yang digambar di peta
  const scholarsToRender = mapDisplayMode === 'all' ? SCHOLARS_DATA : [activeScholar];

  let routesMarkup = '';
  let pinsMarkup = '';

  scholarsToRender.forEach((scholar) => {
    const isFocused = scholar.id === activeScholar.id;
    const pathPoints = scholar.voyageStops.map((st, i) => `${i === 0 ? 'M' : 'L'} ${st.x} ${st.y}`).join(' ');

    // Garis Rute Pelayaran (Melengkung Halus)
    let curveD = '';
    scholar.voyageStops.forEach((st, idx) => {
      if (idx === 0) {
        curveD += `M ${st.x} ${st.y} `;
      } else {
        const prev = scholar.voyageStops[idx - 1];
        const midX = (prev.x + st.x) / 2;
        const midY = (prev.y + st.y) / 2 - 28; // Lengkungan jalur laut
        curveD += `Q ${midX} ${midY} ${st.x} ${st.y} `;
      }
    });

    routesMarkup += `
      <path
        d="${curveD || pathPoints}"
        fill="none"
        stroke="${scholar.themeColor}"
        stroke-width="${isFocused ? 4 : 2.5}"
        stroke-opacity="${isFocused ? 0.95 : 0.65}"
        class="${isFocused ? 'animated-route-line' : ''}"
        stroke-linecap="round"
      />
    `;

    scholar.voyageStops.forEach((st, stopIdx) => {
      const isCurrentStop = isFocused && stopIdx === currentSlideIndex;
      const radius = isCurrentStop ? 9 : (isFocused ? 7 : 5.5);

      pinsMarkup += `
        <g
          class="city-pin-group"
          data-scholar-id="${scholar.id}"
          data-stop-idx="${stopIdx}"
          data-city="${st.city}"
          data-x="${st.x}"
          data-y="${st.y}"
        >
          ${isCurrentStop ? `<circle cx="${st.x}" cy="${st.y}" r="14" fill="none" stroke="#ffd166" stroke-width="2" class="city-pin-pulse" />` : ''}
          <circle
            cx="${st.x}"
            cy="${st.y}"
            r="${radius}"
            fill="${isCurrentStop ? '#ffd166' : scholar.themeColor}"
            stroke="#ffffff"
            stroke-width="2"
            class="city-pin-core"
          />
          ${isFocused ? `
            <text
              x="${st.x}"
              y="${st.y - 13}"
              text-anchor="middle"
              fill="#ffffff"
              font-size="10.5"
              font-family="Plus Jakarta Sans, sans-serif"
              font-weight="700"
              style="text-shadow: 0 2px 4px rgba(0,0,0,0.85);"
            >
              ${stopIdx + 1}. ${st.city.split('(')[0].trim()}
            </text>
          ` : ''}
        </g>
      `;
    });
  });

  routesLayer.innerHTML = routesMarkup;
  pinsLayer.innerHTML = pinsMarkup;

  // Gerakkan Kapal SVG ke Koordinat Slide Aktif
  if (shipGroup && activeStop) {
    const prevStop = stops[Math.max(0, currentSlideIndex - 1)];
    const goingWest = activeStop.x < prevStop.x;
    const scaleX = goingWest ? -1.15 : 1.15;
    shipGroup.setAttribute('transform', `translate(${activeStop.x}, ${activeStop.y - 10}) scale(${scaleX}, 1.15)`);
  }

  // Event Interaktif Hover & Klik pada Pin Kota
  pinsLayer.querySelectorAll('.city-pin-group').forEach((pin) => {
    const sId = pin.getAttribute('data-scholar-id');
    const stIdx = Number(pin.getAttribute('data-stop-idx'));
    const cityName = pin.getAttribute('data-city');
    const px = Number(pin.getAttribute('data-x'));
    const py = Number(pin.getAttribute('data-y'));

    pin.addEventListener('mouseenter', () => {
      if (!tooltip) return;
      const targetScholar = SCHOLARS_DATA.find((s) => s.id === sId);
      tooltip.querySelector('.tooltip-city').textContent = `${cityName} (${targetScholar.shortName})`;
      tooltip.style.left = `${(px / 1000) * 100}%`;
      tooltip.style.top = `${(py / 500) * 100}%`;
      tooltip.classList.remove('d-none');
    });

    pin.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.add('d-none');
    });

    pin.addEventListener('click', () => {
      const targetScholar = SCHOLARS_DATA.find((s) => s.id === sId);
      if (!targetScholar) return;

      if (sId !== currentScholarId) {
        currentScholarId = sId;
        currentSlideIndex = stIdx;
        handleScholarSelect(sId);
      } else {
        currentSlideIndex = stIdx;
        renderVoyageMapAndSlides();
      }
      openStopDetailModal(targetScholar, targetScholar.voyageStops[stIdx]);
    });
  });

  // Update Kartu Slide Visual di Bawah Peta
  const badgeEl = document.getElementById('slide-step-badge');
  const dirEl = document.getElementById('slide-route-direction');
  const titleEl = document.getElementById('slide-title');
  const sumEl = document.getElementById('slide-summary');
  const illBox = document.getElementById('slide-svg-illustration');
  const dotsBox = document.getElementById('slide-dots-container');

  if (badgeEl) {
    badgeEl.textContent = `TAHAP ${currentSlideIndex + 1} DARI ${stops.length} • ${activeStop.era}`;
    badgeEl.style.backgroundColor = activeScholar.themeColor;
    badgeEl.style.color = '#ffffff';
  }
  if (dirEl) {
    dirEl.innerHTML = `<i class="bi bi-signpost-2-fill text-gold me-1"></i> ${activeStop.direction}`;
  }
  if (titleEl) titleEl.textContent = activeStop.title;
  if (sumEl) sumEl.textContent = activeStop.summary;
  if (illBox) illBox.innerHTML = buildSlideGraphicSVG(activeStop.iconType, activeScholar.themeColor);

  if (dotsBox) {
    dotsBox.innerHTML = stops.map((_, idx) => `
      <button
        type="button"
        class="slide-dot-btn ${idx === currentSlideIndex ? 'active' : ''}"
        aria-label="Ke tahap perjalanan ${idx + 1}"
        data-slide-idx="${idx}"
      ></button>
    `).join('');

    dotsBox.querySelectorAll('.slide-dot-btn').forEach((dot) => {
      dot.addEventListener('click', () => {
        currentSlideIndex = Number(dot.getAttribute('data-slide-idx'));
        animateSlideChange();
      });
    });
  }
}

function openStopDetailModal(scholar, stop) {
  if (!voyageModalInstance) return;

  const badge = document.getElementById('voyageModalScholarBadge');
  badge.textContent = scholar.hero.fullName;
  badge.style.backgroundColor = scholar.themeColor;
  badge.style.color = '#ffffff';

  document.getElementById('voyageModalSvgBox').innerHTML = buildSlideGraphicSVG(stop.iconType, scholar.themeColor);
  document.getElementById('voyageModalEra').textContent = stop.era;
  document.getElementById('voyageModalLocation').innerHTML = `<i class="bi bi-geo-alt-fill text-danger me-1"></i> ${stop.city}`;
  document.getElementById('voyageModalTitle').textContent = stop.title;
  document.getElementById('voyageModalDetail').textContent = stop.summary;
  document.getElementById('voyageModalSignificance').textContent = stop.significance;

  voyageModalInstance.show();
}

// Generator Ilustrasi Grafis SVG Colorful untuk Masing-Masing Slide
function buildSlideGraphicSVG(type, accentColor) {
  const icons = {
    ship: `
      <svg viewBox="0 0 120 120" width="118" height="118" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="52" fill="rgba(255,255,255,0.1)" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="4 3" />
        <path d="M 24,74 L 96,74 L 84,90 L 36,90 Z" fill="#e67e22" stroke="#ffd166" stroke-width="2" />
        <line x1="58" y1="74" x2="58" y2="24" stroke="#ffd166" stroke-width="3" />
        <path d="M 58,28 Q 88,48 58,68 Z" fill="#ffffff" />
        <path d="M 54,34 Q 30,50 54,66 Z" fill="#ffd166" />
        <path d="M 20,94 Q 40,88 60,94 T 100,94" fill="none" stroke="#7dd3fc" stroke-width="2.5" stroke-linecap="round" />
      </svg>
    `,
    mosque: `
      <svg viewBox="0 0 120 120" width="118" height="118" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="52" fill="rgba(255,255,255,0.1)" stroke="#ffd166" stroke-width="1.5" />
        <path d="M 35,62 C 35,38 85,38 85,62 Z" fill="#ffd166" />
        <rect x="30" y="62" width="60" height="30" rx="3" fill="#ffffff" />
        <path d="M 52,92 L 52,74 A 8,8 0 0 1 68,74 L 68,92 Z" fill="${accentColor}" />
        <line x1="60" y1="38" x2="60" y2="25" stroke="#ffd166" stroke-width="2.5" />
        <circle cx="60" cy="23" r="3" fill="#ffd166" />
      </svg>
    `,
    book: `
      <svg viewBox="0 0 120 120" width="118" height="118" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="52" fill="rgba(255,255,255,0.1)" stroke="#ffd166" stroke-width="1.5" />
        <path d="M 26,42 Q 44,36 60,46 Q 76,36 94,42 L 94,84 Q 76,78 60,88 Q 44,78 26,84 Z" fill="#fffbeb" stroke="#ffd166" stroke-width="2.5" />
        <line x1="60" y1="46" x2="60" y2="88" stroke="#b88628" stroke-width="2" />
        <line x1="34" y1="54" x2="52" y2="56" stroke="${accentColor}" stroke-width="2" />
        <line x1="34" y1="64" x2="52" y2="66" stroke="${accentColor}" stroke-width="2" />
        <line x1="68" y1="56" x2="86" y2="54" stroke="${accentColor}" stroke-width="2" />
        <line x1="68" y1="66" x2="86" y2="64" stroke="${accentColor}" stroke-width="2" />
      </svg>
    `,
    shield: `
      <svg viewBox="0 0 120 120" width="118" height="118" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="52" fill="rgba(255,255,255,0.1)" stroke="#ffd166" stroke-width="1.5" />
        <path d="M 60,24 L 88,36 L 84,66 C 81,82 60,94 60,94 C 60,94 39,82 36,66 L 32,36 Z" fill="#ef476f" stroke="#ffd166" stroke-width="2.5" />
        <polygon points="60,40 65,53 79,53 68,61 72,74 60,66 48,74 52,61 41,53 55,53" fill="#ffd166" />
      </svg>
    `,
    compass: `
      <svg viewBox="0 0 120 120" width="118" height="118" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="46" fill="#0f2933" stroke="#ffd166" stroke-width="3" />
        <circle cx="60" cy="60" r="36" fill="none" stroke="#7dd3fc" stroke-width="1" stroke-dasharray="3 3" />
        <polygon points="60,24 68,52 96,60 68,68 60,96 52,68 24,60 52,52" fill="#ffd166" />
        <circle cx="60" cy="60" r="6" fill="#ef476f" />
      </svg>
    `,
    scroll: `
      <svg viewBox="0 0 120 120" width="118" height="118" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="52" fill="rgba(255,255,255,0.1)" stroke="#ffd166" stroke-width="1.5" />
        <rect x="36" y="30" width="48" height="60" rx="6" fill="#fef3c7" stroke="#e5a93c" stroke-width="2.5" />
        <line x1="45" y1="45" x2="75" y2="45" stroke="${accentColor}" stroke-width="2.5" />
        <line x1="45" y1="57" x2="75" y2="57" stroke="${accentColor}" stroke-width="2.5" />
        <line x1="45" y1="69" x2="66" y2="69" stroke="${accentColor}" stroke-width="2.5" />
      </svg>
    `
  };
  return icons[type] || icons.ship;
}

function initAtlas3DTilt() {
  const wrapper = document.getElementById('atlas-3d-wrapper');
  const board = document.getElementById('atlas-3d-board');
  if (!wrapper || !board) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5.5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5.5;
    board.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    board.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// ==========================================================================
// 7. RENDER SELURUH KONTEN SECTION BIOGRAFI (B – H)
// ==========================================================================
function renderScholarContent(scholarId, retriggerAnimations) {
  const data = SCHOLARS_DATA.find((item) => item.id === scholarId) || SCHOLARS_DATA[0];

  // Update warna aksen dinamis pada Hero Frame
  const frameInner = document.querySelector('.frame-inner-depth');
  if (frameInner) {
    frameInner.style.setProperty('--active-scholar-color', data.themeColor);
  }

  document.getElementById('hero-scholar-region').textContent = data.hero.region;
  document.getElementById('hero-scholar-name').textContent = data.hero.fullName;
  document.getElementById('hero-scholar-epithet').textContent = data.hero.epithet;
  document.getElementById('hero-scholar-desc').textContent = data.hero.summary;
  document.getElementById('hero-scholar-years').textContent = data.yearsSpan;
  document.getElementById('active-scholar-indicator').textContent = data.hero.fullName;

  const imgEl = document.getElementById('hero-scholar-img');
  const fallbackEl = document.getElementById('hero-scholar-fallback');
  fallbackEl.innerHTML = buildClassicalCrestSVG(data);

  imgEl.alt = `Potret ${data.hero.fullName}`;
  imgEl.onload = () => {
    imgEl.classList.remove('d-none');
    fallbackEl.classList.add('d-none');
  };
  imgEl.onerror = () => {
    imgEl.classList.add('d-none');
    fallbackEl.classList.remove('d-none');
  };
  imgEl.src = data.imageFile;

  // Render Peta 3D & Slide Visual
  renderVoyageMapAndSlides();

  const tabletColors = ['#136f53', '#1565c0', '#6f42c1', '#d9534f', '#e67e22', '#0d9488'];
  const profileFields = [
    { label: 'Nama Lengkap', value: data.profile.namaLengkap, icon: 'bi-person-badge' },
    { label: 'Tempat & Tanggal Lahir', value: data.profile.lahir, icon: 'bi-sunrise' },
    { label: 'Tempat & Tanggal Wafat', value: data.profile.wafat, icon: 'bi-hourglass-bottom' },
    { label: 'Asal Daerah', value: data.profile.asalDaerah, icon: 'bi-geo-alt' },
    { label: 'Bidang Keilmuan', value: data.profile.bidangKeilmuan, icon: 'bi-book' },
    { label: 'Julukan / Gelar Dikenal', value: data.profile.julukan, icon: 'bi-award' }
  ];

  document.getElementById('profil-grid').innerHTML = profileFields.map((item, idx) => `
    <div class="col-md-6 col-lg-4 reveal-3d">
      <article class="stone-tablet" style="--tablet-accent: ${tabletColors[idx % tabletColors.length]};">
        <div class="d-flex align-items-center gap-2 tablet-label">
          <i class="bi ${item.icon}"></i>
          <span>${item.label}</span>
        </div>
        <p class="tablet-value">${item.value}</p>
      </article>
    </div>
  `).join('');

  document.getElementById('timeline-container').innerHTML = data.timeline.map((step) => `
    <article class="timeline-node reveal-3d">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-card">
        <span class="timeline-phase">${step.phase}</span>
        <h3 class="timeline-heading">${step.title}</h3>
        <p class="text-secondary mb-0">${step.desc}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('karya-list').innerHTML = data.works.map((work) => `
    <div class="kitab-item">
      <div class="small fw-semibold text-gold mb-1">${work.field}</div>
      <h4 class="kitab-title">${work.title}</h4>
      <p class="small text-secondary mb-0">${work.desc}</p>
    </div>
  `).join('');

  document.getElementById('pemikiran-content').innerHTML = `
    <div class="thought-card reveal-3d">
      <h3 class="panel-heading mb-3">
        <i class="bi bi-compass text-gold me-2"></i>Bidang Keilmuan yang Ditekuni
      </h3>
      <p class="text-secondary mb-0">${data.thoughts.bidangFokus}</p>
    </div>
    <div class="thought-card reveal-3d">
      <h3 class="panel-heading mb-3">
        <i class="bi bi-lightbulb text-gold me-2"></i>Pemikiran &amp; Gagasan Inti
      </h3>
      <p class="text-secondary mb-0">${data.thoughts.gagasanUtama}</p>
    </div>
    <div class="thought-card reveal-3d">
      <h3 class="panel-heading mb-3">
        <i class="bi bi-diagram-3 text-gold me-2"></i>Pengaruh terhadap Perkembangan Islam
      </h3>
      <p class="text-secondary mb-0">${data.thoughts.pengaruhIslam}</p>
    </div>
  `;

  document.getElementById('kontribusi-grid').innerHTML = data.contributions.map((item) => `
    <div class="col-md-6 col-lg-4 reveal-3d">
      <article class="pillar-contribution-card">
        <div class="pillar-icon-box">
          <i class="bi ${item.icon}"></i>
        </div>
        <h3 class="h6 fw-bold mb-2">${item.title}</h3>
        <p class="small text-secondary mb-0">${item.desc}</p>
      </article>
    </div>
  `).join('');

  document.getElementById('keteladanan-grid').innerHTML = data.virtues.map((virtue, idx) => `
    <div class="col-md-4 reveal-3d">
      <article class="virtue-card">
        <div class="virtue-num mb-2">0${idx + 1}</div>
        <h3 class="h6 fw-bold mb-2">${virtue.title}</h3>
        <p class="small text-secondary mb-0">${virtue.desc}</p>
      </article>
    </div>
  `).join('');

  document.getElementById('referensi-list').innerHTML = data.references.map((ref) => `
    <li>${ref}</li>
  `).join('');

  if (retriggerAnimations) {
    initScrollRevealObserver();
  }
}

// ==========================================================================
// 8. GENERATOR EMBLEM MEDALI KLASIK (SVG FALLBACK)
// ==========================================================================
function buildClassicalCrestSVG(scholar) {
  return `
    <svg viewBox="0 0 180 180" width="164" height="164" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medali Klasik ${scholar.shortName}">
      <circle cx="90" cy="90" r="84" fill="${scholar.themeColor}" stroke="#ffd166" stroke-width="4" />
      <circle cx="90" cy="90" r="74" fill="none" stroke="#ffd166" stroke-width="1" stroke-dasharray="4 3" />
      <text x="90" y="68" text-anchor="middle" fill="#ffd166" font-family="Cinzel, serif" font-size="16" font-weight="700" letter-spacing="3">
        PILAR ${scholar.romanNumeral}
      </text>
      <text x="90" y="98" text-anchor="middle" fill="#ffffff" font-family="Cinzel, serif" font-size="13.5" font-weight="700" letter-spacing="1">
        ${scholar.crestTitle}
      </text>
    </svg>
  `;
}

// ==========================================================================
// 9. EFEK 3D TILT PADA BINGKAI POTRET UTAMA
// ==========================================================================
function initHeroPortrait3DTilt() {
  const frameWrapper = document.getElementById('hero-portrait-3d');
  if (!frameWrapper) return;
  const inner = frameWrapper.querySelector('.frame-inner-depth');

  frameWrapper.addEventListener('mousemove', (e) => {
    const rect = frameWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    inner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  frameWrapper.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// ==========================================================================
// 10. SCROLL-REVEAL 3D & PROGRESS BAR
// ==========================================================================
function initScrollRevealObserver() {
  const targets = document.querySelectorAll('.reveal-3d');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => {
    el.classList.remove('is-visible');
    observer.observe(el);
  });
}

function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }, { passive: true });
}

// ==========================================================================
// 11. ENGINE KUIS INTERAKTIF 20 SOAL (VANILLA JS)
// ==========================================================================
function initQuizEngine() {
  const startScreen = document.getElementById('quiz-start-screen');
  const playScreen = document.getElementById('quiz-play-screen');
  const resultScreen = document.getElementById('quiz-result-screen');
  const cardStage = document.getElementById('quiz-card-stage');

  const btnStart = document.getElementById('btn-start-quiz');
  const btnNext = document.getElementById('btn-next-question');
  const btnQuit = document.getElementById('btn-quit-quiz');
  const btnRetry = document.getElementById('btn-retry-quiz');
  const btnToggleReview = document.getElementById('btn-toggle-review');
  const shuffleToggle = document.getElementById('quiz-shuffle-toggle');

  if (!startScreen || !btnStart) return;

  let activeQuestions = [];
  let currentIndex = 0;
  let correctCount = 0;
  let hasAnsweredCurrent = false;
  let userHistory = [];

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function animateCardTransition(callback) {
    cardStage.classList.add('quiz-card-flip');
    setTimeout(() => {
      callback();
      cardStage.classList.remove('quiz-card-flip');
    }, 220);
  }

  function startQuiz() {
    activeQuestions = shuffleToggle && shuffleToggle.checked
      ? shuffleArray(QUIZ_QUESTIONS)
      : [...QUIZ_QUESTIONS];

    currentIndex = 0;
    correctCount = 0;
    hasAnsweredCurrent = false;
    userHistory = [];

    animateCardTransition(() => {
      startScreen.classList.add('d-none');
      resultScreen.classList.add('d-none');
      playScreen.classList.remove('d-none');
      renderCurrentQuestion();
    });
  }

  function renderCurrentQuestion() {
    hasAnsweredCurrent = false;
    const item = activeQuestions[currentIndex];
    const total = activeQuestions.length;

    document.getElementById('quiz-progress-label').textContent = `Soal ${currentIndex + 1} dari ${total}`;
    document.getElementById('quiz-live-correct').textContent = correctCount;
    document.getElementById('quiz-progress-bar').style.width = `${((currentIndex + 1) / total) * 100}%`;

    const topicTag = document.getElementById('quiz-topic-tag');
    topicTag.textContent = `PERTANYAAN ${currentIndex + 1} • UJI HISTORIOGRAFI`;
    document.getElementById('quiz-question-text').textContent = item.question;

    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.classList.add('d-none');
    feedbackBox.classList.remove('feedback-is-correct', 'feedback-is-wrong');

    btnNext.disabled = true;
    btnNext.querySelector('span').textContent =
      currentIndex === total - 1 ? 'Lihat Hasil Akhir' : 'Soal Berikutnya';

    const letters = ['A', 'B', 'C', 'D'];
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = item.options.map((optText, idx) => `
      <button type="button" class="quiz-option-btn" data-option-idx="${idx}">
        <span class="quiz-option-letter">${letters[idx]}</span>
        <span>${optText}</span>
      </button>
    `).join('');

    optionsContainer.querySelectorAll('.quiz-option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosenIdx = Number(btn.getAttribute('data-option-idx'));
        handleAnswerChoice(chosenIdx);
      });
    });
  }

  function handleAnswerChoice(chosenIdx) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const item = activeQuestions[currentIndex];
    const isCorrect = chosenIdx === item.answerIndex;
    if (isCorrect) correctCount++;

    document.getElementById('quiz-live-correct').textContent = correctCount;
    document.getElementById('quiz-topic-tag').textContent = `ARSIP: ${item.scholar.toUpperCase()}`;

    const allBtns = document.querySelectorAll('#quiz-options-container .quiz-option-btn');
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === item.answerIndex) {
        btn.classList.add('option-correct');
      } else if (idx === chosenIdx && !isCorrect) {
        btn.classList.add('option-wrong');
      }
    });

    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackIcon = document.getElementById('quiz-feedback-icon');
    const feedbackStatus = document.getElementById('quiz-feedback-status');
    const feedbackExp = document.getElementById('quiz-feedback-explanation');

    feedbackBox.classList.remove('d-none', 'feedback-is-correct', 'feedback-is-wrong');
    if (isCorrect) {
      feedbackBox.classList.add('feedback-is-correct');
      feedbackIcon.className = 'bi bi-check-circle-fill text-success fs-5 mt-0.5';
      feedbackStatus.textContent = 'Jawaban Tepat!';
      feedbackStatus.className = 'd-block mb-1 text-success';
    } else {
      feedbackBox.classList.add('feedback-is-wrong');
      feedbackIcon.className = 'bi bi-x-circle-fill text-danger fs-5 mt-0.5';
      feedbackStatus.textContent = `Kurang Tepat — Jawaban benar: ${item.options[item.answerIndex]}`;
      feedbackStatus.className = 'd-block mb-1 text-danger';
    }
    feedbackExp.textContent = item.explanation;

    userHistory.push({
      question: item.question,
      scholar: item.scholar,
      chosenText: item.options[chosenIdx],
      correctText: item.options[item.answerIndex],
      isCorrect,
      explanation: item.explanation
    });

    btnNext.disabled = false;
  }

  function showFinalResults() {
    const total = activeQuestions.length;
    const wrongCount = total - correctCount;
    const score = Math.round((correctCount / total) * 100);

    let rankTitle = 'Penjelajah Pemula Arsip';
    let rankDesc = 'Masih ada beberapa detail sejarah yang terlewat. Coba telusuri kembali peta pelayaran 3D di atas lalu ulangi kuisnya!';

    if (score >= 90) {
      rankTitle = 'Mahaguru Sejarah Ulama Nusantara';
      rankDesc = 'Luar biasa! Pemahamanmu tentang rute pelayaran, biografi, dan karya kelima ulama Nusantara sangat mendalam.';
    } else if (score >= 75) {
      rankTitle = 'Cendekiawan Arsip Nusantara';
      rankDesc = 'Hasil yang sangat baik! Kamu sudah menguasai sebagian besar rekam jejak dan kontribusi penting para ulama Nusantara.';
    } else if (score >= 55) {
      rankTitle = 'Pengkaji Historiografi Islam';
      rankDesc = 'Cukup bagus! Beberapa fakta kunci sudah kamu kuasai, tinggal memperdalam detail karya kitab dan perjalanan dakwahnya.';
    }

    document.getElementById('quiz-final-score').textContent = score;
    document.getElementById('quiz-final-correct').textContent = correctCount;
    document.getElementById('quiz-final-wrong').textContent = wrongCount;
    document.getElementById('quiz-rank-title').textContent = rankTitle;
    document.getElementById('quiz-rank-desc').textContent = rankDesc;

    const reviewContainer = document.getElementById('quiz-review-container');
    reviewContainer.classList.add('d-none');
    btnToggleReview.innerHTML = '<i class="bi bi-list-check me-1"></i> Lihat Rekap 20 Jawaban';

    document.getElementById('quiz-review-list').innerHTML = userHistory.map((rec, i) => `
      <div class="review-item-card">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="small fw-bold text-gold">Soal ${i + 1} &bull; ${rec.scholar}</span>
          <span class="badge ${rec.isCorrect ? 'bg-success' : 'bg-danger'}">
            ${rec.isCorrect ? 'Benar' : 'Salah'}
          </span>
        </div>
        <p class="fw-semibold small mb-2">${rec.question}</p>
        <p class="small mb-1 ${rec.isCorrect ? 'text-success' : 'text-danger'}">
          Jawabanmu: <strong>${rec.chosenText}</strong>
        </p>
        ${!rec.isCorrect ? `<p class="small text-success mb-1">Jawaban Benar: <strong>${rec.correctText}</strong></p>` : ''}
        <p class="small text-muted mb-0">${rec.explanation}</p>
      </div>
    `).join('');

    animateCardTransition(() => {
      playScreen.classList.add('d-none');
      resultScreen.classList.remove('d-none');
    });
  }

  btnStart.addEventListener('click', startQuiz);

  btnNext.addEventListener('click', () => {
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      animateCardTransition(renderCurrentQuestion);
    } else {
      showFinalResults();
    }
  });

  btnQuit.addEventListener('click', () => {
    animateCardTransition(() => {
      playScreen.classList.add('d-none');
      resultScreen.classList.add('d-none');
      startScreen.classList.remove('d-none');
    });
  });

  btnRetry.addEventListener('click', startQuiz);

  btnToggleReview.addEventListener('click', () => {
    const reviewContainer = document.getElementById('quiz-review-container');
    const isHidden = reviewContainer.classList.contains('d-none');
    reviewContainer.classList.toggle('d-none');
    btnToggleReview.innerHTML = isHidden
      ? '<i class="bi bi-eye-slash me-1"></i> Sembunyikan Rekap'
      : '<i class="bi bi-list-check me-1"></i> Lihat Rekap 20 Jawaban';
  });
}