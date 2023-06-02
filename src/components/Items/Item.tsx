import React from 'react';
import {Button, ListGroup} from "react-bootstrap";
import {IItems} from "../../types";

interface  IProps {
    item: IItems,
    onDelete: (id: string) => void
}

const Item: React.FC<IProps> = ({item, onDelete}) => {
    return (
        <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center ">
            <div>{item.name}</div>
            <div>
                <strong className="me-3">{item.price}KGS</strong>
                <Button variant="outline-danger" onClick={() => onDelete(item.id)}>X</Button>
            </div>
        </ListGroup.Item>
    );
};

export default Item;