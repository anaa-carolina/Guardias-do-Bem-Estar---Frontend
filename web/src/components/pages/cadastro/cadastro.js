import React, { useState } from 'react'
import './cadastro.css';


function Cadastro({ onSwitchPage }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [cidade, setCidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    // Dados do novo usuário
    const userData = {
      nome,
      email,
      telefone,
      nascimento,
      cpf,
      cep,
      uf, 
      cidade,
      endereco,
      numero,
      username,
      password,
      confirmPassword,
    };

    try {
      // Simulação de requisição POST para cadastrar o novo usuário
      console.log('Dados do novo usuário:', userData);
      // Após a requisição bem-sucedida, pode-se redirecionar para outra página ou realizar outras ações
    } catch (error) {
      console.error('Erro ao cadastrar novo usuário:', error)
    }
  };

  return (
    <div className="cadastro-usuario">
      <div className="cadastro-usuario-box">
        <div className="cadastro-usuario-form">
          <h1>Cadastrar Novo Usuário</h1>
          <hr />
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="username">Usuário:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Endereço de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
          <div className="voltar-login">
            <p>Já possui uma conta? <a href="#" onClick={onSwitchPage}>Faça login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
