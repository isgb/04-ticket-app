import { Col, Row, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

export const Escritorio = () => {
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Escritorio</Title>
          <Text>Usted está trabajando en el escritorio</Text>
          <Text type="success">4</Text>
        </Col>
      </Row>
    </>
  )
}
