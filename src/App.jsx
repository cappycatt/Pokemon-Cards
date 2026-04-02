import { useState } from 'react';
import ApiCall from './Hooks/Axios.jsx';
import PokeCard from './assets/components/PokeCard.jsx'
import Search from '././assets/components/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiCall />
    </>
  );
}

export default App
