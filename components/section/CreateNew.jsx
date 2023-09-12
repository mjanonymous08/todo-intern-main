import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'


const CreateNew = ({open , setOpen, newTodoCreated}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('')
function handleSubmit(){
setOpen(!open)
}

  return (
    <div className='shadow-lg w-[700px] border opacity-100 opa bg-white rounded-md p-6 flex flex-col gap-3'>
        <div className='flex justify-between'>
            <button onClick={() => setOpen(!open)} className='text-lg text-red-700 hover:text-2xl'><AiOutlineClose /></button>
            <button onClick={handleSubmit} className={`bg-[#69665C] ${title && body && category ? ' ' : 'pointer-events-none opacity-50'} text-white text-sm  px-7 rounded-md py-1`}>add</button>
        </div>
        <div className='flex flex-col gap-1'>
            <p className=' text-base font-semibold'>Title</p>
            <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='add a title' className='rounded-md p-2 outline-none bg-[#F9F9F8]' />
        </div>
        <div className='flex flex-col gap-1'>
            <p className=' text-base font-semibold'>Title</p>
            <textarea onChange={(e) => setBody(e.target.value)} type='text' placeholder='add a title' className='rounded-md h-20 p-2 outline-none bg-[#F9F9F8]' />
        </div>
        <div className='flex flex-col gap-1'>
        <p className=' text-base font-semibold'>Tags</p>
        <div className="flex gap-8">
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick={e => setCategory('work')} className="bg-[#d2ceff] w-5 h-5 rounded-full"/>
                <p className='text-sm'>work</p>
            </div>
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick={e => setCategory('study')} className="bg-[#d1e5f7] w-5 h-5 rounded-full"/>
                <p className='text-sm'>study</p>
            </div>
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick={e => setCategory('entertainment')} className="bg-[#ffcece] w-5 h-5 rounded-full"/>
                <p className='text-sm'>entertainment</p>
            </div>
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick={e => setCategory('family')} className="bg-[#daf2d6] w-5 h-5 rounded-full"/>
                <p className='text-sm'>family</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CreateNew