import React, { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form';
import PackingList from './components/ParkingList';
import Stats from './components/Stats';





export default function App() {


const [items, setItems] = useState([]);

 

function handleAddIitems(item) {
  return setItems((items) => [...items, item]);
}

function handleDeleteItem(id) {
  setItems((items) => items.filter((item) => item.id !== id));
}

function handleToggleItem(id) {
  setItems((items) =>
    items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );
}

function handleClearList(){
  const confirm = window.confirm("Are you sure you want to delete all items?");
  if (confirm) setItems([]);
}
// text-2-rem text-customColor font-quicksand font-medium w-full h-screen grid grid-rows-auto grid-rows-1fr grid-rows-auto
  return (
    <div className='app text-4xl text-customColor font-quicksand font-bold w-full h-screen grid' style={{ gridTemplateRows: 'auto auto 1fr auto' }}>
      <Logo />
      <Form onAddItems={handleAddIitems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList ={handleClearList}
      />
       <Stats items={items} />
    </div>
  )
}
