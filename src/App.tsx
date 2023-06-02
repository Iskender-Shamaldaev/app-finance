import React, {useState} from 'react';
import {IItems} from "./types";
import {nanoid} from "nanoid";
import Form from "./components/Form";
import './App.css';
import Items from "./components/Items/Items";

const App = () => {
    const [items, setItems] = useState<IItems[]>([
        {id: nanoid(),name:'Bottle of water', price: 25},
        {id: nanoid(),name:'Milk', price: 40},
        {id: nanoid(),name:'Bread', price: 15},
        {id: nanoid(),name:'Dinner at cafe', price: 400},
    ]);


    const onDelete = (id: string) => {
        setItems(prevState => prevState.filter(item  => item.id !== id))
    };

    const getTotalSum = () => {
        return items.reduce((acc, value) => acc + value.price, 0);
    };

    const onSubmit = (data: IItems) => {
        setItems(prevState => [
            ...prevState,
            { ...data },
        ]);

    };


    return (
      <div style={{ width: '700px', margin: '20px auto'}}>
        <Form onSubmitHandler={onSubmit}/>
          <Items items={items} onDelete={onDelete}></Items>
          <p className="text-center mt-3">
              <strong>Total price: {getTotalSum()}</strong>
          </p>

      </div>
  );
};

export default App;
