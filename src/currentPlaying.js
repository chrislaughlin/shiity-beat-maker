import React from 'react';

const CurrentPlaying = ({ playing }) => {
    return (
        <div className="currently-playing">
            {
                Object.values(playing).map((val, index) => {
                    return (
                        <div
                            key={index}
                            className={val ? 'on' : 'off'}
                        />
                    )
                })
            }
        </div>
    );
};


export default CurrentPlaying;

