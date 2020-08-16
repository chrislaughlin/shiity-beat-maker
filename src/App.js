import React, {useState} from 'react';
import DEFAULT_BEATS from "./defaultBeats";
import Beats from "./beats";
import CurrentPlaying from "./currentPlaying";

function App() {
    const [beats, setBeats] = useState(DEFAULT_BEATS);
    const [playing, setPlaying] = useState(false);
    const [currentlyPlaying, setCurrentlyPlaying] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
    })

    const changeBeat = (l, b, currValue) => {
        setBeats(currentBeats => {
            return currentBeats.map((line, lineIndex) => {
                return line.map((beat, beatIndex) => {
                    if (l === lineIndex && b === beatIndex) {
                        return currValue === '-' ? 'X' : '-';
                    } else {
                        return beat;
                    }
                })
            })
        })
    }

    return (
        <div className="App">
            <h1>
                Shitty Beat Maker
            </h1>
            <CurrentPlaying
                playing={currentlyPlaying}
            />
            <section>
                <Beats
                    beats={beats}
                    changeBeat={changeBeat}
                />
                <button className="play-button">
                    {playing ? 'STOP' : 'PLAY'}
                </button>
            </section>
        </div>
    );
}

export default App;
