import React from 'react'
import { CheckoutTwo } from '../Utilities/Address'

const AddressFeild = ({setShowAddress,total}) => {
  return (
    <div className=' bg-slate-50 -mt-10 '>
        <div className='  pt-20'>
            <CheckoutTwo setShowAddress={setShowAddress} total={total}/>
        </div>

    </div>
  )
}

export default AddressFeild