import { useState } from 'react'

const PostFunction = () => {
  const [postData, setPostData] = useState({ file: null, text: '' })

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0]
    setPostData({ ...postData, file: selectedFile })
  }

  const postText = (event) => {
    setPostData({ ...postData, text: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (postData.file || postData.text.trim() !== '') {
      console.log('Arquivo selecionado:', postData.file)
      console.log('Texto do post:', postData.text)
      // Adicione aqui o código para enviar o arquivo e o texto do post para o servidor
    } else {
      console.log('Nenhum arquivo selecionado e nenhum texto inserido')
    }
  }

  const handleRemoveFile = () => {
    setPostData({ ...postData, file: null })
  }

  return { handleFileSelect, postText, handleSubmit, handleRemoveFile }
}

export default PostFunction
