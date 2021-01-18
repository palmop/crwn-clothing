import React from 'react';

import CollectionItem, {ColletioItem} from  '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
/*
items è l'array degli elementi di una collection
quando fai il filter su items passi l'emento i-esimo e il suo indice, quidni 
la function idx < 4 torna false per tutti gli elemento oltre il quarto

una collection è tipo
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25
            },
            {..},
            {..}
            ...
        ]
    }
a noi in questo componente arrica title e l'array degli items
*/

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps} />  
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;