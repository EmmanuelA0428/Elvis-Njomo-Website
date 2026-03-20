import grad1 from "@/assets/graduation-1.jpg";
import grad2 from "@/assets/graduation-2.jpg";
import grad3 from "@/assets/graduation-3.jpg";
import grad4 from "@/assets/graduation-4.jpg";
import grad5 from "@/assets/graduation-5.jpg";
import grad6 from "@/assets/graduation-6.jpg";
import grad7 from "@/assets/graduation-7.jpg";
import grad8 from "@/assets/graduation-8.jpg";
import grad9 from "@/assets/graduation-9.jpg";
import grad10 from "@/assets/graduation-10.jpg";
import land1 from "@/assets/landscape-1.jpg";
import land2 from "@/assets/landscape-2.jpg";
import land3 from "@/assets/landscape-3.jpg";
import land4 from "@/assets/landscape-4.jpg";
import land5 from "@/assets/landscape-5.jpg";
import land6 from "@/assets/landscape-6.jpg";
import land7 from "@/assets/landscape-7.jpg";
import land8 from "@/assets/landscape-8.jpg";
import land9 from "@/assets/landscape-9.jpg";
import land10 from "@/assets/landscape-10.jpg";
import wild1 from "@/assets/wildlife-1.jpg";
import wild2 from "@/assets/wildlife-2.jpg";
import wild3 from "@/assets/wildlife-3.jpg";
import wild4 from "@/assets/wildlife-4.jpg";
import wild5 from "@/assets/wildlife-5.jpg";
import wild6 from "@/assets/wildlife-6.jpg";
import wild7 from "@/assets/wildlife-7.jpg";
import wild8 from "@/assets/wildlife-8.jpg";
import wild9 from "@/assets/wildlife-9.jpg";
import wild10 from "@/assets/wildlife-10.jpg";
import sports1 from "@/assets/sports-1.jpg";
import sports2 from "@/assets/sports-2.jpg";
import sports3 from "@/assets/sports-3.jpg";
import sports4 from "@/assets/sports-4.jpg";
import sports5 from "@/assets/sports-5.jpg";
import sports6 from "@/assets/sports-6.jpg";
import sports7 from "@/assets/sports-7.jpg";
import sports8 from "@/assets/sports-8.jpg";
import sports9 from "@/assets/sports-9.jpg";
import sports10 from "@/assets/sports-10.jpg";
import sports11 from "@/assets/sports-11.jpg";
import sports12 from "@/assets/sports-12.jpg";
import sports13 from "@/assets/sports-13.jpg";
import sports14 from "@/assets/sports-14.jpg";
import sports15 from "@/assets/sports-15.jpg";
import sports16 from "@/assets/sports-16.jpg";
import sports17 from "@/assets/sports-17.jpg";
import sports18 from "@/assets/sports-18.jpg";
import sports19 from "@/assets/sports-19.jpg";
import sports20 from "@/assets/sports-20.jpg";
import sports21 from "@/assets/sports-21.jpg";
import sports22 from "@/assets/sports-22.jpg";
import dance1 from "@/assets/dance-1.jpg";
import dance2 from "@/assets/dance-2.jpg";
import dance3 from "@/assets/dance-3.jpg";
import dance4 from "@/assets/dance-4.jpg";
import dance5 from "@/assets/dance-5.jpg";
import dance6 from "@/assets/dance-6.jpg";
import dance7 from "@/assets/dance-7.jpg";
import dance8 from "@/assets/dance-8.jpg";
import dance9 from "@/assets/dance-9.jpg";
import dance10 from "@/assets/dance-10.jpg";
import dance11 from "@/assets/dance-11.jpg";
import dance12 from "@/assets/dance-12.jpg";
import dance13 from "@/assets/dance-13.jpg";
import dance14 from "@/assets/dance-14.jpg";
import dance15 from "@/assets/dance-15.jpg";
import dance16 from "@/assets/dance-16.jpg";
import dance17 from "@/assets/dance-17.jpg";
import dance18 from "@/assets/dance-18.jpg";
import theater1 from "@/assets/theater-1.jpg";
import theater2 from "@/assets/theater-2.jpg";
import theater3 from "@/assets/theater-3.jpg";
import theater4 from "@/assets/theater-4.jpg";
import theater5 from "@/assets/theater-5.jpg";
import theater6 from "@/assets/theater-6.jpg";
import theater7 from "@/assets/theater-7.jpg";
import theater8 from "@/assets/theater-8.jpg";
import theater9 from "@/assets/theater-9.jpg";
import theater10 from "@/assets/theater-10.jpg";

