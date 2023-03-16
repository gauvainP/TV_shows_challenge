import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout, Space, Button } from 'antd';
 

import '../css/header.css';
const HeaderComponent = () => {







    useEffect(() => {
    }, []);


    return (
        <Row justify='center' align={'center'} className="header" xs={24}>
            <Col xs={16}>
                <h1 style={{ color: 'white', fontSize: '160%' }} >DEMO Streaming</h1>
            </Col>
            <Col xs={8}>
                <Space style={{ padding: '2vh 0' }}>
                    <a style={{ color: 'white', }} >Log in</a>
                    <Button>Start your free trial</Button>
                </Space>
            </Col>


        </Row>
    )
}



export default HeaderComponent;