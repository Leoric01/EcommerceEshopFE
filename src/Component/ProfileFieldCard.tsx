import Divider from '@mui/material/Divider'
import React from 'react'

const ProfileFieldCard = ({keys,value}:{keys:string, value:string}) => {
  return (
    <div className='p-5 flex items-center bg-slate-200'>
        <p className='w-20 lg:w-36 pr-5 '>{keys}</p>
        <Divider orientation="vertical" flexItem/>
        <p className='pl-4 lg:pl-7 font-semibold lg:text-lg text-secondary'>{value}</p>
    </div>
  )
}

export default ProfileFieldCard