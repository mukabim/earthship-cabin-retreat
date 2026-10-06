export type GalleryCategory =
  | "lodge"
  | "interiors"
  | "dining"
  | "adventure"
  | "nature"
  | "camping";

export type GalleryPhoto = {
  type: "image";
  thumb: string;
  src: string;
  title: string;
  category: GalleryCategory;
};

export type GalleryFilm = {
  type: "video";
  src: string;
  poster: string;
  title: string;
};

export const GALLERY_FILTER_EVENT = "gallery:filter";

export const categoryLabels: Record<GalleryCategory, string> = {
  lodge: "The Lodge",
  interiors: "Rooms & Interiors",
  dining: "Dining",
  adventure: "Mt. Kenya Adventures",
  nature: "Nature & Wildlife",
  camping: "Camping",
};

const fresh = (
  n: number,
  title: string,
  category: GalleryCategory
): GalleryPhoto => ({
  type: "image",
  thumb: `/media/thumbs/n${n}.webp`,
  src: `/media/photos/n${n}.webp`,
  title,
  category,
});

const interiorTitles: Record<number, string> = {
  1: "Lodge Character",
  10: "Lounge & Dining",
  25: "Spacious Suite",
  40: "Veranda Views",
  50: "Cabin Bedroom",
};

const interior = (n: number): GalleryPhoto => ({
  type: "image",
  thumb: `/media/thumbs/i${n}.webp`,
  src: `/${n}.webp`,
  title: interiorTitles[n] ?? "Timber Interiors",
  category: "interiors",
});

const freshPhotos: GalleryPhoto[] = [
  fresh(84, "The Lodge by Night", "lodge"),
  fresh(35, "Zebra & Mt. Kenya", "nature"),
  fresh(8, "Grilled Chicken & Corn", "dining"),
  fresh(13, "Summit Push", "adventure"),
  fresh(36, "Sunlit Facade", "lodge"),
  fresh(2, "Pitch-Ready Tents", "camping"),
  fresh(16, "Elephants on the Road", "nature"),
  fresh(25, "Fresh Fruit Platter", "dining"),
  fresh(53, "Lounge & Bar", "interiors"),
  fresh(44, "Glacier Views", "adventure"),
  fresh(59, "Lodge Front", "lodge"),
  fresh(17, "Sundowner Cocktails", "dining"),
  fresh(68, "Mt. Kenya Above the Clouds", "nature"),
  fresh(55, "Attic Bunks", "interiors"),
  fresh(83, "Camp Under the Peaks", "camping"),
  fresh(80, "Slow-Cooked Oxtail", "dining"),
  fresh(12, "Mt. Kenya Trails", "adventure"),
  fresh(37, "Timber & Brick", "lodge"),
  fresh(31, "Cosmos Fields", "nature"),
  fresh(81, "Whole Fried Fish", "dining"),
  fresh(57, "Glass Dining Room", "interiors"),
  fresh(50, "Climbing Team", "adventure"),
  fresh(23, "Morning on the Lawn", "lodge"),
  fresh(6, "Full Breakfast", "dining"),
  fresh(64, "Highland Sunset", "adventure"),
  fresh(3, "Camping on the Lawn", "camping"),
  fresh(72, "Hydrangeas", "nature"),
  fresh(78, "At the Bar", "dining"),
  fresh(56, "Timber Lounge", "interiors"),
  fresh(14, "Trail to the Peaks", "adventure"),
  fresh(48, "Lodge Among the Trees", "lodge"),
  fresh(9, "Hearty Beef Stew", "dining"),
  fresh(45, "Laikipia Plains", "nature"),
  fresh(15, "Guided Climbs", "adventure"),
  fresh(54, "Bunk Room", "interiors"),
  fresh(7, "Spiced Rice & Chicken", "dining"),
  fresh(58, "Front Lawn", "lodge"),
  fresh(32, "Pink Cosmos", "nature"),
  fresh(43, "Rock Scramble", "adventure"),
  fresh(82, "Farm Eggs Breakfast", "dining"),
  fresh(62, "Reception Detail", "interiors"),
  fresh(38, "The Lodge, Side View", "lodge"),
  fresh(47, "Grazing Sheep", "nature"),
  fresh(27, "Rocky Ascent", "adventure"),
  fresh(19, "Roast Chicken", "dining"),
  fresh(22, "Red-Carpet Corridor", "interiors"),
  fresh(63, "Lazy Afternoons", "lodge"),
  fresh(29, "Wild Lilies", "nature"),
  fresh(51, "Rock Face", "adventure"),
  fresh(18, "Breakfast Spread", "dining"),
  fresh(60, "Feature Wall", "interiors"),
  fresh(39, "Lodge Grounds", "lodge"),
  fresh(73, "Stormy Highland Skies", "nature"),
  fresh(42, "Hiking Group", "adventure"),
  fresh(77, "Garden Lunch Plate", "dining"),
  fresh(40, "Gabled Rooflines", "lodge"),
  fresh(30, "Garden Blooms", "nature"),
  fresh(41, "Gear Check", "adventure"),
  fresh(71, "Salad & Grill", "dining"),
  fresh(61, "Wide Grounds", "lodge"),
  fresh(69, "Native Shrubs", "nature"),
  fresh(52, "Bouldering", "adventure"),
  fresh(66, "Dining Together", "dining"),
  fresh(49, "Arrival Drive", "lodge"),
  fresh(28, "Garden Grounds", "nature"),
  fresh(70, "Warm Service", "dining"),
  fresh(65, "Parking & Grounds", "lodge"),
  fresh(46, "Plains at Dusk", "nature"),
  fresh(4, "Coffee Bar", "dining"),
  fresh(74, "Through the Trees", "lodge"),
  fresh(76, "Bar Bites", "dining"),
  fresh(75, "Highland Setting", "lodge"),
  fresh(67, "Working Outdoors", "lodge"),
];

