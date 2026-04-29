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

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  youtubeUrl: string;
}
