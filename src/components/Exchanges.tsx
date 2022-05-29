import React from 'react';
import { Row, Col} from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Exchanges = () => {
  const { isFetching } = useGetExchangesQuery(10);
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
      </Row>
    </>
  );
};

export default Exchanges;