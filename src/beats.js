import React from 'react';

const Beats = ({ beats, changeBeat }) => {
    return (
        <div className="beats">
            {
                beats.map((line, lineIndex) => {
                    return (
                        <div
                            key={lineIndex}
                            className="line"
                        >
                            {
                                line.map((beat, beatIndex) => {
                                    return (
                                        <div
                                            key={`${lineIndex}-${beatIndex}`}
                                            className="beat"
                                            onClick={() => {
                                                changeBeat(lineIndex, beatIndex, beat);
                                            }}
                                        >
                                            {beat}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};


export default Beats;

