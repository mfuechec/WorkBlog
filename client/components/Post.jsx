import React from 'react';

export default function Feed({entry}) {

    return (
        <div id='post'>
            <div id='heading'>
                <p id='postDate'>{entry.Date}</p>
                <p id='postTitle'>{entry.Title}</p>
            </div>
            <p className='paragraph'>{entry[0]}</p>
            <p className='paragraph'>{entry[1]}</p>
            <p className='paragraph'>{entry[2]}</p>
            <p className='paragraph'>{entry[3]}</p>
        </div>
    )
    
}