import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';
import { useNavigate } from 'react-router-dom';

import { FiSearch, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { Container, Content, Logo, Nav, Favorites, NewDish, Search, Button, Logout } from './style';

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';


export function Header({search, toggleFavorites}) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const { user, signOut } = useAuth();
  const { cart, orders } = useCart();
  const navigate = useNavigate();

  const isCartIsEmpty = cart.length === 0;

  function handleGoToCart() {
    navigate("/cart")
  }

  function handleGoToOrders() {
    navigate("/orders")
  }

  return (
    <Container>
      <Content>
        <Logo to="/">
          <img src={logo} alt="polígono azul" />
          <strong>food explorer</strong>
          { user.isAdmin ? <span>admin</span> : <span>Cliente</span>}
        </Logo>
          
        <Nav isVisible={menuIsVisible}>
          {
            user.isAdmin ?
            <NewDish to="/new">+ Adicionar novo prato</NewDish>
            :
            <br></br>
          }
          
          <Search>
          {<FiSearch size={20}/>}
          <input 
            type="text"
            placeholder="Busque pelas opções de pratos"  
            onChange={e => {search(e.target.value)}}
          />
          </Search>

          {
            user.isAdmin ? 
            <Button
              type='button'
              onClick={handleGoToOrders}
            >
              <img src={receipt} alt="receipt"/>
              pedidos<span>({orders.length})</span>
            </Button>
            :
            <Button
              type='button'
              onClick={handleGoToCart}
              disabled={isCartIsEmpty}
            >

              <img src={receipt} alt="receipt"/>
              Meu pedido <span>({cart.length})</span>
            </Button>
          }

          <Logout to="/" onClick={signOut}>
          <FiLogOut />
          </Logout>
        </Nav>

        <button
          type='button'
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
      </Content>
    </Container>
  )
}