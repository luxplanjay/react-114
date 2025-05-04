/**
 * Необхідно прибрати атрибут controls та за допомогою Audio API
 * зробити кастомні контроли (play, pause, currentTime, timeupdate).
 */
import { useState } from 'react';

export default function Player() {
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {};

  const handlePause = () => {};

  const handleTimeUpdate = (event) => {};

  const minutes = Math.floor(currentTime / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, '0');

  return (
    <div>
      <audio
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
        controls
      ></audio>
      {/* <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <div>
        Current Time: {minutes}:{seconds}
      </div> */}
    </div>
  );
}
