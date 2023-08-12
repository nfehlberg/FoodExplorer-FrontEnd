import { Container, Content } from './style';
import logoFooter from '../../assets/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoFooter} alt="Logo" />
          <span>food explorer</span>
        </div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}