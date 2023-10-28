import React, { useState, useEffect } from 'react';

export default function App() {
  // State to store the cat fact
  const [catFact, setCatFact] = useState('');

  // State to handle loading status
  const [loading, setLoading] = useState(true);

  // State to handle any errors during fetch
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the provided URL
    const fetchData = async () => {
      try {
        // Fetch data from the provided URL
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Extract the JSON from the response
        const data = await response.json();

        // Update the cat fact state with the fact from the data
        setCatFact(data.fact);

        // Update loading state to false as data fetching is succeeded
        setLoading(false);
      } catch (error) {
        // Update error state with the error caught
        setError(error.message);

        // Update loading state to false as there is an error occurred
        setLoading(false);
      }
    };

    // Invoke the async function
    fetchData();
  }, []); // The empty array ensures this useEffect runs once when component is mounted.

  // Conditional rendering based on loading and error status
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error occurred: {error}</h1>;

  // Render the fetched cat fact
  return <h1>Cat fact: {catFact}</h1>;
}

