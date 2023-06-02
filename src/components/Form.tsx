import React, {useState} from 'react';
import {Button, InputGroup} from "react-bootstrap";
import {Form as FormWrap} from "react-bootstrap";
import {nanoid} from "nanoid";
import {IItems} from "../types";

interface IProps {
    onSubmitHandler: (data: IItems) => void;
}

const Form: React.FC<IProps> = ({onSubmitHandler}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onForSubmit = (event:React.FormEvent) => {
        event.preventDefault();

        onSubmitHandler({
            id: nanoid(),
            name,
            price: parseInt(price),
        });

        setName('');
        setPrice('');
    };

    return (
        <FormWrap className="d-flex justify-content-between" onSubmit={onForSubmit}>
            <FormWrap.Group className="mb-3 me-4">
                <FormWrap.Control
                    type="text"
                    placeholder="Item name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </FormWrap.Group>

            <InputGroup className="mb-3 me-4">
                <FormWrap.Control
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
                <InputGroup.Text>KGS</InputGroup.Text>
            </InputGroup>
            <FormWrap.Group>
                <Button type="submit">Add</Button>
            </FormWrap.Group>
        </FormWrap>
    );
};

export default Form;