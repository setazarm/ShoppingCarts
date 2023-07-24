import React from 'react'
import items from "../data/item.json"
import{Col,Row} from "react-bootstrap"

const Store = () => {
  return (
    <>
    <div>Store</div>
    <Row md={2} xs={1} lg={3} className="g-3">
      {items.map(item=>(
        <Col key={item.id}><StoreItem {...item}/></Col>
      ))}
    </Row>
    </>

  )
}

export default Store