import { useState } from "react";


export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description) return;
  
      const newItem = {
        description,
        quantity,
        packed: false,
        id: Date.now(),
      };
  
      onAddItems(newItem);
  
      setDescription("");
      setQuantity(1);
    }
    return (
      <form className="add-form bg-[#e5771f] py-11 flex items-center justify-center gap-3" onSubmit={handleSubmit}>
        <h3 className="mr-7 text-5xl"> What do you need for your 🛩️ trip</h3>
        <select 
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-[#ffebb3] text-[#5a3e2b] font-inherit border-none rounded-full py-3 px-8 font-bold text-2xl cursor-pointer"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item ...."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-[#ffebb3] text-[#5a3e2b] font-inherit border-none rounded-full py-5 px-8 font-bold text-2xl cursor-pointer"
        />
        <button className="bg-[#76c7ad] text-[#5a3e2b] uppercase font-inherit border-none rounded-full py-6 px-12 font-bold text-2xl cursor-pointer">Add</button>
      </form>
    );
}
