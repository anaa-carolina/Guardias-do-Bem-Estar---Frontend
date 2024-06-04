import { useState, useEffect } from 'react'

// Função para buscar os dados do usuário (simulação de uma chamada de API)
export const useUserProfile = () => {
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
  
    useEffect(() => {
      // Simulando a obtenção de dados de um usuário
      const fetchUser = async () => {
        const userData = {
          username: 'john_doe',
          name: 'John Doe',
          bio: 'This is my bio',
          image: 'user_image_url',
          posts: 42,
          followers: 120,
          following: 150,
        };
        const userPosts = [
          // Simulando algumas postagens do usuário
          { id: 1, imageUrl: 'post_image_1_url' },
          { id: 2, imageUrl: 'post_image_2_url' },
          // ...mais postagens
        ]
        setUser(userData)
        setPosts(userPosts)
      }
  
      fetchUser()
    }, [])
  
    return { user, posts }
  }
  
  // Função para lidar com a edição do perfil
  export const editUserProfile = () => {
    alert('Edit Profile Clicked')
  }