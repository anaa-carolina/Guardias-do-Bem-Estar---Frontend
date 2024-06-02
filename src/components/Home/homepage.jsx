import './Homepage.css'
import Header from '../Header/Header'
import Post from '../UserPost/Post'

import { useState, useEffect } from 'react'

function Homepage() {
  const [posts, setPosts] = useState([])
  const [isPostBoxOpen, setIsPostBoxOpen] = useState(false)

  // Simulando a recuperação de posts de uma API
  useEffect(() => {
    // Esta função simula a busca de posts de uma API
    const fetchPosts = async () => {
      // Aqui você pode fazer uma chamada real para sua API
      // Exemplo: const response = await fetch('/api/posts');
      // const data = await response.json();

      // Para fins de exemplo, usaremos uma lista vazia para simular a ausência de posts
      const data = []
      setPosts(data)
    }

    fetchPosts()
  }, [])

  const togglePostBox = () => {
    setIsPostBoxOpen(!isPostBoxOpen)
  }

  return (
    <div className='feed' >

      <Header togglePostBox={togglePostBox} />

      <div className="homepage">
        {posts.length === 0 ? (
          <div className="no-posts-message">
            <p>Você ainda não tem publicações</p>
            <p>Adicione amigos para navegar no feed!</p>
            <h1>:(</h1>
          </div>
        ) : (
          <div className='newPost'>
            {posts.map((post, index) => (
              <Post key={index} title={post.title} content={post.content} />
            ))}
          </div>
        )}

        {isPostBoxOpen && <Post />}
      </div>

    </div>
  )
}

export default Homepage
