import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import NotesModal from '../components/NotesModal';

function Home() {
  const [isModelopen, setIsModelOpen] = useState(false);

  const closeModal = ()=>{
    setIsModelOpen(false);
  }

  const addNote = async(title, description)=>
    {

        try{
            const response = await axios.post('http://localhost:3000/api/note/add',{title, description},{
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")} `
              }
            });
            if(response.data.success){
                navigate('/');
                closeModal
            }

        }
        catch(error){
            console.log(error);
        }
    };


  return (
    <div>
      <Navbar />
      <h2>Home</h2>
      <button 
        onClick={()=>
          setIsModelOpen( !isModelopen) }
        className='fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold'>+</button>
        {isModelopen && <NotesModal 
        closeModal = {closeModal}
        addNote = {addNote}
        />}
    </div>
  )
}

export default Home
