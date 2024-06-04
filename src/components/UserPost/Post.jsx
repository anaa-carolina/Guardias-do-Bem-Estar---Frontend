import './Post.css'

import AddFiles from '../../assets/img/icones/feed/files.png'
import PostFunction from './PostFuncion'

import { useState } from 'react'

const Post = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { handleFileSelect, postText, handleSubmit } = PostFunction()

  const [selectedFile, setSelectedFile] = useState(null)
  const handleRemoveFile = () => {
    setSelectedFile(null)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className='postPage'>

      <div className='postBox'>

        <div className='postTop'>
          <h1>Criar Post</h1>
          <button className='closeButton' onClick={handleClose}>X</button>
        </div>

        <hr className='separator' />

        <div className='postPerfil'>
          "perfil"
        </div>

        <form onSubmit={handleSubmit}>

          <div className='post'>
            <textarea
              className='editableContent'
              placeholder="Compartilhe o que está pensando:"
              onChange={postText}
              type="text"
            />
          </div>

          <div className='postFile'>
            <div className='addFiles'>
              <h2>Adicione uma foto</h2>
              <div className='files'>
                <label>
                  <img alt="Add Files" src={AddFiles} onClick={handleFileSelect} />
                  <input type="file" id="fileInput" className="fileInput" onChange={(e) => setSelectedFile(e.target.files[0])} />
                </label>
              </div>
            </div>

            <div className='addedFiles'>
              {selectedFile && (
                <div className='selectedFile'>
                  <p>{selectedFile.name}</p>
                  <button onClick={handleRemoveFile}>Remover</button>
                </div>
              )}
            </div>

          </div>

          <div className='send'>
            <button className='sendButton' type='submit'>Postar</button>
          </div>

        </form>
      </div >
    </div >
  )
}

export default Post
