import { useState, useEffect } from 'react';

function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    const getSuperheroes = async () => {
      const superheroes = await fetch('https://superhero-database-backend-toy7.onrender.com/superheroes/').then(res =>
        res.json()
      );

      setSuperheroes(prev => [...prev, ...superheroes]);
    };

    getSuperheroes();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(superheroes, null, 2)}</pre>
    </div>
  );
}

export default App;
