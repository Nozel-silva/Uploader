import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UploadPage = () => {
  const [files, setFiles] = useState([])
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const uploaded = Array.from(e.target.files)
    setFiles(uploaded)
    localStorage.setItem('uploadedFiles', JSON.stringify(uploaded.map(file => file.name)))
  }

  const handleNext = () => {
    navigate('/downloads')
  }

  return (
    <div className="container">
      <h1>Upload PDF or DOCX files</h1>
      <input type="file" multiple accept=".pdf,.docx" onChange={handleFileChange} />
      <br />
      <button onClick={handleNext} disabled={files.length === 0}>Next</button>
    </div>
  )
}

export default UploadPage
