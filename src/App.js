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


const { Header, Footer, Content } = Layout;


function filterPerType(type){

const filteredData = json['entries'].filter(function(i) {
  return i.programType === type;
});

console.log(filteredData);

return filteredData;



}


function App() {
  return (
    <div className="App">
      <Router>

        <Layout>
          <HeaderComponent />
          <Content className='content'>
            <Routes>

              <Route exact path="/" element={<Home />} />
              <Route path="/movies" element={<MoviesPage shows={filterPerType('movie')}/>} />

              <Route path="/series" element={<SeriesPage shows={filterPerType('series')} />} />

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
