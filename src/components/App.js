import React, { useState, useEffect } from 'react';
const App = () => {
  //  I Use useState to declare state variables for loading and the image URL.
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
   // i Use fetch to get data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.message);  // I Set the image URL from the fetched data.
        setLoading(false);          // I Set loading to false once the data is fetched.
      })
      .catch(error => {
        console.error('There was an error fetching the dog image.', error);
        setLoading(false);
      });
  }, []);  
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return <img src={imageUrl} alt="A Random Dog" />;
}

export default App;
