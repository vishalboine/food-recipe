import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./styles.css";
import PopUp from "../Modal/Popup";

const RecipeItem = (props) => {
  const { id, image, title, addToFavorites, ingredients, instructions } = props;
  const { theme } = useContext(ThemeContext);

  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className="recipe-item" key={id}>
      <div>
        <img src={image} alt="alt" />
      </div>
      <p style={theme ? { color: "#12343b" } : {}}>{title}</p>
      <button
        style={theme ? { backgroundColor: "#12343b" } : {}}
        onClick={addToFavorites}
      >
        Add to favorites
      </button>
      <button
        style={theme ? { backgroundColor: "#12343b" } : {marginLeft:"10px"}}
        onClick={()=> setIsOpen(true)}
      >
        Recipe
      </button>
      <PopUp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} title={title} ingredients={ingredients} instructions={instructions}/>
    </div>
  );
};

export default RecipeItem;
