import React from 'react';
import PropTypes from 'prop-types';

const Product = ({
    id,
    description,
    expiryDate,
    category,
    price,
    special,
    handleDelete,
    handleEdit,
}) => {
    return (
        <div className="product">
            <h2>{description}</h2>
            <h4>{category}</h4>
            <h1>&pound;{price}</h1>
            {expiryDate && (<p>Expiry Date: {expiryDate}</p>)}
            {special && (<div className="product-special">ON SPECIAL!!</div>)}
            <button onClick={()=>handleDelete(id)}>Delete</button>
            <button onClick={()=>handleEdit(id)}>Edit</button>
        </div>
    );
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    expiryDate: PropTypes.string,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    special: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
}

Product.defaultProps = {
    expiryDate: '',
    special: false,
    handleDelete: () => { },
    handleEdit: () => { },
}

export default Product;