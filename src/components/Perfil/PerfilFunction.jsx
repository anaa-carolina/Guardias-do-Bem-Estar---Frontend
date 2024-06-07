import { useState, useEffect } from 'react'

// export const useUserProfile = () => {
//   const [user, setUser] = useState(null)
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch('URL_DA_API_DO_USUÁRIO')
//         if (!response.ok) {
//           throw new Error('Erro ao obter dados do usuário')
//         }
//         const userData = await response.json()
//         setUser(userData)
//       } catch (error) {
//         console.error('Erro ao obter dados do usuário:', error)
//       }
//     }

//     const fetchUserPosts = async () => {
//       try {
//         const response = await fetch('URL_DA_API_DE_POSTAGENS')
//         if (!response.ok) {
//           throw new Error('Erro ao obter postagens do usuário')
//         }
//         const userPosts = await response.json();
//         setPosts(userPosts);
//       } catch (error) {
//         console.error('Erro ao obter postagens do usuário:', error)
//       }
//     }

//     fetchUser()
//     fetchUserPosts()
//   }, [])

//   return { user, posts }
// }

// export const editUserProfile = async () => {
//   try {
//     const response = await fetch('URL_PARA_EDITAR_PERFIL', {
//       method: 'PUT',
//       // Adicione os cabeçalhos e o corpo da requisição conforme necessário
//     });
//     if (!response.ok) {
//       throw new Error('Erro ao editar perfil do usuário')
//     }
//     alert('Perfil editado com sucesso')
//   } catch (error) {
//     console.error('Erro ao editar perfil do usuário:', error)
//     alert('Ocorreu um erro ao editar o perfil do usuário')
//   }
// }

export const useUserProfile = () => {
  const [user, setUser] = useState({
    posts: 0,
    followers: 0,
    following: 0
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Simulando uma chamada para a API para obter dados do usuário
        const userData = { posts: 0, followers: 0, following: 0 }; // valores iniciais como 0
        setUser(userData);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        // Simulando uma chamada para a API para obter postagens do usuário
        const userPosts = []; // inicialmente, não há postagens
        setPosts(userPosts);
      } catch (error) {
        console.error('Erro ao obter postagens do usuário:', error);
      }
    };


    fetchUser();
    fetchUserPosts();
  }, []);

  return { user, posts };
  
};

export const editUserProfile = async () => {
  try {
    // Lógica para editar o perfil do usuário
  } catch (error) {
    console.error('Erro ao editar perfil do usuário:', error);
    alert('Ocorreu um erro ao editar o perfil do usuário');
  }
};
