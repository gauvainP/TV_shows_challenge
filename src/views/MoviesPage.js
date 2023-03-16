import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout } from 'antd';
import TopBanner from "../components/TopBanner";
import '../css/showsPage.css';
import PaginationComponent from "../components/PaginationComponent";
import imageNotFound from '../images/ImageNotFound.png';

const maxValues = 18;

const MoviesPage = ({ shows }) => {
    const [pageValues, setPageValues] = useState({ minValue: 0, maxValue: maxValues });

    const handleChange = (value) => {
        let newPageValues = {
            minValue: (value - 1) * maxValues,
            maxValue: value * maxValues,
        }
        setPageValues(newPageValues)
    };


    useEffect(() => {


    }, []);


    return (
        <div>
            <TopBanner text='Popular Movies' />

            <div className="MoviesPage" >

                <Row gutter={[0, 24]} xs={24} >

                    {
                        shows.slice(pageValues.minValue, pageValues.maxValue).map(movie =>
                            <Col xs={12} md={8} lg={4} >
                                <div className="card_format" style={{ backgroundImage: `url(${movie['images']['Poster Art']['url'] || imageNotFound})` }} >


                                </div>
                                <div style={{ textAlign: 'left' }} >
                                    {movie.title}
                                </div>
                            </Col>

                        )
                    }

                </Row>


                <PaginationComponent pagesNumber={shows.length} maxValues={maxValues} handleChange={handleChange} />

            </div>

        </div>
    )
}



export default MoviesPage;