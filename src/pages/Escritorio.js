import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { use, useContext, useState } from 'react'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu'
import { getUsuarioStorage } from '../helpers/getUsuarioStorage'
import { useNavigate } from 'react-router'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

export const Escritorio = () => {

  const navigate = useNavigate();

  useHideMenu(false)
  const [usuario] = useState(getUsuarioStorage())
  const { socket } = useContext(SocketContext)
  const [ticket, setTicket] = useState(null)

  const salir = () => {
    console.log("Salir")
    localStorage.clear()
    navigate('/ingresar')
  }

  const siguienteTicket = () => {
    console.log("siguiente ticket");
    socket.emit('siguiente-ticket-trabajar', usuario, (ticket) => {
      setTicket(ticket)
    });
  }

  if (!usuario.agente || !usuario.escritorio) {
    return navigate('/ingresar')
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio</Text>
          <Text type="success"> {usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button
            shape='round'
            type='danger'
            onClick={salir}
          >
            <CloseCircleOutlined />
          </Button>
        </Col>
      </Row>

      <Divider />

      {
        ticket && (
          <Row>
            <Col>
              <Text> Esta atendiendo el ticket número: </Text>
              <Text
                style={{ fontSize: 30 }}
                type="danger"
              >
                {ticket.numero}
              </Text>
            </Col>
          </Row>
        )
      }

      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={siguienteTicket}
            shape='round'
            type='primary'
          >
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>


    </>
  )
}
