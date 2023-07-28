import { useRef, useState } from "react"

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./style"

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name:inputName.current.value, age:inputAge.current.value }])
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  )

}

export default App
