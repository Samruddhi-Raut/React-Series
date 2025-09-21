import React from 'react'

function Card({username}) {
    console.log(username)
  return (
    <div>
      <div className="relative block group  ">
      <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
      <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-6 ">
          <p className="mt-4 text-lg font-medium">{username}</p>
          <p className="mt-1 text-xs">ipsum dolor</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
