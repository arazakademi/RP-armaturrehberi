// Kategori ağacı shop.creavit.com.tr "Armatürler" menüsünden alındı (18 Kasım 2026).
// "Montaj Hizmetleri" bir hizmet olduğu için kategori yapılmadı.
// creavit: o kategorinin Creavit mağazasındaki karşılığı.

export type AltKategori = {
  slug: string;
  ad: string;
  aciklama: string;
  creavit: string;
};

export type Kategori = AltKategori & { alt: AltKategori[] };

const C = 'https://shop.creavit.com.tr/collections/';

export const kategoriler: Kategori[] = [
  {
    slug: 'batarya-ve-musluklar',
    ad: 'Batarya ve Musluklar',
    aciklama:
      'Lavabo, banyo ve mutfak bataryaları ile musluklar: gövde yüksekliği, kartuş, bağlantı ölçüsü ve yüzey kaplamasına göre doğru armatürü seçmek için rehberler.',
    creavit: C + 'armaturler',
    alt: [
      {
        slug: 'lavabo-bataryasi',
        ad: 'Lavabo Bataryaları',
        aciklama: 'Tek delikli lavabolar ve çanak lavabolar için bataryalar: gövde yüksekliği, gaga uzunluğu ve lavaboyla uyum rehberleri.',
        creavit: C + 'lavabo-armaturleri',
      },
      {
        slug: 'banyo-bataryasi',
        ad: 'Banyo Bataryaları',
        aciklama: 'Duş ve küvet bataryaları: duvar bağlantısı, yön değiştirici ve ankastre montaj rehberleri.',
        creavit: C + 'banyo-armaturleri',
      },
      {
        slug: 'mutfak-bataryasi',
        ad: 'Mutfak Bataryaları',
        aciklama: 'Eviye bataryaları: gaga yüksekliği, dönüş açısı, spiralli ve çekilebilir başlık rehberleri.',
        creavit: C + 'mutfak-armaturleri',
      },
      {
        slug: 'musluklar',
        ad: 'Musluklar',
        aciklama: 'Ara musluklar, taharet muslukları ve tek sulu musluklar: bağlantı ölçüsü ve kullanım yeri rehberleri.',
        creavit: C + 'diger-urunler',
      },
    ],
  },
  {
    slug: 'dus-urunleri',
    ad: 'Duş Ürünleri',
    aciklama:
      'Duş setleri, duş sistemleri ve duş başlıkları: su basıncı, başlık çapı, akış modları ve montaj yüksekliğine göre duş seçimi.',
    creavit: C + 'dus-urunleri',
    alt: [
      {
        slug: 'dus-seti',
        ad: 'Duş Setleri',
        aciklama: 'El duşu, hortum ve sürgülü bardan oluşan setler: bar uzunluğu, hortum boyu ve akış modu rehberleri.',
        creavit: C + 'dus-seti',
      },
      {
        slug: 'dus-sistemi',
        ad: 'Duş Sistemleri',
        aciklama: 'Tepe duşu ve el duşunu bir arada sunan sistemler: tavan yüksekliği, termostatik batarya ve kurulum rehberleri.',
        creavit: C + 'dus-sistemleri',
      },
      {
        slug: 'dus-basligi',
        ad: 'Duş Başlıkları',
        aciklama: 'Tepe ve el duşu başlıkları: çap, malzeme, kireç tutmayan memeler ve su tasarrufu rehberleri.',
        creavit: C + 'dus-basligi',
      },
    ],
  },
];

export function kategoriBul(slug: string) {
  return kategoriler.find((k) => k.slug === slug);
}

export function altKategoriBul(anaSlug: string, altSlug?: string) {
  if (!altSlug) return undefined;
  return kategoriBul(anaSlug)?.alt.find((a) => a.slug === altSlug);
}
