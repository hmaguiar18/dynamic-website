import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'


export function ProductCard( props ) {
    return (
      <Card style={{ width: '18rem' , margin: '1rem'}}>
        <Card.Img variant="top" src={props.pic} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Row>
            <Card.Text>${props.price}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Row>
        </Card.Body>
      </Card>
    );
  }