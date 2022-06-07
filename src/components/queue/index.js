import React from "react";
import "./queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
    console.log(tracks)
    const millisToMinutesAndSeconds = (millis) => {
        let minutes = Math.floor(millis /60000);
        let seconds = ((millis%60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '')+seconds;
    }
    return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>{millisToMinutesAndSeconds(track?.track?.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}