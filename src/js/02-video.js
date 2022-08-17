import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

uploudPlayer();

player.on('timeupdate', throttle(setLocalStorage, 1000));

function setLocalStorage(curentTime) {
  const currentTimePlay = curentTime.seconds;
  localStorage.setItem(STORAGE_KEY, currentTimePlay);
}

function uploudPlayer() {
  const timePlay = localStorage.getItem(STORAGE_KEY);
  if (timePlay) {
    player.setCurrentTime(timePlay);
  }
}
