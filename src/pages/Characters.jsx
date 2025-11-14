import {useState,useEffect} from 'react';
import axios from 'axios';
import CharCard from '../components/CharCard';

export default function Characters() {
  const [current, setCurrent] = useState("https://rickandmortyapi.com/api/character");
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [charSet, setCharSet] = useState([])

  const getCharacters = async (url) => {
    let {data} = await axios.get(url);
    // let {info,results} = data;
    setNext(data.info.next);
    setPrev(data.info.prev);
    setCharSet(data.results);
    console.log(charSet);
  }

  useEffect(() => {
    getCharacters(current);
  }, [current]);

  return (
    <div className="page">
      <h2>Characters page</h2>
      <div className='cardContain'>
        {charSet.map((character) => (
            <CharCard
            char = {character}
            key = {character.id}/>
          ))}
      </div>
      {next ? <button onClick={() => setCurrent(next)}>Next</button> : null}
      {prev ? <button onClick={() => setCurrent(prev)}>Prev</button> : null}
      
    </div>
  );
}