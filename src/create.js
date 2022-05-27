const addCard = (card) => {
  let newCards = [card, ...Cards];
  setCards(newCards);
};

const renderAddCard = () => {
  return (
    <div className="add-card">
      <h1>Add Card</h1>
      <button onClick={addCard}>Add Card</button>
      <input type="text" value={this.state.value} onChange={this.addCard} />
    </div>
  );
};

export default renderAddCard;
