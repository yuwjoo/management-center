import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

export function usePlayer (options) {
    return new Player(options);
};
