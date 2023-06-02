import React, {useState} from 'react';
import {IItems} from "./types";
import {nanoid} from "nanoid";
import {Button, Form, ListGroup, InputGroup} from "react-bootstrap";
import './App.css';

const App = () => {
    const [items, setItems] = useState<IItems[]>([
        {id: nanoid(),name:'Bottle of water', price: 25},
        {id: nanoid(),name:'Milk', price: 40},
        {id: nanoid(),name:'Bread', price: 15},
        {id: nanoid(),name:'Dinner at cafe', price: 400},
    ]);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onDelete = (id: string) => {
        setItems(prevState => prevState.filter(item  => item.id !== id))
    };

    const getTotalSum = () => {
        return items.reduce((acc, value) => acc + value.price, 0);
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setItems(prevState => [
            ...prevState,
            {
                id: nanoid(),
                name,
                price: parseInt(price),
            }
        ]);

        setName('');
        setPrice('');
    };

    console.log('App()');


    return (
      <div style={{ width: '700px', margin: '20px auto'}}>
          <div className="form">
              <Form className="d-flex justify-content-between" onSubmit={onSubmit}>
                  <Form.Group className="mb-3 me-4">
                      <Form.Control
                          type="text"
                          placeholder="Item name"
                          name="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                      />
                  </Form.Group>

                  <InputGroup className="mb-3 me-4">
                      <Form.Control
                          type="number"
                          placeholder="Price"
                          name="price"
                          value={price}
                          onChange={event => setPrice(event.target.value)}
                      />
                      <InputGroup.Text>KGS</InputGroup.Text>
                  </InputGroup>
                  <Form.Group>
                      <Button type="submit">Add</Button>
                  </Form.Group>
              </Form>
          </div>


          <div style={{ borderRadius: '10px', overflow: 'hidden'}} className="items border border-1">
              <ListGroup variant="flush">
                  {
                      items.map(item => (
                          <ListGroup.Item
                              key={item.id}
                              className="d-flex justify-content-between align-items-center ">
                              <div>{item.name}</div>
                              <div>
                                  <strong className="me-3">{item.price}KGS</strong>
                                  <Button variant="outline-danger" onClick={() => onDelete(item.id)}>X</Button>
                              </div>
                          </ListGroup.Item>
                      ))
                  }
              </ListGroup>
          </div>
          <p className="text-center mt-3">
              <strong>Total price: {getTotalSum()}</strong>
          </p>
      </div>
  );
};

export default App;
