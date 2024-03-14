import React from 'react'
import { CheckoutTwo } from '../Utilities/Address'

const AddressFeild = ({setShowAddress}) => {
  return (
    <div className=' bg-slate-50 '>
        <div className='  pt-20'>
            <CheckoutTwo setShowAddress={setShowAddress}/>
        </div>

    </div>
  )
}

export default AddressFeild