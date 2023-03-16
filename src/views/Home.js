import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout } from 'antd';
import '../css/home.css';
const Home = () => {

    const [type, setType] = useState('series'); //Or movie according to the json file





    useEffect(() => {


    }, []);


    return (
        <div className="Home">

            <Row className="popular_titles" xs={24} >
                <Col span={6} offset={4} >
                    <h1 style={{ color: 'white', fontStyle: 'italic', fontWeight: '500' }}>  Popular titles </h1>
                </Col>

            </Row>

            <Row gutter={[24, 0]} align='left' style={{padding: '6%'}} >
                <Col xs={4} >
                    <div className="card_format" >
                        SERIES

                    </div>
                    <div style={{textAlign: 'left'}} >
                        Popular Series
                    </div>
                </Col>
                <Col xs={4} >
                    <div className="card_format" >
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