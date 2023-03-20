import React, { useState, useEffect,memo } from "react";
import { Row, Col, Pagination, message, Layout, Space, Button, Modal, Image } from 'antd';
import axios from "axios";


const Dialog = ({ isOpen, show, handleChangeIsOpen }) => { //or props in general
  const [anecdote, setAnecdote] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();


  function getAnecdote() {
    axios.get('http://numbersapi.com/' + show.releaseYear).
    then(res => {
      console.log(res.data);
      setAnecdote(res.data);

    }
    ).catch(err => {


      setAnecdote('Sorry we do not currently have a fun fact');
      alert('Wrong date');
      messageApi.open({
        type: 'error',
        content: 'Wrong date'
      });
      
      console.log(err);

    })
  }

  useEffect(() => {

    console.log(show);
if(show.hasOwnProperty('description'))
    getAnecdote();

  }, [show]);



  return (

    <>

      <Modal
        title={show.title}
        centered
        open={isOpen}
        closable={false}
        okText='Close'
        afterClose={() => handleChangeIsOpen(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        onOk={() => handleChangeIsOpen(false)}
        // onCancel={() => handleChangeIsOpen(false)} no need
        width={1000}
      >
        <Row>


          <Col md={12} xs={24} >
            <Image src={show.hasOwnProperty('images') && show['images']['Poster Art']['url']} />

          </Col>


          <Col md={12} xs={24} >

            <Row className="detailColumn" justify='start' align={'left'} style={{ margin: '10%' }} >
              <Col md={12} xs={24}>
                <h2> Title</h2>
              </Col>
              <Col md={12} xs={24}>
                <h5> {show['title']}</h5>
              </Col>
            </Row>


            <Row className="detailColumn" justify='start' align={'left'} style={{ margin: '10%' }} >
              <Col md={12} xs={24}>
                <h2> Description</h2>
              </Col>
              <Col md={12} xs={24}>
                <h5> {show.description}</h5>
              </Col>
            </Row>
            <Row className="detailColumn" justify='start' align={'left'} style={{ margin: '10%' }} >
              <Col md={12} xs={24}>
                <h2> Year</h2>
              </Col>
              <Col md={12} xs={24}>
                <h5> {show.releaseYear}</h5>
              </Col>
            </Row>
            <Row className="detailColumn" justify='start' align={'left'} style={{ margin: '10%' }} >
              <Col md={12} xs={24}>
                <h2> Type</h2>
              </Col>
              <Col md={12} xs={24}>
                <h5> {show.programType}</h5>
              </Col>
            </Row>
            <Row className="detailColumn" justify='start' align={'left'} style={{ margin: '10%' }} >
              <Col md={12} xs={24}>
                <h2> Fun fact</h2>
              </Col>
              <Col md={12} xs={24}>
                <h5> {anecdote}</h5>
              </Col>
            </Row>




          </Col>
        </Row>
      </Modal>
    </>



  )
}



export default memo(Dialog);