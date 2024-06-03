import React from 'react'
import styled from 'styled-components'
import { Home } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Stat } from '@chakra-ui/react'

const AddresFeild = () => {
  const AddressData=useSelector((store)=>store?.address?.AddressDetails);
  const {Address,City,State,Pin}=AddressData || {}
  return (
    <div className=' '>
        <div className=' ml-[6%] mt-[2%] text-xl text-slate-800 font-medium'>Manage Addresses</div>
        <Card className=' text-black'>
          <div>
            <Home fontSize={14}/>
          </div>
          <div>
            <div className=' text-[14px] font-medium'>Home</div>
            <div className=' text-[10px] text-[#535665]'>
              <div>{Address}</div>
              <div>{City}, {Pin}, {State}</div>
            
            </div>
            <div className='flex gap-2'>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </div>
          </div>
        </Card>

    </div>
  )
}
const Card=styled.div`
margin-left:6%;
margin-top: 3%;
border: 1px solid #d4d5d9;
    padding: 20px;
    position: relative;
    width:50%;
    display: flex;
    gap:15px;
`
const Button=styled.button`
  color: #fc8019;
    font-weight: 600;
    font-size: 13px;
    margin-right: 20px;
    cursor: pointer;
    letter-spacing: -.3px;
`
export default AddresFeild