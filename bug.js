```javascript
const query = {
  field: { $regex: /pattern/i } // Case-insensitive search
};

db.collection('myCollection').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result); // This might return an empty array if no matches are found.
});
```