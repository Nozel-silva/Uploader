import React from 'react'

const DownloadPage = () => {
  const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || []

  return (
    <div className="container">
      <h1>Uploaded Files</h1>
      <ul>
        {uploadedFiles.map((fileName, index) => (
          <li key={index}>
            <a href="#" download={fileName}>{fileName}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DownloadPage
