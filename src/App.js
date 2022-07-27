import logo from './logo.svg';
import './App.css';
import Loading from './Loading';
import React, { useCallback, useEffect, useState } from 'react';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project'

function App() {
  
  const[loading, setLoading] = useState(true);
  const[tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
      setLoading(false);
    } catch(e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);


  if (loading) {
    return(
      <main>
        <Loading/>
      </main>
    );
  }

  if (tours.length === 0) {
    return(
      <main>
        <div className='title'>
          No Tours ...
        </div>
        <button className = 'btn' onClick={() => fetchTours()}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
