import React from 'react';
import PreviousCouncilMems from '../PreviousCouncilMems';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SiClockify } from "react-icons/si";
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
  
const data = [
    {
        year: '2020 - 2021',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
    {
        year: '2019 - 2020',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
    {
        year: '2018 - 2019',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
    {
        year: '2017 - 2018',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
]



const PreviousCouncilMemsContainer = () => {
    return (
        <div style={container}>
            
            <h3 style={{textAlign:'center', color:'white', paddingBottom:'5%', textDecoration: 'underline'}}>Previous Office Bearers</h3>
            <VerticalTimeline >
            {
                data.map(council => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: '#FFD54F', color: 'black', padding:0 }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={council.year}
                            iconStyle={{backgroundColor:'#311B92'}}
                            icon = {
                                <SiClockify size={10} color={'white'} />
                            }
                            >      
                        <PreviousCouncilMems user={council} /> 
                </VerticalTimelineElement>
                )
                })
            }            
            </VerticalTimeline>
        </div>
    );
}

export default PreviousCouncilMemsContainer;


const container: React.CSSProperties = {
    width:'100%',
    padding:'5%',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor: '#E65100'
}