import React, {useState} from 'react';
import {
    DEFAULT_BEATS,
    CLEAR_BEATS
} from "./defaultBeats";
import Beats from "./beats";
import CurrentPlaying from "./currentPlaying";

const clapSound = new Audio('clap.wav')
const hatSound = new Audio('hat.wav')
const kickSound = new Audio('kick.wav')

const playClap = () => {
    setTimeout(() => {
        clapSound.play();
    }, 200);
    setTimeout(() => {
        hatSound.play();
    }, 400);
    setTimeout(() => {
        kickSound.play();
    }, 600);
}

const beatMapping = [clapSound, hatSound, kickSound];


const playThatFunkyMusic = (beatList, setCurrentPlaying) => {
    let currentIndex = 0;
    const beatInterval = setInterval(() => {
        const line = beatList[currentIndex];
        console.log(line.join(' '));

        let beatTimeout = 2;

        line.forEach((beat, index) => {
            if (beat === 'X') {
                setTimeout(() => {
                    setCurrentPlaying(line);
                    beatMapping[index].play();
                }, 100 * beatTimeout);
                beatTimeout = beatTimeout + 2;
            }
        })

        // if (line[0] === 'X') {
        //     setTimeout(() => {
        //         clapSound.play();
        //     }, 100);
        // }
        //
        // if (line[1] === 'X') {
        //     setTimeout(() => {
        //         hatSound.play();
        //     }, 200);
        // }
        //
        // if (line[2] === 'X') {
        //     setTimeout(() => {
        //         kickSound.play();
        //     }, 300);
        // }

        currentIndex++;
        if (currentIndex === beatList.length) {
            clearInterval(beatInterval);
        }
    }, 500);
};

function App() {
    const [beats, setBeats] = useState(DEFAULT_BEATS);
    const [playing, setPlaying] = useState(false);
    const [currentlyPlaying, setCurrentlyPlaying] = useState({
        0: false,
        1: false,
        2: false
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
                <button
                    className="play-button"
                    onClick={() => {
                        playThatFunkyMusic(
                            beats,
                            currPlaying => {
                                currPlaying.forEach((b, index) => {
                                    setCurrentlyPlaying(curr => {
                                        return {
                                            ...curr,
                                            [index]: b === 'X'
                                        };
                                    });
                                })
                            }
                        )
                    }}
                >
                    {playing ? 'STOP' : 'PLAY'}
                </button>
                <button
                    className="play-button"
                    onClick={() => setBeats(
                        CLEAR_BEATS
                    )}
                >
                    CLEAR
                </button>
            </section>
        </div>
    );
}

export default App;
