import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

import Cryptocurrencies from "../cryptocurrencies/Cryptocurrencies"
import News from "../news/News"

import "../../app.css"

const Title = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  
  if (isFetching) return "Loading..."

  return (
    <>
      <Title level={2} className="heading">
        <h2>Global Crypto Stats</h2>
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Narket Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={5} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={5} className="show-more"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified/>
    </>
  );
}

export default Homepage;
