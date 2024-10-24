import React from 'react'
import UserAddressCard from './UserAddressCard'

const Address = () => {
  return (
    <div className='space-y-2'>
        {[1,1,1,1,1].map((item, index) => (<UserAddressCard key={index}/>))}
    </div>
  )
}

export default Address