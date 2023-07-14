import { StaticImageData } from 'next/image';

export type ExperienceProps = {
  role: string;
  company: string;
  responsibilities: string[];
  date: string;
  id: number;
  logo: StaticImageData;
};

export type Tecnology = {
  name: string;
  icon: StaticImageData;
};

export type Playlist = {
  href: string;
  items: PlaylistItem[];
};

export type PlaylistItem = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

export type SectionDescriptionProps = {
  title: string;
  subtitle: string;
};