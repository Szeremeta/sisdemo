import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductEdit = ({
    product: productEdit,
    handleSubmit
}) => {
    const [product, setProductEdit] = useState(productEdit);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        const newValue = type === 'checkbox' ? checked : value;

        setProductEdit({
            ...product,
            [name]: newValue
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(product);
    };

    return (
        <form className="product-form" onSubmit={handleFormSubmit}>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" required value={product.description} onChange={handleChange}  />
            
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" value={product.expiryDate} onChange={handleChange}/>
            
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" required value={product.category} onChange={handleChange}>
                <option value="Fruit">Fruit</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" min="0" step="0.01" required value={product.price} onChange={handleChange}/>
            
            <label htmlFor="onSpecial" style={{width: '40px'}}>Special:</label>
            <input type="checkbox" id="onSpecial" name="onSpecial" defaultChecked={product.onSpecial} style={{width: '20px'}} onChange={handleChange}/>
            
            <input type="submit" value="Save" />
        </form>
    );
}

ProductEdit.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        expiryDate: PropTypes.string,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        onSpecial: PropTypes.bool,
    }),
    handleSubmit: PropTypes.func
}

ProductEdit.defaultProps = {
    product: {},
    handleSubmit: () => { },
}

export default ProductEdit;