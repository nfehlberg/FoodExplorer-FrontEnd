import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Content, ButtonBack, Form, SectionIngredients, InputWrapper } from "./style";
import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { IngredientItem } from "../../components/Ingredient";

export function New() {
  const { user } = useAuth()
    
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Add and Remove Ingredients
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
      if (newIngredient.length < 3) {
          return alert("Erro: Você está tentando inserir um nome de ingrediente inválido!");
      } else {
          setIngredients(prevState => [...prevState, newIngredient]);
          setNewIngredient("");
      }
  }

  function handleRemoveIngredient(deleted){
      setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  // Create New Dish Function
  async function handleNewDish() {
      if (!image) {
          return alert("Erro: Você não inseriu uma imagem para o prato!");
      }
      
      if (!title) {
          return alert("Erro: Você não informou o nome do prato!");
      }

      if (ingredients.length < 1) {
          return alert("Erro: Adicione pelo menos um ingrediente!")
      }

      if (newIngredient) {
          return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
      }

      if (!category) {
          return alert("Erro: Você não selecionou a categoria do prato!");
      }

      if (!price) {
          return alert("Erro: Você não informou o preço do prato!");
      }

      if (!description) {
          return alert("Erro: Você não informou uma descrição para o prato!");
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);

      ingredients.map(ingredient => (
          formData.append("ingredients", ingredient)
      ))

      await api
          .post("/dishes", formData)
          .then(alert("Prato adicionado com sucesso!"), navigate("/"))
          .catch((error) => {
              if (error.response) {
                  alert(error.response.data.message);
              } else {
                  alert("Erro ao criar o prato!");
              }
          });  

      setLoading(false);
  }
  return (
    <Container>
      <Header />
      {
        user.isAdmin &&
        <Content>
          <ButtonBack>
            <Link to="/"> <FiChevronLeft size={30}/>Voltar</Link>
          </ButtonBack>

          <Form>
            <header>
              <legend>Criar prato</legend>
            </header>

            <InputWrapper>
              <div className="smallBox">
                <label id="file" htmlFor="image">
                  Imagem do prato
                  <div>
                    <FiUpload size={24}/>
                    <span>Selecione a imagem</span>
                    <input 
                      id="image" 
                      type="file"
                      onChange={e => setImage(e.target.files[0])}
                    />
                  </div>
                </label>
              </div>
              <Input 
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />
              
           <div className="dishCategory">
            <p>Categoria</p>

            <select defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
            <option value="default" disabled>Selecione a categoria</option>
           <option value="dishes">Pratos</option>
            <option value="drinks">Bebidas</option>
            <option value="dessert">Sobremesas</option>
            </select> 
            </div>
            </InputWrapper>

            <InputWrapper>
              <SectionIngredients>
                <span>Ingredientes</span>
                <div>
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem 
                        key={String(index)} 
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)} 
                      />
                    ))
                  }
                  <IngredientItem 
                    isNew 
                    value={newIngredient}
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </SectionIngredients>
              <div className="smallBox">
                <Input
                  label="price" 
                  title="Preço" 
                  type="text" 
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>
            <Textarea 
              label="Description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
            <button
              type="button"
              onClick={handleNewDish}
              disabled={loading}
            >
              {loading ? "Adicionando pedido" : "Adicionar pedido"}
            </button>
          </Form>

        </Content>
      }
      <Footer />
    </Container>
  )
}