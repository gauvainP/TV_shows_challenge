import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import { setShow } from './features/show';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Pagination, Row } from 'antd';
import Home from './views/Home';
import SeriesPage from './views/SeriesPage';
import MoviesPage from './views/MoviesPage';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import json from './Ressources/shows.json';
import { useSelector } from "react-redux";


const { Header, Footer, Content } = Layout;

function filterPerType(type){

const filteredData = json['entries'].filter(function(i) {
  return i.programType === type;
});

console.log(filteredData);

return filteredData;

 

}
function App() {
  const [isOpen, setIsOpen] = useState(false);
   const [show, setShow] = useState({title: ''});


  const sho = useSelector((state) =>  state );
console.log(sho)


  const handleChangeIsOpen = (status, item) =>{

    setIsOpen(status);
    if(status){
        setShow(item);

    
    }
    
    
    }




  return (
    <div className="App">
      <Router>

        <Layout>
          <HeaderComponent />
          <Content className='content'>
            <Routes>

              <Route exact path="/" element={<Home />} />
              <Route path="/movies" element={<MoviesPage handleChangeIsOpen={handleChangeIsOpen} show={show} isOpen={isOpen} shows={filterPerType('movie')}/>} />

              <Route path="/series" element={<SeriesPage  handleChangeIsOpen={handleChangeIsOpen}  show={show}  isOpen={isOpen}  shows={filterPerType('series')} />} />

              <Route path="*" element={<Home />} />

            </Routes>


          </Content>
          <Footer className='footer'>
            <FooterComponent />
          </Footer>
        </Layout>


      </Router>

    </div>
  );
}

export default App;
