export default function Stats({ items }) {

    if(!items.length) return (
        <p className="stats bg-[#76c7ad] text-center font-bold py-14">
          <em>Start adding some items to your packing List 🚀</em>
        </p>
      );
      const numItems = items.length;
      const numPacked = items.filter((item) => item.packed).length;
      const percentage = Math.round((numPacked/numItems)*100);
    
      return (
        <footer className="stats bg-[#76c7ad] text-center font-bold py-14">
          <em>
            {percentage===100? "You got everything! Ready to go 🛩️":
            `👜 You have ${numItems} items on your list, and you already packed ${numPacked}(${percentage}%)
            `}
          </em>
        </footer>
      );
}
