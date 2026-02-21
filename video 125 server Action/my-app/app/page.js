"use client"
import React from 'react'
import { submitAction } from '@/actions/form'
import { useRef } from 'react'



export default function Home() {
  let ref = useRef()

  return (
    <div className="mx-auto">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name='name' id='name' className='mx-auto' type="text" />
        </div>
        <div>
          <label htmlFor="add">Addreess</label>
          <input name='add' id='add' className='mx-auto' type="text" />
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}
