import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
// import { AuthContext } from '../autenticacao/AuthProvider'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password,
        }

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })

            if (response.ok) {
                Login() // Chama a função de login do contexto
                navigate('/home') // Redireciona para a página inicial após o login bem-sucedido
            } else {
                console.log('Login failed')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    // Função para lidar com o envio do formulário
    const handleLogin = (e) => {
        e.preventDefault() // Evitar o envio padrão do formulário

        // Simulando validação do nome de usuário e senha
        if (username === 'seuNickname' && password === 'suaSenha') {
            navigate('/homepage') // Redirecionar para a página inicial se o login for bem-sucedido
        } else {
            setErro('Nome de usuário ou senha incorretos.') // Definir mensagem de erro
        }
    }

    const handleSignUpClick = () => {
        navigate('/cadastro')
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="login">
            <div className="loginBox">
                <div className="login-access">
                    <h1>Bem vinda</h1>
                    <hr />
                    <h2>Faça login para entrar na nossa comunidade!</h2>

                    {/* No seu JSX, adicione o formulário com os campos de entrada para o nome de usuário e a senha */}
                    <form className="access" onSubmit={handleLogin}>
                        {/* Input para o nome de usuário */}
                        <div className="accessGroup">
                            <label htmlFor="usuaria" />
                            <input
                                type="text"
                                id="usuaria"
                                name="usuaria"
                                placeholder="Usuária"
                                className="inputField"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        {/* Input para a senha */}
                        <div className="accessGroup">
                            <label htmlFor="senha" />
                            <div className="passwordInputWrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="senha"
                                    name="senha"
                                    placeholder="Senha"
                                    className="inputField"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="passwordToggleIcon" onClick={toggleShowPassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        {/* Botão de envio */}
                        <button type="submit">Entrar</button>

                        {/* Exibição de erro, se houver */}
                        {erro && <p>{erro}</p>}


                        <div className="redefinirSenha">
                            <a href="/cadastro">Esqueci minha senha</a> {/* Link para a página de atualização de senha */}
                        </div>

                    </form>

                    <div className="newUser">
                        <hr />
                        <h1>É nova por aqui?</h1>
                        <button type="button" onClick={handleSignUpClick}>Criar conta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
