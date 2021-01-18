import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-item.styles.scss';

// per questo componente non abbiamo bisogno dello stato, quindi facciamo un functional component
/* un item è fatto così
    {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
      }  quindi gli passiamo sti dati */ 

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)

export default CollectionItem;