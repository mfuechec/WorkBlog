import React, {useEffect, useState} from 'react';
import Feed from './Feed.jsx';
import findAgrianBlogEntries from '../../db/db';

export default function Blog({company}) {

    let [entries, setEntries] = useState([]);

    useEffect(() => {
        populateEntries();
    }, [])

    function populateEntries() {
        if (company === 'Agrian') {
            fetch('http://localhost:4001/agrianBlog')
            .then(response => response.json())
            .then(data => {
                setEntries(data)
            })
        }
    }

    return (
        <div id='blog'>
            <p id='companyName'>{company}</p>
            <p id='blogDescription'>This is my weekly(ish) record of working at Agrian.</p>
            {entries.Items && <Feed entries={entries} />}
        </div>
    )
}