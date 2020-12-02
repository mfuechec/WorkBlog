import React, {useEffect, useState} from 'react';
import Feed from './Feed.jsx';

export default function Blog({company}) {

    let [entries, setEntries] = useState([]);

    useEffect(() => {
        populateEntries();
    }, [])

    function populateEntries() {
        if (company === 'Agrian') {
            // fetch('http://localhost:4001/agrianBlog')
            fetch('http://workblog-env.eba-c33p6e3b.us-east-2.elasticbeanstalk.com/agrianBlog')
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