export interface Photo {
  id: string;
  src: string;
  alt: string;
}

export interface Collection {
  id: string;
  title: string;
  cover: string;
  photoCount: number;
  photos: Photo[];
}

const graduationPhotos: Photo[] = [
  { id: "graduation-1", src: grad1, alt: "Graduation celebration with champagne on the dock" },
  { id: "graduation-2", src: grad2, alt: "Group of graduates at the boathouse" },
  { id: "graduation-3", src: grad3, alt: "Graduates throwing caps in the air" },
  { id: "graduation-4", src: grad4, alt: "Friends celebrating graduation together" },
  { id: "graduation-5", src: grad5, alt: "Graduate speaking at ceremony" },
  { id: "graduation-6", src: grad6, alt: "Graduate holding flowers" },
  { id: "graduation-7", src: grad7, alt: "Graduate spinning with cap and gown" },
  { id: "graduation-8", src: grad8, alt: "Graduate tossing cap among ceremony chairs" },
  { id: "graduation-9", src: grad9, alt: "Three graduates posing on campus lawn" },
  { id: "graduation-10", src: grad10, alt: "Group of graduates on steps of Medbery Hall" },
];

const sportsPhotos: Photo[] = [
  { id: "sports-16", src: sports16, alt: "Hobart basketball player driving to the hoop" },
  { id: "sports-6", src: sports6, alt: "Hobart soccer player celebrating goal" },
  { id: "sports-13", src: sports13, alt: "Hobart hockey forward battling at the crease" },
  { id: "sports-3", src: sports3, alt: "Tennis player ready to receive serve" },
  { id: "sports-20", src: sports20, alt: "Football players contesting a pass" },
  { id: "sports-8", src: sports8, alt: "Soccer players battling in the rain" },
  { id: "sports-1", src: sports1, alt: "Volleyball player spiking over the net" },
  { id: "sports-18", src: sports18, alt: "Women's hockey faceoff at center ice" },
  { id: "sports-10", src: sports10, alt: "Hobart soccer player striking the ball" },
  { id: "sports-15", src: sports15, alt: "Hobart basketball guard dribbling past defender" },
  { id: "sports-5", src: sports5, alt: "Goalkeeper leaping for a save" },
  { id: "sports-12", src: sports12, alt: "Hobart hockey player chasing loose puck" },
  { id: "sports-2", src: sports2, alt: "Volleyball player diving for the ball" },
  { id: "sports-17", src: sports17, alt: "Basketball player taking a contested jump shot" },
  { id: "sports-9", src: sports9, alt: "Herons soccer player dribbling downfield" },
  { id: "sports-4", src: sports4, alt: "Tennis player reaching for a volley" },
  { id: "sports-19", src: sports19, alt: "Women's hockey player taking a wrist shot" },
  { id: "sports-11", src: sports11, alt: "Women's soccer players battling for possession" },
  { id: "sports-7", src: sports7, alt: "Hobart player shooting near the goal" },
  { id: "sports-21", src: sports21, alt: "Hobart quarterback dropping back to pass" },
  { id: "sports-14", src: sports14, alt: "Hobart hockey faceoff in offensive zone" },
  { id: "sports-22", src: sports22, alt: "Football players contesting a pass" },
];

