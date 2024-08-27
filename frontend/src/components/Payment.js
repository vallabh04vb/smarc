import React, { useContext } from 'react'
import Form  from "../components/Form"
import { GlobalContext } from '../context/GlobalContext'
const Payment = () => {
    const { totalAmount } = useContext(GlobalContext);
    console.log("This is the total amount: ", totalAmount)
  return (
    <div>


      <Form></Form>
    </div>
  )
}

export default Payment
