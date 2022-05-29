import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { NavBar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <NavBar />
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/exchanges' element={<Exchanges/>} />
                  <Route path='/cryptocurrencies' element={<Cryptocurrencies simplified={true} />} />
                  <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
                  <Route path='/news' element={<News simplified={true} />} />
                </Routes>
              </div>
            </Layout>
          <div className='footer'>
              <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                  My crypto app
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
          </div>
        </div>
   </div>
  )
}

export default App