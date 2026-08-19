function unsplash(id: string, width = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

function catalog(name: string) {
  return `/images/catalog/${name}.jpg`;
}

export const IMAGES = {
  hero: catalog("white-embroidered"),
  fashionLifestyle: catalog("emerald-full"),
  homeLifestyle: unsplash("photo-1616486338812-3dadae4b4ace", 1600),
  handmadeStory: catalog("olive-dupatta"),
  homeFeature: unsplash("photo-1631049307264-da0ec9d70304", 2000),
  fashionFeature: catalog("teal-gold"),
  aboutHero: catalog("lavender-window"),
  contact: catalog("mint-formal"),
  dresses: [
    catalog("white-embroidered"),
    catalog("emerald-full"),
    catalog("grey-pearl"),
    catalog("lavender-window"),
    catalog("lemon-blue"),
    catalog("forest-green"),
    catalog("teal-gold"),
    catalog("navy-suit"),
    catalog("mint-formal"),
    catalog("powder-blue"),
    catalog("black-gold"),
    catalog("mint-pink"),
  ],
  chadars: [
    catalog("sage-maroon"),
    catalog("mint-pink-close"),
    catalog("olive-dupatta"),
    catalog("lavender-potli"),
    catalog("black-gold"),
    catalog("sage-maroon-full"),
  ],
  bedsheets: [
    unsplash("photo-1631049307264-da0ec9d70304"),
    unsplash("photo-1616594039964-ae9021a400a0"),
    unsplash("photo-1540518614846-7eded433c457"),
    unsplash("photo-1505693416388-ac5ce068fe85"),
    unsplash("photo-1522771739844-6a9f6d5f14af"),
    unsplash("photo-1617325247661-675ab4b64ae2"),
  ],
  sofaCovers: [
    unsplash("photo-1555041469-a586c61ea9bc"),
    unsplash("photo-1493663284031-b7e3aefcae8e"),
    unsplash("photo-1567016432779-094069958ea5"),
    unsplash("photo-1586023492125-27b2c045efd7"),
    unsplash("photo-1550254478-ead40cc54513"),
    unsplash("photo-1618220179428-22790b461013"),
  ],
  fanCovers: [
    unsplash("photo-1578662996442-48f60103fc96"),
    unsplash("photo-1610701596007-11502861dcfa"),
    unsplash("photo-1459411552884-841db9b3cc2a"),
    unsplash("photo-1600585154340-be6161a56a0c"),
    unsplash("photo-1615529182904-14819c35db37"),
  ],
  shawls: [
    catalog("olive-dupatta"),
    catalog("black-formal"),
    catalog("sage-maroon-full"),
    catalog("black-garden"),
    catalog("grey-teal-standing"),
    catalog("black-gold"),
  ],
  instagram: [
    catalog("white-embroidered"),
    catalog("emerald-full"),
    catalog("teal-gold"),
    catalog("mint-formal"),
    catalog("sage-maroon-full"),
    catalog("forest-green"),
  ],
};

export const REVIEW_VIDEOS = [
  {
    id: "v1",
    src: "/videos/review-01.mp4",
    poster: catalog("white-embroidered"),
    name: "Ayesha Khan",
    city: "Lahore",
    caption: "Unboxing and first look at the embroidered dress.",
  },
  {
    id: "v2",
    src: "/videos/review-02.mp4",
    poster: catalog("lavender-window"),
    name: "Fatima Malik",
    city: "Karachi",
    caption: "Fabric drape and finishing, shared after delivery.",
  },
  {
    id: "v3",
    src: "/videos/review-03.mp4",
    poster: catalog("emerald-full"),
    name: "Sana Ahmed",
    city: "Islamabad",
    caption: "How the emerald suit sits for an evening gathering.",
  },
  {
    id: "v4",
    src: "/videos/review-04.mp4",
    poster: catalog("sage-maroon-full"),
    name: "Hira Raza",
    city: "Faisalabad",
    caption: "Styling the sage suit with the maroon dupatta.",
  },
  {
    id: "v5",
    src: "/videos/review-05.mp4",
    poster: catalog("mint-formal"),
    name: "Zainab Ali",
    city: "Multan",
    caption: "Close look at embroidery and sleeve detail.",
  },
  {
    id: "v6",
    src: "/videos/review-06.mp4",
    poster: catalog("teal-gold"),
    name: "Maryam Sheikh",
    city: "Peshawar",
    caption: "Festive wear try-on, shared with us on WhatsApp.",
  },
  {
    id: "v7",
    src: "/videos/review-07.mp4",
    poster: catalog("grey-teal-seated"),
    name: "Areeba Hussain",
    city: "Rawalpindi",
    caption: "How the grey-teal set looks in natural light.",
  },
];
