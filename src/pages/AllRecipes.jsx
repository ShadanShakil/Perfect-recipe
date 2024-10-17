import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router";
import axios from "axios";
import Loader from "../components/Loader";

function AllRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        const data = res.data.recipes;
        setAllRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-1 flex flex-wrap items-center justify-center">
          {allRecipes.map((item) => (
            <RecipeCard items={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllRecipes;