const legacyPhotos: GalleryPhoto[] = [
  {
    type: "image",
    thumb: "/media/thumbs/lodge-hd.webp",
    src: "/lodge-hd.webp",
    title: "The Lodge",
    category: "lodge",
  },
  {
    type: "image",
    thumb: "/media/thumbs/gallery30.webp",
    src: "/gallery30.webp",
    title: "Reception Lounge",
    category: "interiors",
  },
  {
    type: "image",
    thumb: "/media/thumbs/gallery11.webp",
    src: "/gallery11.webp",
    title: "Highland Sunset",
    category: "nature",
  },
  {
    type: "image",
    thumb: "/media/thumbs/gallery16.webp",
    src: "/gallery16.webp",
    title: "On the Farm",
    category: "nature",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  ...freshPhotos,
  ...legacyPhotos,
  ...Array.from({ length: 63 }, (_, i) => interior(i + 1)),
];

const film = (name: string, title: string): GalleryFilm => ({
  type: "video",
  src: `/${name}.mp4`,
  poster: `/media/posters/${name}.webp`,
  title,
});

export const galleryFilms: GalleryFilm[] = [
  film("v1", "Welcome to EarthShip"),
  film("64", "Arrival at the Lodge"),
  film("v15", "Fireside Evenings"),
  film("v3", "Timau River"),
  film("v11", "Highland Blooms"),
  film("v13", "The Bar"),
  film("vid5", "Campfire"),
  film("v4", "Bunk Room"),
  film("v10", "Garden Grounds"),
  film("vid3", "Forest Canopy"),
  film("v12", "Lodge Life"),
  film("v9", "Garden Dahlias"),
  film("v14", "Rainy Season"),
  film("v5", "Hallways"),
  film("vid6", "Campfire Glow"),
  film("v8", "Corridor"),
  film("v2", "Room Details"),
  film("vid2", "Patio Nights"),
];
