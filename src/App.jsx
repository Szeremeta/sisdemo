import { useState } from 'react';
import { FILTER_OPTIONS, INITIAL_PRODUCT_LIST } from './App.constants';
import './App.css';
import Product from './components/Product/Product';
import ProductEdit from './components/ProductEdit/ProductEdit';

function App() {
  const { FRUIT, VEGETABLES, ALL } = FILTER_OPTIONS;
  const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST);
  const [editProduct, setEditProduct] = useState();
  const [addProduct, setAddProduct] = useState();
  const [filter, setFilter] = useState(ALL);
  let lastId = productList.length;
  const filteredProducts = filter !== ALL ? productList.filter((p) => p.category === filter) : productList;
  
  const onDelete = (id) => {
    setProductList(productList.filter((p) => p.id !== id)); 
  }

  const onEdit = (id) => {
    setEditProduct(productList.find((p) => p.id === id));
  }

  const onSubmit = (formData) => {
    const index = productList.findIndex(p => p.id === formData.id);

    if (index !== -1) {
      const newProducts = [
        ...productList.slice(0, index),
        formData,
        ...productList.slice(index + 1)
      ];
      setProductList(newProducts);
    }

    // close edit panel regardless
    setEditProduct();
  }

  const onSubmitAdd = (formData) => {
    setProductList( [...productList, formData]);
    lastId += 1;
    // close add panel regardless
    setAddProduct();
  }

  return (
    <div className="App">
      <h1>SIS Product Store</h1>

      <div className="product-options">
        <h2>Available Products</h2>
        <button className={filter === FRUIT ? 'active' : ''} onClick={()=>setFilter(FRUIT)}>{FRUIT}</button>
        <button className={filter === VEGETABLES ? 'active' : ''} onClick={()=>setFilter(VEGETABLES)}>{VEGETABLES}</button>
        <button className={filter === ALL ? 'active' : ''} onClick={() => setFilter(ALL)}>{ALL}</button>
        <button onClick={() => setAddProduct({id: lastId, description: '', category: 'Fruit', price: 0 })}>Add Product</button>
      </div>
      
      <div className="product-list">
        {filteredProducts.map((p) => (
          <Product
            id={p.id}
            key={`${p.description}-${p.id}`}
            description={p.description}
            category={p.category}
            price={p.price}
            special={p.onSpecial}
            expiryDate={p.expiryDate}
            handleDelete={onDelete}
            handleEdit={onEdit}
          />
        ))}
      </div>

      {editProduct && (<ProductEdit handleSubmit={onSubmit} product={editProduct} />)}

      {addProduct && (<ProductEdit handleSubmit={onSubmitAdd} product={addProduct} />)}

    </div>
  );
}

export default App;
