import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed));

  return (
    <div className="list bg-[#5a3e2b] text-[#ffebb3] py-16 flex flex-col justify-between items-center gap-8">
      <ul className="list-none w-4/5 grid gap-3 justify-center content-start" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
        className="bg-[#ffebb3] text-[#5a3e2b] font-inherit border-none uppercase  rounded-full py-3 px-8 font-bold text-2xl cursor-pointer mx-3">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button
          className="bg-[#ffebb3] text-[#5a3e2b] border-none rounded-full  px-10 font-bold text-2xl cursor-pointer uppercase py-3 mx-4"
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
