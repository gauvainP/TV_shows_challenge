

import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout } from 'antd';
import '../css/home.css';
const TopBanner = ({text}) => {



    return (
        <Row className="popular_titles" xs={24} >
        <Col span={6} offset={4} >
            <h1 style={{ color: 'white', fontStyle: 'italic', fontWeight: '500' }}>  {text} </h1>
        </Col>
        
        </Row>
    )
}



export default TopBanner;