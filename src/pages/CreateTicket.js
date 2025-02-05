import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import {DownloadOutlined} from '@ant-design/icons' 

const {Title, Text} = Typography;

export const CreateTicket = () => {

  const nuevoTicket = () => {
    console.log("Nuevo ticket")
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title>
            Presione el botón para un nuevo ticket
          </Title>
          <Button
            type='primary'
            shape='round'
            icon={<DownloadOutlined/>}
            size='large'
            onClick={nuevoTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>

      <Row style={{marginTop: 100}}>
        <Col span={14} offset={6} align="center">
          <Text>
             Su número
          </Text>
          <br/>
          <Text type='success' style={{fontSize: 55}}>
              55
          </Text>
        </Col>
      </Row>
    </>
  )
}
