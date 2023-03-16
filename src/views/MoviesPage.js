import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout } from 'antd';
import TopBanner from "../components/TopBanner";
import '../css/showsPage.css';
const MoviesPage = ({ shows }) => {



    useEffect(() => {


    }, []);


    return (
        <div>
            <TopBanner text='Popular Movies' />

            <div className="MoviesPage" >

                <Row gutter={[24, 24]} xs={24} >

                    {
                        shows.map(movie =>
                            <Col xs={12} md={8} lg={4} >
                                <div className="card_format" style={{ backgroundImage: `url(${movie['images']['Poster Art']['url']})` }} >


                                </div>
                                <div style={{ textAlign: 'left' }} >
                                    {movie.title}
                                </div>
                            </Col>

                        )
                    }

                </Row>



            </div>

        </div>
    )
}



export default MoviesPage;