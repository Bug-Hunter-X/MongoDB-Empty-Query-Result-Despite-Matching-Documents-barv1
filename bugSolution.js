```javascript
const query = {
  field: { $regex: /pattern/i } // Case-insensitive search
};

db.collection('myCollection').find(query).toArray((err, result) => {
  if (err) {
    console.error("Error executing query:", err);
    throw err;
  } else if (result.length === 0) {
    console.log("No matching documents found.");
  } else {
    console.log(result);
  }
});
```