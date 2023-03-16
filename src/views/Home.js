import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout } from 'antd';
import '../css/home.css';
import TopBanner from "../components/TopBanner";
const Home = () => {

    const [type, setType] = useState('series'); //Or movie according to the json file





    useEffect(() => {


    }, []);


    return (
        <div className="Home">

       <TopBanner text='Popular Titles' />

            <Row gutter={[24, 0]} align='left' style={{padding: '6%'}} >
                <Col xs={4} >
                    <div onClick={()=>{window.location.href= '/series'}} className="card_format" >
                        SERIES

                    </div>
                    <div style={{textAlign: 'left'}} >
                        Popular Series
                    </div>
                </Col>
                <Col xs={4} >
                    <div className="card_format"  onClick={()=>{window.location.href= '/movies'}} >
                        MOVIES

                    </div>
                    <div style={{textAlign: 'left'}} >
                        Popular Movies
                    </div>
                </Col>

            </Row>

        </div>
    )
}



export default Home;