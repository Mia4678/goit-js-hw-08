import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time',JSON.stringify(currentTime));
}

const storedCurrentTime = localStorage.getItem('videoplayer-current-time');
if (storedCurrentTime) {
  player.setCurrentTime(Number(storedCurrentTime));
}
