import React from 'react';
import {ListGroup} from "react-bootstrap";
import {IItems} from "../../types";
import Item from "./Item";

interface  IProps {
    items: IItems[];
    onDelete: (id:string) => void
}

const Items: React.FC<IProps> = ({items, onDelete}) => {
    return (
        <div style={{ borderRadius: '10px', overflow: 'hidden'}} className="items border border-1">
            <ListGroup variant="flush">
                {items.map(item => <Item key={item.id} item={item} onDelete={onDelete}/>)}
            </ListGroup>
        </div>
    );
};

export default Items;