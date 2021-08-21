import React from 'react';
import { Header, Footer, SideMenu, Carousel } from './components'
import styles from './app.module.css'
import { Row, Col } from 'antd' 
function App() {
  return (
    <div>
      <Header/>

      <div className={styles['page-content']}>
        <Row style={{
          marginTop: '20px'
        }}>
          <Col span="6">
            <SideMenu />
          </Col>
          <Col span="18">
            <Carousel/>
          </Col>

        </Row>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
