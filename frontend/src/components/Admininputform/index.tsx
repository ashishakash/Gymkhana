import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Admininputform = () => {
  
  
  return (
  <div >
    <h2 style={{ margin: '25px', textAlign: 'center' }}>Add Events</h2>
    <div style={{ margin: '15px' }}>
      <Form>
        <Form.Group controlId="formBasicevent">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Enter event name" />
        </Form.Group>
        <Form.Group controlId="formBasicorganiser">
          <Form.Label>Organiser</Form.Label>
          <Form.Control type="text" placeholder="Enter organiser name" />
        </Form.Group>
        <Form.Group controlId="formBasicdate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formBasictime">
          <Form.Label>Event time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
        <Form.Group controlId="formBasicroom">
          <Form.Label>Room No.</Form.Label>
          <Form.Control type="text" placeholder="Enter Room number" />
        </Form.Group>
        <Form.Group controlId="formBasicfile">
          <Form.Label>Add Attachement</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Form>
    </div>
    <div style={{ margin: '25px', textAlign: 'center' }}>
      <Button variant="primary" type="submit">
        Submit
    </Button>
    </div>
  </div>
)};

export default Admininputform;
