import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import MemberCard from '../MemberCard';
import './style.css'

const data = [
  {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  },{
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  },{
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  },
   {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }
]

interface IProps {
}

const Details: React.FC<IProps> = (props: IProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 250px)' })


  const wideScreenDeviceView = (<div style={container}>
    <h3 style={{textAlign:'center'}}>Office Bearers 2021-22</h3>
  <Row style={row_style}>
    {
      data.map((council) => (
        <Col
        xs={10} md={4} xl = {3} 
        style={col_style}
        >
        <MemberCard person={council}/>
        </Col>
      ))
  }  
  </Row>
</div>);
  return (
    <>
    {
    wideScreenDeviceView
    }
    </>
  );
};
const container : React.CSSProperties = {
  // minHeight: '300px',
  maxWidth: '100%',
  paddingTop: '5%',
  // paddingBottom: '5%'
}

const row_style : React.CSSProperties = {
  height: '100%',
  margin: 'auto',
  padding: '3%',
  maxWidth: '100%',
}

const col_style : React.CSSProperties = {
  height: '100%',
  margin: 'auto',
  padding: '3.4%',
  maxWidth: '450px',
}

export default Details;
