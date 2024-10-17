"use client";

import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Image,
} from "@nextui-org/react";
import { db, storage } from "../utils/firebaseConfig"; // Import Firestore and Storage
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Storage functions
import { useNavigate } from "react-router";

export default function RecipeCreator() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([{ text: "", image: null }]);
  const [servings, setServings] = useState("");
  const [cookingTime, setCookingTime] = useState({ hours: "", minutes: "" });
  const [prepTime, setPrepTime] = useState({ hours: "", minutes: "" });
  const [cuisine, setCuisine] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("Lunch");

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (index, field, value) => {
    const newInstructions = [...instructions];
    newInstructions[index][field] = value;
    setInstructions(newInstructions);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const addInstruction = () => {
    setInstructions([...instructions, { text: "", image: null }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = null;

      // Upload main image if it exists
      if (mainImage) {
        const storageRef = ref(storage, `recipeImages/${mainImage.name}`);
        const uploadTask = uploadBytesResumable(storageRef, mainImage);

        // Wait for image upload to complete
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => reject(error),
            async () => {
              imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(imageUrl);
            }
          );
        });
      }

      // Prepare the recipe data
      const recipeData = {
        title,
        description,
        ingredients,
        instructions,
        servings,
        cookingTime,
        prepTime,
        cuisine,
        difficulty,
        type,
        mainImage: imageUrl, // Store the image URL
      };

      // Add the recipe data to Firestore
      const docRef = await addDoc(collection(db, "recipes"), recipeData);
      console.log("Document written with ID: ", docRef.id);
      navigate("/confirmation");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create new recipe</h1>
        <Button color="danger" onClick={handleSubmit}>
          Upload!
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            label="Recipe Title"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2">Recipe image:</p>
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer bg-gray-100 px-4 py-2 rounded-md">
              Set as cover
              <input
                type="file"
                className="hidden"
                onChange={handleMainImageChange}
                accept="image/*"
              />
            </label>
            {mainImagePreview && (
              <div className="relative w-24 h-24">
                <Image
                  src={mainImagePreview}
                  alt="Recipe cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <Textarea
            label="Description"
            placeholder="Introduce your recipe"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2">Ingredients:</p>
          {ingredients.map((ingredient, index) => (
            <Input
              key={index}
              placeholder={`Ingredient ${index + 1}`}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="mb-2"
            />
          ))}
          <Button onClick={addIngredient} size="sm">
            Add Ingredient
          </Button>
        </div>

        <div>
          <p className="mb-2">Instructions:</p>
          {instructions.map((instruction, index) => (
            <div key={index} className="mb-4">
              <Textarea
                placeholder={`Step ${index + 1}`}
                value={instruction.text}
                onChange={(e) =>
                  handleInstructionChange(index, "text", e.target.value)
                }
                className="mb-2"
              />
            </div>
          ))}
          <Button onClick={addInstruction} size="sm">
            Add Step
          </Button>
        </div>

        <div>
          <Input
            label="Servings"
            placeholder="Number of servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2">Cooking Time:</p>
          <div className="flex space-x-4">
            <Input
              placeholder="Hours"
              value={cookingTime.hours}
              onChange={(e) =>
                setCookingTime({ ...cookingTime, hours: e.target.value })
              }
            />
            <Input
              placeholder="Minutes"
              value={cookingTime.minutes}
              onChange={(e) =>
                setCookingTime({ ...cookingTime, minutes: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <p className="mb-2">Prep Time:</p>
          <div className="flex space-x-4">
            <Input
              placeholder="Hours"
              value={prepTime.hours}
              onChange={(e) =>
                setPrepTime({ ...prepTime, hours: e.target.value })
              }
            />
            <Input
              placeholder="Minutes"
              value={prepTime.minutes}
              onChange={(e) =>
                setPrepTime({ ...prepTime, minutes: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <Select
            label="Cuisine"
            placeholder="Select a cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <SelectItem key="italian" value="italian">
              Italian
            </SelectItem>
            <SelectItem key="mexican" value="mexican">
              Mexican
            </SelectItem>
            <SelectItem key="chinese" value="chinese">
              Chinese
            </SelectItem>
            <SelectItem key="indian" value="indian">
              Indian
            </SelectItem>
            <SelectItem key="others" value="Others">
              Others
            </SelectItem>
          </Select>
        </div>

        <div>
          <Select
            label="Difficulty"
            placeholder="Select a difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <SelectItem key="easy" value="easy">
              Easy
            </SelectItem>
            <SelectItem key="hard" value="hard">
              Hard
            </SelectItem>
            <SelectItem key="veryhard" value="veryhard">
              Very Hard
            </SelectItem>
          </Select>
        </div>

        <div>
          <Select
            label="Type"
            placeholder="Select a meal type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <SelectItem key="Lunch" value="Lunch">
              Lunch
            </SelectItem>
            <SelectItem key="dinner" value="dinner">
              Dinner
            </SelectItem>
            <SelectItem key="appetizer" value="appetizer">
              Appetizer
            </SelectItem>
            <SelectItem key="breakfast" value="breakfast">
              Breakfast
            </SelectItem>
            <SelectItem key="baverage" value="baverage">
              Beverage
            </SelectItem>
            <SelectItem key="others" value="others">
              Others
            </SelectItem>
          </Select>
        </div>
      </form>
    </div>
  );
}
