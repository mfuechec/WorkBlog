import React from 'react';
import Post from './Post.jsx';

export default function Feed({entries}) {

    return (
        <div id='feed'>
            {entries.Items.map((entry) => {
                return (
                    <Post entry={entry} />
                )
            })}
        </div>
    )
}