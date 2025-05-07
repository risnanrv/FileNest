import React from 'react'
import UploadForm from './components/UploadForm/UploadForm'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <UploadForm/>
      
    </div>
  )
}

export default App
