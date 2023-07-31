import "./RetroCategory.css";
import RetroItem from "./RetroTask";

const RetroCategory = ({ category, items, setItems, moveItem }) => {
  const handleAddItem = () => {
    setItems((prevtasks) => ({
      ...prevtasks,
      [category]: [
        ...prevtasks[category],
        { id: Date.now(), text: "", votes: { up: 0, down: 0 } },
      ],
    }));
  };

  const handleTextChange = (itemID, newText) => {
    const currentItems = [...items];
    const updatedItems = currentItems.map((item) => {
      if (item.id === itemID) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems((prevItems) => ({
      ...prevItems,
      [category]: updatedItems,
    }));
  };

  const handleVoteChange = (itemID, newVotes) => {
    const currentItems = [...items];
    const updatedItems = currentItems.map((item) => {
      if (item.id === itemID) {
        return { ...item, votes: newVotes };
      }
      return item;
    });
    setItems((prevItems) => ({
      ...prevItems,
      [category]: updatedItems,
    }));
  };

  const handleDeleteItem = (index) => {
    const currentItems = [...items];
    currentItems.splice(index, 1);
    setItems((prevItems) => ({
      ...prevItems,
      [category]: currentItems,
    }));
  };

  return (
    <div className="retro-category">
      <h3>{category}</h3>
      <button onClick={handleAddItem}>+</button>
      {items.map((item, index) => (
        <RetroItem
          key={`${item.id}-${index}`} // -->OJO
          index={index}
          item={item}
          category={category}
          onChangeText={handleTextChange}
          onDelete={handleDeleteItem}
          onMove={moveItem}
          onVote={handleVoteChange}
        />
      ))}
    </div>
  );
};

export default RetroCategory;
