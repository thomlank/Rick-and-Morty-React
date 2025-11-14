import {useOutletContext} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import { useEffect } from 'react';


export default function CharCard({char}) {
  const {addToFavs,removeFromFavs,isFav}=useOutletContext();
  // console.log(fav)
  const handleAdd = () => {
    addToFavs(char)};
    // console.log(isFav(char))
    // removeFromFavs(char);
    // console.log(fav)};
  const handleDel = () => {
    removeFromFavs(char)
    console.log('i am da captain now')};
  
  return (
    <Card className="card">
        <Card.Img variant="top" src={char.image}/>
        <button onClick = {isFav(char) ? handleDel : handleAdd}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isFav(char) ? 'red' : 'lightgray'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
        <Card.Body>
            <Card.Title>{char.name}</Card.Title>
            <Card.Text>Status: {char.status}</Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>Origin: {char.origin.name}</ListGroup.Item>
                <ListGroup.Item>Species: {char.species}</ListGroup.Item>
                <ListGroup.Item>Gender: {char.gender}</ListGroup.Item>
            </ListGroup>
            
        </Card.Body>
    </Card>  
  );
}

