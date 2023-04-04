import { Card } from '@/components/atoms';
import {
  getMySpotifyPlaylists,
  getSpotifyToken,
} from '@/services/fetch/getTopArtists';
import { useActive } from '@/stores/navSection';
import { PlaylistItem } from '@/types';
import { getCookie, setCookie } from '@/utils/cookies';
import { useIntersection } from '@/utils/intersection';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export const More = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inViewport = useIntersection(ref, '-100px');
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
  const { setActive } = useActive();

  useEffect(() => {
    if (inViewport) setActive('More');
  }, [inViewport, setActive]);

  useEffect(() => {
    const token = getCookie('stoken');
    if (!token) {
      getSpotifyToken().then((resp) => {
        if (resp?.access_token) {
          setCookie('stoken', resp?.access_token);
          getMySpotifyPlaylists(resp?.access_token).then((resp) => {
            setPlaylists(resp);
          });
        }
      });
    } else {
      getMySpotifyPlaylists(token).then((resp) => {
        setPlaylists(resp);
      });
    }
  }, []);

  const openPlaylist = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div
      ref={ref}
      id='More'
      className='p-5 sm:p-20 justify-center max-w-[1240px] m-auto text-center sm:text-left'
    >
      <div className='flex flex-col'>
        <span className='uppercase mt-8 text-xs sm:text-[15px] text-gray-400 '>
          Things I like to listen to while coding
        </span>
        <h3 className='text-[36px] sm:text-[42px] font-bold text-green-300'>
          My Playlists
        </h3>
      </div>
      <div className={`flex mt-10 flex-wrap gap-5 sm:gap-10 justify-center`}>
        {playlists?.map((playlist, index) => (
          <div
            style={{ animationDelay: `${index * 200}ms` }}
            className={`opacity-0 ${inViewport && 'animate-fade-in'}`}
            key={playlist?.name}
          >
            <Card
              onClick={() => openPlaylist(playlist?.external_urls?.spotify)}
              key={playlist?.name}
            >
              <Image
                src={playlist.images[0].url}
                alt={`image of ${playlist?.name}`}
                width={110}
                height={110}
              />
              <span>{playlist?.name}</span>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
