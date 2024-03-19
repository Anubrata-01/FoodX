import React from 'react'
import styled from 'styled-components'

const AddresFeild = () => {

  return (
    <div className=' text-red-500'>
        <div className=' ml-[6%] mt-[2%] text-xl'>Manage Address</div>
        <Card className=''>
          <div></div>
          <div>
            <div>Home</div>
            <div>city,stret</div>
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
    width:30%;
    display: flex;
    gap:15px;
`
const Button=styled.button`
  color: #fc8019;
    font-weight: 600;
    font-size: 14px;
    margin-right: 20px;
    cursor: pointer;
    letter-spacing: -.3px;
`
export default AddresFeild