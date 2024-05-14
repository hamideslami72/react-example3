import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function Edit({handelEdit, article}) {

  const [newTitle, setNewTitle] = useState(article?.title)

    const NewTitleHandler = (event) => {
      setNewTitle(event.target.value)
    } 

  const updateArticleHandler = (event, article) => {
    if(newTitle != ""){
      handelEdit(article, newTitle)
    }
  }

  return (
    <>
      <button onClick={()=>document.getElementById('editModal'+article.id).showModal()}>
        <PencilSquareIcon className='h-6 w-6 shrink-0'/>
      </button>
      <dialog id={`editModal${article.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-left"> Edit Article</h3>
          <p className="py-2">
            <input 
              type="text" 
              placeholder="Type here" 
              defaultValue={newTitle}
              onChange={NewTitleHandler} 
              className="rounded w-full" 
            />
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div className='grid grid-flow-col auto-cols-max gap-4'>
                <button onClick={(event)=> updateArticleHandler(event, article)} className="px-4 py-2 bg-green-300 rounded">Update</button>
                <button className="px-4 py-2 bg-gray-300 rounded">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}