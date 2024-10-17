import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Myposts() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesCollectionRef = collection(db, "recipes");
      try {
        const querySnapshot = await getDocs(recipesCollectionRef);
        const recipesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="flex">
      {recipes.map((items, ind) => (
        <Card key={ind} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              Cuisine: {items.cuisine}
            </p>
            <small className="text-default-500">
              Difficulyt: {items.difficulty}
            </small>
            <h4 className="font-bold text-large">{items.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={items.mainImage}
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
