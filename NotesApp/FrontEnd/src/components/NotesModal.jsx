import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NotesModal({closeModal, addNote}) {

    const navigate = useNavigate();
const [title,setTitle] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = async(e)=>
    {
        e.preventDefault()

        try{
            addNote(title, description);
        }catch(error){
            console.log(error);
            
        }
    };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
    <form action="" method='post' onClick={handleSubmit}>
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Title"
      onChange={(e)=> setTitle(e.target.value)}
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <textarea
      name="description"
      id="description"
      placeholder="Enter the note"
      rows="6"
      onChange={(e)=> setDescription(e.target.value)}
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    ></textarea>
    <div className="flex justify-end gap-4 mt-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Save
      </button>
    </div>
    </form>
    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400" onClick={closeModal}>
    Cancel       </button>

  </div>
</div>
  )
}

export default NotesModal
