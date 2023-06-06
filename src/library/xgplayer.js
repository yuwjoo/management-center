import Player from "xgplayer";
import FlvJsPlayer from "xgplayer-hls";
import "xgplayer/dist/index.min.css";

export function usePlayer(options) {
  return new Player({
    ...options,
    plugins: [FlvJsPlayer],
  });
}
