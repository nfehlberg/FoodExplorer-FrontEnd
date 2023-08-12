import { useEffect, useState } from 'react';
import { api } from '../../services/api';


import { Container, Content, Slogan } from './style';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import coverPhoto from '../../assets/photocover.png';

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

 
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search])

  return (
      <Container>
        <Header search={setSearch}/>
        <Content>
          <Slogan>
            <img src={coverPhoto} alt="cover photo" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Slogan>
          {
            dishes.filter(dish => dish.category == "dishes").length > 0 &&
            <Section title="Pratos principais">
              {
                dishes.filter(dish => dish.category == "dishes").map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish} 
                  />
                ))
              }
            </Section>
          }

          {
            dishes.filter(dish => dish.category == "dessert").length > 0 &&  
            <Section title="Sobremesas">
              {
                dishes.filter(dish => dish.category == "dessert").map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish} 
                  />
                ))
              }
            </Section>
          }  

          { 
            dishes.filter(dish => dish.category == "drinks").length > 0 &&
            <Section title="Bebidas">
              { 
                dishes.filter(dish => dish.category == "drinks").map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish} 
                  />
                ))
              }
            </Section>
          }
          
        </Content>
        <Footer />

      </Container>
  )
}