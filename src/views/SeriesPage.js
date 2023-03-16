import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Layout, Pagination } from 'antd';
import TopBanner from "../components/TopBanner";
import PaginationComponent from "../components/PaginationComponent";
import Dialog from "../components/Dialog";

const maxValues = 18;
const SeriesPage = ({ shows }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState({title: ''});



const handleChangeIsOpen = (status, item) =>{

setIsOpen(status);
if(status){
    setShow(item);

}


}


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
            <TopBanner text='Popular Series' />

            <div className="SeriesPage" >

                <Row gutter={[0, 24]} xs={24} >

                    {
                        shows.slice(pageValues.minValue, pageValues.maxValue).map(movie =>
                            <Col xs={12} md={8} lg={4} >
                                <div onClick={() =>{handleChangeIsOpen(true, movie )} }
                                 className="card_format" style={{ backgroundImage: `url(${movie['images']['Poster Art']['url']})` }} >


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

<Dialog handleChangeIsOpen={handleChangeIsOpen} isOpen={isOpen} show={show} />

        </div>
    )
}



export default React.memo(SeriesPage);