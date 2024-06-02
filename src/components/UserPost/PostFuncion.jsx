import { useState } from 'react'

const PostFunction = () => {
  const [file, setFile] = useState(null)
  const [post, setPost] = useState('')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
  }

  const postText = (e) => {
    setPost(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (file || post.trim() !== '') {
      console.log('Arquivo selecionado:', file)
      console.log('Texto do post:', post)
      // Adicione aqui o código para enviar o arquivo e o texto do post para o servidor
    } else {
      console.log('Nenhum arquivo selecionado e nenhum texto inserido')
    }
  }

  return { handleFileChange, postText, handleSubmit }
}

export default PostFunction;
