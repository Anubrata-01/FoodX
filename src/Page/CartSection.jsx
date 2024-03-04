import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CartSection = ({isAuthentication}) => {
    isAuthentication()
    const navigate=useNavigate()
  return (
    <div>
        {!isAuthentication?"Cartsection":(navigate("/"))}

    </div>
  )
}
