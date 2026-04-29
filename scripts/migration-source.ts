/** Snapshot for optional `npm run migrate:sanity` when JPEGs exist under `migration-assets/`. */
export type MigrationPhoto = { id: string; alt: string };
export type MigrationCollection = {
  id: string;
  title: string;
  coverFile: string;
  photos: MigrationPhoto[];
};

export const migrationCollections: MigrationCollection[] = [
  {
    "id": "theater",
    "title": "Theater",
    "coverFile": "theater-1.jpg",
    "photos": [
      {
        "id": "theater-13",
        "alt": "Actor crouched center stage surrounded by candlelight circle"
      },
      {
        "id": "theater-1",
        "alt": "Outdoor theater scene with actors in period costumes at dusk"
      },
      {
        "id": "theater-11",
        "alt": "Actor in blue striped costume performing with cape and candles"
      },
      {
        "id": "theater-5",
        "alt": "Actor in wheelchair and performer in red dress on checkered stage"
      },
      {
        "id": "theater-9",
        "alt": "Two actresses in white gowns on outdoor brick stage"
      },
      {
        "id": "theater-14",
        "alt": "Two actors in period costumes sharing an emotional moment on stage"
      },
      {
        "id": "theater-3",
        "alt": "Three actors in an intimate conversation on stage"
      },
      {
        "id": "theater-7",
        "alt": "Cast celebrating with arms raised in colorful costumes"
      },
      {
        "id": "theater-12",
        "alt": "Actors in golden period costumes with servant carrying tray"
      },
      {
        "id": "theater-4",
        "alt": "Two actors sharing a moment under red stage light"
      },
      {
        "id": "theater-15",
        "alt": "Actor in dark robes silhouetted under dramatic side light"
      },
      {
        "id": "theater-2",
        "alt": "Airness play cast gathered around a bar on checkered floor"
      },
      {
        "id": "theater-10",
        "alt": "Actor on garden stage steps with torches at twilight"
      },
      {
        "id": "theater-6",
        "alt": "Full cast gathered on checkered floor under dramatic lighting"
      },
      {
        "id": "theater-8",
        "alt": "Ensemble dancing on checkered floor under purple and pink lights"
      },
      {
        "id": "theater-16",
        "alt": "Theater performance photo 16"
      },
      {
        "id": "theater-17",
        "alt": "Theater performance photo 17"
      },
      {
        "id": "theater-18",
        "alt": "Theater performance photo 18"
      },
      {
        "id": "theater-19",
        "alt": "Theater performance photo 19"
      },
      {
        "id": "theater-20",
        "alt": "Theater performance photo 20"
      },
      {
        "id": "theater-21",
        "alt": "Theater performance photo 21"
      },
      {
        "id": "theater-22",
        "alt": "Theater performance photo 22"
      }
    ]
  },
  {
    "id": "dance",
    "title": "Dance",
    "coverFile": "dance-1.jpg",
    "photos": [
      {
        "id": "dance-1",
        "alt": "Kinetic Dance Collective salsa duet under pink lights"
      },
      {
        "id": "dance-2",
        "alt": "Ballet dancers in black unitards on red-lit stage"
      },
      {
        "id": "dance-3",
        "alt": "Dance ensemble in dramatic pyramid formation"
      },
      {
        "id": "dance-4",
        "alt": "Contemporary dancers in crop tops and cargo pants"
      },
      {
        "id": "dance-5",
        "alt": "Hip-hop crew in silver tops striking a pose"
      },
      {
        "id": "dance-6",
        "alt": "Faculty dance rehearsal in warm colorful costumes"
      },
      {
        "id": "dance-7",
        "alt": "Dancers in pastel and warm tones moving across stage"
      },
      {
        "id": "dance-8",
        "alt": "Dancers in flowing skirts illuminated by spotlight"
      },
      {
        "id": "dance-9",
        "alt": "Ensemble standing in blue and pink stage light"
      },
      {
        "id": "dance-10",
        "alt": "Dancers in synchronized plié with arms extended"
      },
      {
        "id": "dance-11",
        "alt": "Solo dancer leaning back under a narrow spotlight"
      },
      {
        "id": "dance-12",
        "alt": "Dancer in black dress reaching outward dramatically"
      },
      {
        "id": "dance-13",
        "alt": "Trio of dancers performing emotional contemporary piece"
      },
      {
        "id": "dance-14",
        "alt": "Jazz ensemble in white tops and black hats on purple stage"
      },
      {
        "id": "dance-15",
        "alt": "Contemporary dancer elevated as group reaches from below"
      },
      {
        "id": "dance-16",
        "alt": "Dance crew standing with raised hands against violet backdrop"
      },
      {
        "id": "dance-17",
        "alt": "Acrobatic dancers kicking overhead against teal backdrop"
      },
      {
        "id": "dance-18",
        "alt": "Kinetic Dance Collective duet with red costumes"
      },
      {
        "id": "dance-19",
        "alt": "Solo dancer draped in illuminated vine-patterned fabric"
      },
      {
        "id": "dance-20",
        "alt": "Three dancers with flowing vine-patterned wing costumes"
      },
      {
        "id": "dance-21",
        "alt": "Duet in glowing vine-patterned gowns back to back"
      },
      {
        "id": "dance-22",
        "alt": "Aerial dancers connected by harnesses in colorful costumes"
      }
    ]
  },
  {
    "id": "sports",
    "title": "Sports",
    "coverFile": "sports-6.jpg",
    "photos": [
      {
        "id": "sports-16",
        "alt": "Hobart basketball player driving to the hoop"
      },
      {
        "id": "sports-6",
        "alt": "Hobart soccer player celebrating goal"
      },
      {
        "id": "sports-13",
        "alt": "Hobart hockey forward battling at the crease"
      },
      {
        "id": "sports-3",
        "alt": "Tennis player ready to receive serve"
      },
      {
        "id": "sports-20",
        "alt": "Football players contesting a pass"
      },
      {
        "id": "sports-8",
        "alt": "Soccer players battling in the rain"
      },
      {
        "id": "sports-1",
        "alt": "Volleyball player spiking over the net"
      },
      {
        "id": "sports-18",
        "alt": "Women's hockey faceoff at center ice"
      },
      {
        "id": "sports-10",
        "alt": "Hobart soccer player striking the ball"
      },
      {
        "id": "sports-15",
        "alt": "Hobart basketball guard dribbling past defender"
      },
      {
        "id": "sports-5",
        "alt": "Goalkeeper leaping for a save"
      },
      {
        "id": "sports-12",
        "alt": "Hobart hockey player chasing loose puck"
      },
      {
        "id": "sports-2",
        "alt": "Volleyball player diving for the ball"
      },
      {
        "id": "sports-17",
        "alt": "Basketball player taking a contested jump shot"
      },
      {
        "id": "sports-9",
        "alt": "Herons soccer player dribbling downfield"
      },
      {
        "id": "sports-4",
        "alt": "Tennis player reaching for a volley"
      },
      {
        "id": "sports-19",
        "alt": "Women's hockey player taking a wrist shot"
      },
      {
        "id": "sports-11",
        "alt": "Women's soccer players battling for possession"
      },
      {
        "id": "sports-7",
        "alt": "Hobart player shooting near the goal"
      },
      {
        "id": "sports-21",
        "alt": "Hobart quarterback dropping back to pass"
      },
      {
        "id": "sports-14",
        "alt": "Hobart hockey faceoff in offensive zone"
      },
      {
        "id": "sports-22",
        "alt": "Football players contesting a pass"
      }
    ]
  },
  {
    "id": "graduation",
    "title": "Graduation",
    "coverFile": "graduation-3.jpg",
    "photos": [
      {
        "id": "graduation-1",
        "alt": "Graduation celebration with champagne on the dock"
      },
      {
        "id": "graduation-2",
        "alt": "Group of graduates at the boathouse"
      },
      {
        "id": "graduation-3",
        "alt": "Graduates throwing caps in the air"
      },
      {
        "id": "graduation-4",
        "alt": "Friends celebrating graduation together"
      },
      {
        "id": "graduation-5",
        "alt": "Graduate speaking at ceremony"
      },
      {
        "id": "graduation-6",
        "alt": "Graduate holding flowers"
      },
      {
        "id": "graduation-7",
        "alt": "Graduate spinning with cap and gown"
      },
      {
        "id": "graduation-8",
        "alt": "Graduate tossing cap among ceremony chairs"
      },
      {
        "id": "graduation-9",
        "alt": "Three graduates posing on campus lawn"
      },
      {
        "id": "graduation-10",
        "alt": "Group of graduates on steps of Medbery Hall"
      },
      {
        "id": "graduation-11",
        "alt": "Graduation ceremony photo 11"
      },
      {
        "id": "graduation-12",
        "alt": "Graduation ceremony photo 12"
      },
      {
        "id": "graduation-13",
        "alt": "Graduation ceremony photo 13"
      },
      {
        "id": "graduation-14",
        "alt": "Graduation ceremony photo 14"
      },
      {
        "id": "graduation-15",
        "alt": "Graduation ceremony photo 15"
      },
      {
        "id": "graduation-16",
        "alt": "Graduation ceremony photo 16"
      },
      {
        "id": "graduation-17",
        "alt": "Graduation ceremony photo 17"
      },
      {
        "id": "graduation-18",
        "alt": "Graduation ceremony photo 18"
      },
      {
        "id": "graduation-19",
        "alt": "Graduation ceremony photo 19"
      },
      {
        "id": "graduation-20",
        "alt": "Graduation ceremony photo 20"
      },
      {
        "id": "graduation-21",
        "alt": "Graduation ceremony photo 21"
      },
      {
        "id": "graduation-22",
        "alt": "Graduation ceremony photo 22"
      },
      {
        "id": "graduation-23",
        "alt": "Graduation ceremony photo 23"
      },
      {
        "id": "graduation-24",
        "alt": "Graduation ceremony photo 24"
      },
      {
        "id": "graduation-25",
        "alt": "Graduation ceremony photo 25"
      },
      {
        "id": "graduation-26",
        "alt": "Graduation ceremony photo 26"
      },
      {
        "id": "graduation-27",
        "alt": "Graduation ceremony photo 27"
      },
      {
        "id": "graduation-28",
        "alt": "Graduation ceremony photo 28"
      },
      {
        "id": "graduation-29",
        "alt": "Graduation ceremony photo 29"
      }
    ]
  },
  {
    "id": "events",
    "title": "Events",
    "coverFile": "events-20.jpg",
    "photos": [
      {
        "id": "events-1",
        "alt": "Students jousting with inflatable boomers at night event on campus"
      },
      {
        "id": "events-2",
        "alt": "Event photo 2 with attending guests"
      },
      {
        "id": "events-3",
        "alt": "Event photo 3 with attending guests"
      },
      {
        "id": "events-4",
        "alt": "Event photo 4 with attending guests"
      },
      {
        "id": "events-5",
        "alt": "Event photo 5 with attending guests"
      },
      {
        "id": "events-6",
        "alt": "Event photo 6 with attending guests"
      },
      {
        "id": "events-7",
        "alt": "Event photo 7 with attending guests"
      },
      {
        "id": "events-8",
        "alt": "Event photo 8 with attending guests"
      },
      {
        "id": "events-9",
        "alt": "Event photo 9 with attending guests"
      },
      {
        "id": "events-10",
        "alt": "Event photo 10 with attending guests"
      },
      {
        "id": "events-11",
        "alt": "Event photo 11 with attending guests"
      },
      {
        "id": "events-12",
        "alt": "Event photo 12 with attending guests"
      },
      {
        "id": "events-13",
        "alt": "Event photo 13 with attending guests"
      },
      {
        "id": "events-14",
        "alt": "Event photo 14 with attending guests"
      },
      {
        "id": "events-15",
        "alt": "Event photo 15 with attending guests"
      },
      {
        "id": "events-16",
        "alt": "Event photo 16 with attending guests"
      },
      {
        "id": "events-17",
        "alt": "Event photo 17 with attending guests"
      },
      {
        "id": "events-19",
        "alt": "Event photo 19 with attending guests"
      },
      {
        "id": "events-20",
        "alt": "Event photo 20 with attending guests"
      }
    ]
  },
  {
    "id": "travel",
    "title": "Travel",
    "coverFile": "travel-2.jpg",
    "photos": [
      {
        "id": "travel-1",
        "alt": "Camels with colorful saddles in front of the Pyramids of Giza"
      },
      {
        "id": "travel-2",
        "alt": "Pyramids of Giza against a blue sky"
      },
      {
        "id": "travel-3",
        "alt": "Dolphins surfacing in turquoise ocean waters"
      },
      {
        "id": "travel-4",
        "alt": "Beach sunset with palm tree silhouette"
      },
      {
        "id": "travel-5",
        "alt": "Dolphin emerging from calm blue sea"
      },
      {
        "id": "travel-6",
        "alt": "Travel destination photo 6"
      },
      {
        "id": "travel-7",
        "alt": "Travel destination photo 7"
      },
      {
        "id": "travel-8",
        "alt": "Travel destination photo 8"
      },
      {
        "id": "travel-9",
        "alt": "Travel destination photo 9"
      },
      {
        "id": "travel-10",
        "alt": "Travel destination photo 10"
      },
      {
        "id": "travel-11",
        "alt": "Travel destination photo 11"
      },
      {
        "id": "travel-12",
        "alt": "Travel destination photo 12"
      },
      {
        "id": "travel-13",
        "alt": "Travel destination photo 13"
      },
      {
        "id": "travel-14",
        "alt": "Travel destination photo 14"
      },
      {
        "id": "travel-15",
        "alt": "Travel destination photo 15"
      },
      {
        "id": "travel-16",
        "alt": "Travel destination photo 16"
      },
      {
        "id": "travel-17",
        "alt": "Travel destination photo 17"
      },
      {
        "id": "travel-18",
        "alt": "Travel destination photo 18"
      },
      {
        "id": "travel-19",
        "alt": "Travel destination photo 19"
      },
      {
        "id": "travel-20",
        "alt": "Travel destination photo 20"
      },
      {
        "id": "travel-21",
        "alt": "Travel destination photo 21"
      },
      {
        "id": "travel-22",
        "alt": "Travel destination photo 22"
      },
      {
        "id": "travel-23",
        "alt": "Travel destination photo 23"
      },
      {
        "id": "travel-24",
        "alt": "Travel destination photo 24"
      },
      {
        "id": "travel-25",
        "alt": "Travel destination photo 25"
      }
    ]
  },
  {
    "id": "landscapes",
    "title": "Landscapes",
    "coverFile": "landscape-4.jpg",
    "photos": [
      {
        "id": "land-1",
        "alt": "Waterfall cascading through autumn forest"
      },
      {
        "id": "land-2",
        "alt": "Mirror lake reflecting mountains and trees"
      },
      {
        "id": "land-3",
        "alt": "Geese on a lake with misty mountains"
      },
      {
        "id": "land-4",
        "alt": "Boats at a marina with mountain backdrop"
      },
      {
        "id": "land-5",
        "alt": "Mountain reflected in still blue lake"
      },
      {
        "id": "land-6",
        "alt": "Aerial view of harbour and golden hills"
      },
      {
        "id": "land-7",
        "alt": "Winding river through lush valley"
      },
      {
        "id": "land-8",
        "alt": "Turquoise river through mountain gorge"
      },
      {
        "id": "land-9",
        "alt": "Dramatic mountain with rustic foreground"
      },
      {
        "id": "land-10",
        "alt": "Snow-capped peaks above clouds"
      }
    ]
  },
  {
    "id": "wildlife",
    "title": "Wildlife",
    "coverFile": "wildlife-6.jpg",
    "photos": [
      {
        "id": "wild-1",
        "alt": "Giraffes among lush greenery"
      },
      {
        "id": "wild-2",
        "alt": "Zebras and giraffes in safari landscape"
      },
      {
        "id": "wild-3",
        "alt": "Flamingo walking in dappled light"
      },
      {
        "id": "wild-4",
        "alt": "Baboons resting on rocks"
      },
      {
        "id": "wild-5",
        "alt": "Rhinos grazing at golden hour"
      },
      {
        "id": "wild-6",
        "alt": "Lioness resting on a grassy hill"
      },
      {
        "id": "wild-7",
        "alt": "Crocodile camouflaged in grass"
      },
      {
        "id": "wild-8",
        "alt": "Small bird perched on a branch"
      },
      {
        "id": "wild-9",
        "alt": "Golden bird clinging to a twig"
      },
      {
        "id": "wild-10",
        "alt": "Squirrel on a dark tree branch"
      }
    ]
  }
];

