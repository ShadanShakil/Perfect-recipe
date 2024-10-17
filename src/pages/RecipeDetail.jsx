import { Card, CardBody, CardHeader, Image, Divider, Checkbox, Button } from "@nextui-org/react";
import axios from "axios";
import { StarIcon, ClockIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";

function RecipeDetail(){
    const {id} = useParams();
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(()=>{
    setNotFound(false);
    axios.get(`https://dummyjson.com/recipes/${id}`)
    .then((res)=>{
        const data = res.data;
        setRecipe(data);
        setLoading(false);

    })
    .catch((err) => {
        console.log(err);
        setLoading(false);
        setNotFound(true);
      });
  }, []);
    return (
        <div className="container mx-auto">
        {loading ? (
            <Loader />
        ) : notFound ? (
          <h1 className="text-center text-3xl">Product Not Found</h1>
        ) : (
        <div className="max-w-3xl mx-auto p-4 py-10 flex">
          <Card className="w-full">
            <CardHeader className="flex-col items-start px-4 pt-4">
              <h1 className="text-2xl font-bold">{recipe.name}</h1>
              <div className="flex items-center mt-2">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">{recipe.rating} Ratings</span>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Mixed Greens Salad"
                className="object-cover rounded-xl"
                src={recipe.image}
                width={300}
                height={200}
              />
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">Prep time: {recipe.prepTimeMinutes} mins</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">Cook time: {recipe.cookTimeMinutes} mins</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">Servings: {recipe.servings}</span>
                </div>
              </div>
              <h1 className="mt-5">Difficulty: {recipe.difficulty}</h1>
              <h1>Cuisine: {recipe.cuisine}</h1>
              <h1 className="mt-3 text-md font-semibold">Type:</h1>
              {recipe.mealType.map((item, ind)=>(
                <ul key={ind}>
                    <li>{item}</li>
                </ul>
              ))}
              <Divider className="my-4" />
              <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((item,ind)=>(
                    <li key={ind} className="flex items-center">
                    <Checkbox size="sm" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
              <Divider className="my-4" />
              <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
              <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((item, ind)=>(
                   <li key={ind} className="flex items-center">
                   <Checkbox size="sm" />
                   <span className="ml-2">{item}</span>
                 </li>
                ))}
              </ol>
              <Divider className="my-4" />
              <h2 className="text-xl font-semibold mb-2">Cooking Note:</h2>
              <p className="text-sm text-gray-600">
                Ensure the freshness of your mixed greens. Look for crisp, vibrant leaves with no signs of wilting or browning.
              </p>
            </CardBody>
          </Card>
          

          <Card className="w-1/3 h-1/6 mx-auto bg-white shadow-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Nutrition Facts</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ul className="space-y-1">
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Calories</span>
            <span className="font-medium">{recipe.caloriesPerServing}</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Carbs</span>
            <span className="font-medium">80g</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Fat</span>
            <span className="font-medium">18g</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Protein</span>
            <span className="font-medium">24g</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Fiber</span>
            <span className="font-medium">23g</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Net carbs</span>
            <span className="font-medium">56g</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Sodium</span>
            <span className="font-medium">444mg</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-gray-700">Cholesterol</span>
            <span className="font-medium">10mg</span>
          </li>
        </ul>
      </CardBody>
    </Card>
        </div>

        // nutritional fact 
        
        )}
    </div>
      );
}

export default RecipeDetail;