export const collections: Collection[] = [
  {
    id: "sports",
    title: "Sports",
    cover: sports6,
    photoCount: 22,
    photos: sportsPhotos,
  },
  {
    id: "landscapes",
    title: "Landscapes",
    cover: land4,
    photoCount: 10,
    photos: [
      { id: "land-1", src: land1, alt: "Waterfall cascading through autumn forest" },
      { id: "land-2", src: land2, alt: "Mirror lake reflecting mountains and trees" },
      { id: "land-3", src: land3, alt: "Geese on a lake with misty mountains" },
      { id: "land-4", src: land4, alt: "Boats at a marina with mountain backdrop" },
      { id: "land-5", src: land5, alt: "Mountain reflected in still blue lake" },
      { id: "land-6", src: land6, alt: "Aerial view of harbour and golden hills" },
      { id: "land-7", src: land7, alt: "Winding river through lush valley" },
      { id: "land-8", src: land8, alt: "Turquoise river through mountain gorge" },
      { id: "land-9", src: land9, alt: "Dramatic mountain with rustic foreground" },
      { id: "land-10", src: land10, alt: "Snow-capped peaks above clouds" },
    ],
  },
  {
    id: "graduation",
    title: "Graduation",
    cover: grad3,
    photoCount: 10,
    photos: graduationPhotos,
  },
  {
    id: "wildlife",
    title: "Wildlife",
    cover: wild6,
    photoCount: 10,
    photos: [
      { id: "wild-1", src: wild1, alt: "Giraffes among lush greenery" },
      { id: "wild-2", src: wild2, alt: "Zebras and giraffes in safari landscape" },
      { id: "wild-3", src: wild3, alt: "Flamingo walking in dappled light" },
      { id: "wild-4", src: wild4, alt: "Baboons resting on rocks" },
      { id: "wild-5", src: wild5, alt: "Rhinos grazing at golden hour" },
      { id: "wild-6", src: wild6, alt: "Lioness resting on a grassy hill" },
      { id: "wild-7", src: wild7, alt: "Crocodile camouflaged in grass" },
      { id: "wild-8", src: wild8, alt: "Small bird perched on a branch" },
      { id: "wild-9", src: wild9, alt: "Golden bird clinging to a twig" },
      { id: "wild-10", src: wild10, alt: "Squirrel on a dark tree branch" },
    ],
  },
  {
    id: "dance",
    title: "Dance",
    cover: dance1,
    photoCount: 18,
    photos: [
      { id: "dance-1", src: dance1, alt: "Kinetic Dance Collective salsa duet under pink lights" },
      { id: "dance-2", src: dance2, alt: "Ballet dancers in black unitards on red-lit stage" },
      { id: "dance-3", src: dance3, alt: "Dance ensemble in dramatic pyramid formation" },
      { id: "dance-4", src: dance4, alt: "Contemporary dancers in crop tops and cargo pants" },
      { id: "dance-5", src: dance5, alt: "Hip-hop crew in silver tops striking a pose" },
      { id: "dance-6", src: dance6, alt: "Faculty dance rehearsal in warm colorful costumes" },
      { id: "dance-7", src: dance7, alt: "Dancers in pastel and warm tones moving across stage" },
      { id: "dance-8", src: dance8, alt: "Dancers in flowing skirts illuminated by spotlight" },
      { id: "dance-9", src: dance9, alt: "Ensemble standing in blue and pink stage light" },
      { id: "dance-10", src: dance10, alt: "Dancers in synchronized plié with arms extended" },
      { id: "dance-11", src: dance11, alt: "Solo dancer leaning back under a narrow spotlight" },
      { id: "dance-12", src: dance12, alt: "Dancer in black dress reaching outward dramatically" },
      { id: "dance-13", src: dance13, alt: "Trio of dancers performing emotional contemporary piece" },
      { id: "dance-14", src: dance14, alt: "Jazz ensemble in white tops and black hats on purple stage" },
      { id: "dance-15", src: dance15, alt: "Contemporary dancer elevated as group reaches from below" },
      { id: "dance-16", src: dance16, alt: "Dance crew standing with raised hands against violet backdrop" },
      { id: "dance-17", src: dance17, alt: "Acrobatic dancers kicking overhead against teal backdrop" },
      { id: "dance-18", src: dance18, alt: "Kinetic Dance Collective duet with red costumes" },
    ],
  },
  {
    id: "theater",
    title: "Theater",
    cover: theater1,
    photoCount: 10,
    photos: [
      { id: "theater-1", src: theater1, alt: "Outdoor theater scene with actors in period costumes at dusk" },
      { id: "theater-2", src: theater2, alt: "Airness play cast gathered around a bar on checkered floor" },
      { id: "theater-3", src: theater3, alt: "Three actors in an intimate conversation on stage" },
      { id: "theater-4", src: theater4, alt: "Two actors sharing a moment under red stage light" },
      { id: "theater-5", src: theater5, alt: "Actor in wheelchair and performer in red dress on checkered stage" },
      { id: "theater-6", src: theater6, alt: "Full cast gathered on checkered floor under dramatic lighting" },
      { id: "theater-7", src: theater7, alt: "Cast celebrating with arms raised in colorful costumes" },
      { id: "theater-8", src: theater8, alt: "Ensemble dancing on checkered floor under purple and pink lights" },
      { id: "theater-9", src: theater9, alt: "Two actresses in white gowns on outdoor brick stage" },
      { id: "theater-10", src: theater10, alt: "Actor on garden stage steps with torches at twilight" },
    ],
  },
];
