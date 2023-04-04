import { Playlist } from '@/types';

const USER_ID = process.env.NEXT_PUBLIC_USER_ID_SPOTIFY;
const API_URL = process.env.NEXT_PUBLIC_IP_SPOTIFY;
const API_URL_TOKEN = process.env.NEXT_PUBLIC_IP_ACCOUNT;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY;

export const getMySpotifyPlaylists = async (token: string) => {
  const response = await fetch(
    `${API_URL}/users/${USER_ID}/playlists?limit=8`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: Playlist = await response.json();
  if (!data?.items) return [];
  return data?.items;
};

export const getSpotifyToken = async () => {
  const response = await fetch(`${API_URL_TOKEN}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  });
  const data = await response.json();
  return data;
};
