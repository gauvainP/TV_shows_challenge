import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Layout } from 'antd';

const PaginationComponent = ({maxValues, pagesNumber, handleChange}) => {

  





    useEffect(() => {
    }, []);


    return (
      
        <Row gutter={[24, 24]} align={'center'} style={{ margin: 0 }} >

        <Pagination
            pageSize={maxValues}
             pageSizeOptions={[12, 24]}
            defaultCurrent={1} total={pagesNumber || 1}
            onChange={handleChange}
            showSizeChanger={false}
        />
    </Row>

    )
}



export default PaginationComponent;