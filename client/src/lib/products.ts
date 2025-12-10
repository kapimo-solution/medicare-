export interface ProductVariant {
  id: string;
  title: string;
  price: string;
  available: boolean;
}

export interface Product {
  id: string;
  handle: string; // Shopify SEO handle
  name: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  images: string[]; // Multiple images support
  badge?: string;
  isSoldOut?: boolean;
  description?: string;
  benefits?: string[];
  howToUse?: string;
  variants?: ProductVariant[];
  options?: { name: string; values: string[] }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "gid://shopify/Product/1",
    handle: "age-r-booster-pro",
    name: "AGE-R Booster Pro",
    price: "$315.00",
    originalPrice: "$450.00",
    rating: 4.7,
    reviews: 63,
    image: "https://themedicube.com.sg/cdn/shop/files/b61dee968012e10cc40e27a3b60a385d.jpg?v=1752930419&width=533",
    images: [
      "https://themedicube.com.sg/cdn/shop/files/b61dee968012e10cc40e27a3b60a385d.jpg?v=1752930419&width=533",
      "https://themedicube.com.sg/cdn/shop/files/BoosterPro_01.jpg?v=1763975016&width=533"
    ],
    badge: "-30%",
    description: "6-in-1 High-tech beauty device. Experience professional grade aesthetic effects at home with 4 modes: Booster, MC, EMS, and Air Shot.",
    benefits: ["Pore care", "Elasticity care", "Volume care", "Radiance care"],
    howToUse: "Select mode and level. Massage along facial contours.",
    options: [{ name: "Color", values: ["Black", "Pink", "Lemon"] }],
    variants: [
      { id: "v1", title: "Black", price: "$315.00", available: true },
      { id: "v2", title: "Pink", price: "$315.00", available: true },
      { id: "v3", title: "Lemon", price: "$315.00", available: true }
    ]
  },
  {
    id: "gid://shopify/Product/2",
    handle: "deep-reviving-bakuchiol-retinol-serum",
    name: "Deep Reviving Bakuchiol Retinol Serum",
    price: "$38.00",
    originalPrice: "$40.00",
    rating: 4.9,
    reviews: 37,
    image: "https://themedicube.com.sg/cdn/shop/files/th_a7f286d0-30fe-48d5-bd58-37495f9cf72d.jpg?v=1721395641&width=533",
    images: [
      "https://themedicube.com.sg/cdn/shop/files/th_a7f286d0-30fe-48d5-bd58-37495f9cf72d.jpg?v=1721395641&width=533",
      "https://themedicube.com.sg/cdn/shop/files/2_2d67a38b-989f-4264-ac47-63c0a3ad7aa2.jpg?v=1721395641&width=533"
    ],
    description: "Remarkable benefits of retinol with low irritation. Perfect for sensitive skin anti-aging care.",
    benefits: ["Hypoallergenic retinol", "Improves skin texture", "Pore tightening"],
    howToUse: "Apply a small amount after toner. Use sunscreen during the day."
  },
  {
    id: "gid://shopify/Product/3",
    handle: "red-succinic-acid-panthenol-pads",
    name: "Red Succinic Acid Panthenol Pads",
    price: "$31.50",
    originalPrice: "$37.00",
    rating: 4.8,
    reviews: 18,
    image: "https://themedicube.com.sg/cdn/shop/files/th_07974cf1-0a44-454f-9067-130657ee45a9.jpg?v=1723003755&width=533",
    images: [
      "https://themedicube.com.sg/cdn/shop/files/th_07974cf1-0a44-454f-9067-130657ee45a9.jpg?v=1723003755&width=533",
      "https://themedicube.com.sg/cdn/shop/files/01_ba45d85d-22a3-4730-ba73-7db8fc719663.jpg?v=1763974905&width=533"
    ],
    badge: "Sold out",
    isSoldOut: true,
    description: "Anti-Trouble Toner Pads with Niacinamide + Salicylic Acid. Clears acne & breakouts.",
    benefits: ["Acne care", "Soothing", "Exfoliation"],
    howToUse: "Wipe face with embossed side, then smooth side. Pat essence into skin."
  },
  {
    id: "gid://shopify/Product/4",
    handle: "collagen-niacinamide-jelly-cream",
    name: "Collagen Niacinamide Jelly Cream",
    price: "$30.60",
    originalPrice: "$55.00",
    rating: 4.6,
    reviews: 114,
    image: "https://themedicube.com.sg/cdn/shop/files/th_017e1817-3997-41ab-bdad-9aad99b4c5e2.jpg?v=1723004222&width=533",
    images: [
      "https://themedicube.com.sg/cdn/shop/files/th_017e1817-3997-41ab-bdad-9aad99b4c5e2.jpg?v=1723004222&width=533",
      "https://themedicube.com.sg/cdn/shop/files/01_45ac2e51-a736-471e-b040-7599229418f3.jpg?v=1763974808&width=533"
    ],
    badge: "Sold out",
    isSoldOut: true,
    description: "Niacinamide + Freeze-dried Hydrolyzed Collagen. Hydrate, Plump & Glow.",
    benefits: ["Glass skin glow", "Deep hydration", "Elasticity boost"],
    howToUse: "Apply generous amount as the last step of skincare."
  },
  {
    id: "gid://shopify/Product/5",
    handle: "triple-deep-erasing-cream",
    name: "Triple Deep Erasing Cream",
    price: "$30.60",
    originalPrice: "$42.50",
    rating: 4.8,
    reviews: 215,
    image: "https://themedicube.com.sg/cdn/shop/files/th_f870f311-d4d7-42ae-983d-d41aabcfa0ff.jpg?v=1712822697&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/th_f870f311-d4d7-42ae-983d-d41aabcfa0ff.jpg?v=1712822697&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Collagen + Hyaluronic Acid + Niacinamide + Shea Butter. The ultimate solution for wrinkles and hydration.",
    benefits: ["Wrinkle care", "Deep moisture", "Skin barrier support"],
    howToUse: "Massage into face and neck in upward motions."
  },
  {
    id: "gid://shopify/Product/6",
    handle: "deep-vita-c-pad",
    name: "Deep Vita C Pad",
    price: "$35.00",
    originalPrice: "$49.00",
    rating: 4.9,
    reviews: 154,
    image: "https://themedicube.com.sg/cdn/shop/files/1_001d8bab-7ecd-473f-b1a6-726a3993b12d.jpg?v=1734327148&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/1_001d8bab-7ecd-473f-b1a6-726a3993b12d.jpg?v=1734327148&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Vitamin C + Niacinamide pads for radiant, bright skin. Fades dark spots visibly.",
    benefits: ["Brightening", "Dark spot fading", "Even skin tone"],
    howToUse: "Swipe across face after cleansing. Focus on dark spots."
  },
  {
    id: "gid://shopify/Product/7",
    handle: "zero-pore-pad-2-0",
    name: "Zero Pore Pad 2.0",
    price: "$31.50",
    originalPrice: "$37.00",
    rating: 4.8,
    reviews: 260,
    image: "https://themedicube.com.sg/cdn/shop/files/01_62c2252d-db74-4079-abb9-937ef5c80a2d.jpg?v=1763974337&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/01_62c2252d-db74-4079-abb9-937ef5c80a2d.jpg?v=1763974337&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Sold over 280M Worldwide. The ultimate pore tightening toner pad.",
    benefits: ["Pore tightening", "Sebum control", "Dead skin cell removal"],
    howToUse: "Use AM and PM after cleansing."
  },
  {
    id: "gid://shopify/Product/8",
    handle: "red-acne-body-wash",
    name: "Red Acne Body Wash",
    price: "$38.10",
    originalPrice: "$43.80",
    rating: 4.7,
    reviews: 135,
    image: "https://themedicube.com.sg/cdn/shop/files/th_f51a526c-2525-4bb5-abe0-38ca97c4b9fe.jpg?v=1713406538&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/th_f51a526c-2525-4bb5-abe0-38ca97c4b9fe.jpg?v=1713406538&width=533"],
    description: "Salicylic Acid + Niacinamide + Lactic Acid. Clears body acne effectively.",
    benefits: ["Body acne care", "Exfoliation", "Soothing"],
    howToUse: "Lather on body, focus on back and chest areas. Rinse thoroughly."
  },
  {
    id: "gid://shopify/Product/9",
    handle: "soyxidil-shampoo",
    name: "Soyxidil Shampoo",
    price: "$36.90",
    originalPrice: "$58.00",
    rating: 4.8,
    reviews: 72,
    image: "https://themedicube.com.sg/cdn/shop/files/th_a84e311c-625c-410d-bbdf-269120606355.jpg?v=1712822790&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/th_a84e311c-625c-410d-bbdf-269120606355.jpg?v=1712822790&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Soyxidil Line, Thinning & Scalp Care. Promotes healthy hair growth environment.",
    benefits: ["Hair loss relief", "Scalp nourishment", "Volume boost"],
    howToUse: "Massage into wet scalp. Leave on for 2-3 minutes before rinsing."
  },
  {
    id: "gid://shopify/Product/10",
    handle: "zero-pore-one-day-serum",
    name: "Zero Pore One Day Serum",
    price: "$34.90",
    originalPrice: "$37.40",
    rating: 4.6,
    reviews: 56,
    image: "https://themedicube.com.sg/cdn/shop/files/th_0c7e0922-6b9e-41e5-87f8-63dfc154b111.jpg?v=1758676296&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/th_0c7e0922-6b9e-41e5-87f8-63dfc154b111.jpg?v=1758676296&width=533"],
    description: "AHA+BHA+PHA pore care serum. Tightens pores in just one day.",
    benefits: ["Pore tightening", "Sebum control", "Smoothing"],
    howToUse: "Apply after toner, focusing on enlarged pores."
  },
  {
    id: "gid://shopify/Product/11",
    handle: "age-r-glutathione-glow-ampoule",
    name: "AGE-R Glutathione Glow Ampoule 30ml",
    price: "$22.90",
    originalPrice: "$38.00",
    rating: 4.9,
    reviews: 27,
    image: "https://themedicube.com.sg/cdn/shop/files/ME_SG_th.jpg?v=1738915844&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/ME_SG_th.jpg?v=1738915844&width=533"],
    badge: "-40%",
    description: "Radiant Brightness Ampoule. High purity Glutathione for glowing skin.",
    benefits: ["Brightening", "Glow booster", "Pigmentation care"],
    howToUse: "Use with Booster Pro device for enhanced absorption."
  },
  {
    id: "gid://shopify/Product/12",
    handle: "youth-boosting-collagen-set",
    name: "Youth Boosting Collagen Set",
    price: "$80.00",
    originalPrice: "$98.80",
    rating: 4.8,
    reviews: 78,
    image: "https://themedicube.com.sg/cdn/shop/files/e803095a33974ca8adb8b869f6f87395_tplv-aphluv4xwc-origin-jpeg.jpg?v=1734504057&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/e803095a33974ca8adb8b869f6f87395_tplv-aphluv4xwc-origin-jpeg.jpg?v=1734504057&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Glass Glow Line, Fine Lines & Wrinkles complete set.",
    benefits: ["Total anti-aging", "Elasticity", "Hydration"],
    howToUse: "Follow individual product instructions in the set."
  },
  {
    id: "gid://shopify/Product/13",
    handle: "triple-collagen-serum",
    name: "Triple Collagen Serum",
    price: "$27.50",
    originalPrice: "$28.15",
    rating: 4.7,
    reviews: 55,
    image: "https://themedicube.com.sg/cdn/shop/files/00_134c8a63-471b-475c-831b-81271a9950a5.jpg?v=1763629452&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/00_134c8a63-471b-475c-831b-81271a9950a5.jpg?v=1763629452&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Collagen + Hyaluronic Acid + Niacinamide serum for plump skin.",
    benefits: ["Plumping", "Hydration", "Elasticity"],
    howToUse: "Apply generously on face and neck."
  },
  {
    id: "gid://shopify/Product/14",
    handle: "triple-collagen-toner",
    name: "Triple Collagen Toner",
    price: "$27.50",
    originalPrice: "$28.15",
    rating: 4.7,
    reviews: 55,
    image: "https://themedicube.com.sg/cdn/shop/files/00_2a827457-70f0-49a1-920b-e02bad0c01b2.jpg?v=1763629514&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/00_2a827457-70f0-49a1-920b-e02bad0c01b2.jpg?v=1763629514&width=533"],
    badge: "Sold out",
    isSoldOut: true,
    description: "Essence toner that deeply hydrates and prepares skin.",
    benefits: ["Hydration prep", "Soothing", "Elasticity"],
    howToUse: "Apply with hands or cotton pad after cleansing."
  },
  {
    id: "gid://shopify/Product/15",
    handle: "soyxidil-2in1-treatment",
    name: "Soyxidil 2in1 Treatment",
    price: "$34.90",
    originalPrice: "$56.00",
    rating: 4.6,
    reviews: 39,
    image: "https://themedicube.com.sg/cdn/shop/files/th__2in1.jpg?v=1712823087&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/th__2in1.jpg?v=1712823087&width=533"],
    description: "Soyxidil Line, Thinning & Scalp Care treatment.",
    benefits: ["Hair strengthening", "Scalp care", "Softness"],
    howToUse: "Apply to wet hair and scalp. Rinse well."
  },
  {
    id: "gid://shopify/Product/16",
    handle: "soy-protein-lpp-first-hair-pack",
    name: "Soy Protein Lpp First Hair Pack",
    price: "$30.00",
    originalPrice: "$55.00",
    rating: 5.0,
    reviews: 1,
    image: "https://themedicube.com.sg/cdn/shop/files/LPP_01.jpg?v=1704860999&width=533",
    images: ["https://themedicube.com.sg/cdn/shop/files/LPP_01.jpg?v=1704860999&width=533"],
    description: "Soyxidil Line, Dry & Damage Care protein pack.",
    benefits: ["Damage repair", "Protein recharge", "Silky hair"],
    howToUse: "Apply to damaged ends. Leave for 5 mins."
  }
];
