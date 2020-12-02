const AWS = require('aws-sdk');

AWS.config.update({
    endpoint: "https://dynamodb.us-east-2.amazonaws.com",
    region: 'us-east-2',
});

const docClient = new AWS.DynamoDB.DocumentClient();

function findAgrianBlogEntries(callback) {
    docClient.scan({TableName: "AgrianBlog", Select: 'ALL_ATTRIBUTES'}, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
}

exports.findAgrianBlogEntries = findAgrianBlogEntries;