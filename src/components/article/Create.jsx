import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

export default function Create({handelAdd}) {

  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => { setIsOpen(true) }

  // Function to Close the modal
  const closeModal = () => { setIsOpen(false) }

  return (
      <>
        <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Article
        </button>
        <Modal isOpen={isOpen} onClose={closeModal} handelAdd={handelAdd} />
      </>
  )
}