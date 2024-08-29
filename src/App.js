
import './App.css';
import Description from './components/Description';
import Images from './components/Images';
import Name from './components/Name';
import Price from './components/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div>
      <div>
     
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={}/> */}
      <Images/>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Name/>
        <Description/>
        {/* <Card.Text>
         
        </Card.Text>
        <Button variant="primary"></Button> */}
        <Price/>
      </Card.Body>
    </Card>
  
      </div>
      {/* <Name/>
      <Price/>
      <Description/>
      <Images/> */}
      
      
    </div>
    
  )
}

export default App;
