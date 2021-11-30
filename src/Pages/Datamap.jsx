import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./css/views.css"
import Star from "./svg/star.png"
import StarIcon from '@material-ui/icons/Star';
import UsbIcon from '@material-ui/icons/Usb';
import BugReportIcon from '@material-ui/icons/BugReport';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

const Datamap=({data})=> {

    const[search, setSearch]=useState("")

    const [filteredData,setFilteredData]=useState([]);


    // useEffect(()=>{
    //     if (data && data.length>0 ){
    //         data.filter((item)=>{
    //             item.repository_name.toLowerCase().includes(search.toLowerCase())
    //         })


    //     }
    // },[search])


    const getFilteredData = (data) => {
        return (
          data &&
          data.length > 0 &&
          data.filter(({repository_name}) =>
          repository_name.toLowerCase().includes(search.toLowerCase())
          )
        );
      };

    return (
        <div className="Datamap">
            <input style={{width:"30%",marginLeft:"35%",marginRight:"35%",marginTop:"30px", height:"50px"}} id="searchBar" type="text" placeholder="Search.." onChange={(e)=>{setSearch(e.target.value)}}></input>
            <Row xs={1} md={3} className="g-4" style={{ marginTop: "1in", marginBottom: "1in" }}>
            
                {/* {data && data.length> 0 && data.filter((item)=>{
                    if(search==""){
                        return item
                    }
                    else if(item.repository_name.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }
                }) */}
                {getFilteredData(data) &&
                    getFilteredData(data).length > 0 &&
                    getFilteredData(data).map((item,idx) => (
                        <Card className="Card" style={{ marginLeft:"auto", marginRight:"auto", width: '400px' }} key={idx}>
                            <Card.Body>
                                <Card.Title ><a style={{textDecoration:"none", color:"#ab1302"}} target="_blank" href={item.repo_url}>{item.repository_name}</a></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"><a style={{textDecoration:"none",color:"#b51604"}} target="_blank" href={item.author_url}>{item.author}</a></Card.Subtitle>
                                <Card.Text> 
                                <b>Description:</b><br/>
                                {item.desc}
                                </Card.Text>
                                <Card.Subtitle>
                                    <Row>
                                        <Col><StarIcon fontSize="small"/>{item.no_of_star}</Col>
                                        <Col><UsbIcon fontSize="small"/>{item.forks}</Col>
                                        <Col><BugReportIcon fontSize="small"/>{item.issues}</Col>
                                    </Row>
                                </Card.Subtitle>
                                <br/>
                                <Card.Text>Last Updated: {moment(item.last_update).format("MMMM DD, YYYY")} </Card.Text>
                            </Card.Body>
                        </Card>
                ))}
            </Row>
        </div>
    )
}

export default Datamap
