export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center gap-5">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        className="h-8 w-8"
        style={{ accentColor: "#e5771f" }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}
      className="cursor-pointer bg-transparent border-none text-3xl p-2"
      style={{ transform: 'translateY(2px)' }}> 
      ❌
      </button>
    </li>
  );
}
