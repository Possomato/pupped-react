import React from 'react'

export default function ButtonNav({nav, setNav}) {
  if(!nav){
    return (
      <button onClick={() => setNav(true)} className='buttonNav'/>
    )
  }
}