export const migrationVideos: { title: string; youtubeId: string }[] = [
  {
    "title": "My Demo Reel",
    "youtubeId": "pdQF0xrgeCY"
  },
  {
    "title": "Seneca Lake Pure Waters Association Overview",
    "youtubeId": "0eKfJdQpxMM"
  },
  {
    "title": "C.S. Burrall & Sons Inc. Insurance",
    "youtubeId": "7_pFi2EkkaE"
  },
  {
    "title": "HWS EMS Funding Appreciation",
    "youtubeId": "Vf5Yj1XSe_o"
  },
  {
    "title": "HWS EMS Funding Campaign",
    "youtubeId": "foe7fLY9Pr8"
  },
  {
    "title": "KDC Highlights",
    "youtubeId": "MuRRXFya2d0"
  },
  {
    "title": "The Farm House",
    "youtubeId": "CE4sl9yrNo8"
  },
  {
    "title": "HWS Trinity Hall",
    "youtubeId": "uvySf4XmzLM"
  },
  {
    "title": "HWS Dining",
    "youtubeId": "GP7F2ldlD0A"
  },
  {
    "title": "HWS Adams Intercultural Center",
    "youtubeId": "fxFRij5nEJM"
  },
  {
    "title": "HWS Hubbs & Counselling Center",
    "youtubeId": "jE9sWOpmvFc"
  }
];
