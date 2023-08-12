import { Container } from './style';

export function Input({label, title,...rest}) {
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <input id={label} {...rest} />
    </Container>
  )
}