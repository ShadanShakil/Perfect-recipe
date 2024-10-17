import { Card, CardBody, Avatar } from "@nextui-org/react";
import { ChefHat, Book, Users } from "lucide-react";
import { useNavigate } from "react-router";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Julia Child",
      role: "Founder & Head Chef",
      avatar:
        "https://cdn.britannica.com/10/198710-050-D3365128/Julia-Child-1978.jpg",
    },
    {
      name: "Gordon Ramsay",
      role: "Content Manager",
      avatar:
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6ccabba-ea38-411f-a673-04f26b5e919c_980x980.jpeg",
    },
    {
      name: "Ina Garten",
      role: "Recipe Developer",
      avatar:
        "https://mms.businesswire.com/media/20221026005450/en/1614430/4/Ina_Garten_with_Signature_Pom_Gimlet.jpg?download=1",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        About Culinary Canvas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="p-4">
          <CardBody className="text-center">
            <ChefHat className="w-12 h-12 mx-auto mb-4 text-red-700" />
            <h2 className="text-xl font-semibold mb-2">Expert Chefs</h2>
            <p className="text-muted-foreground">
              Our team of experienced chefs curate and create delicious recipes
              for all skill levels.
            </p>
          </CardBody>
        </Card>
        <Card className="p-4">
          <CardBody className="text-center">
            <Book className="w-12 h-12 mx-auto mb-4 text-red-700" />
            <h2 className="text-xl font-semibold mb-2">Diverse Recipes</h2>
            <p className="text-muted-foreground">
              Explore a wide range of cuisines and dietary options to suit every
              palate and preference.
            </p>
          </CardBody>
        </Card>
        <Card className="p-4">
          <CardBody className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-red-700" />
            <h2 className="text-xl font-semibold mb-2">Community Driven</h2>
            <p className="text-muted-foreground">
              Join our vibrant community of food lovers to share, learn, and
              grow together.
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-4">
              <CardBody className="flex flex-col items-center">
                <Avatar src={member.avatar} className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
        <p className="text-center text-lg max-w-3xl mx-auto">
          At Culinary Canvas, we're passionate about bringing people together
          through the joy of cooking. Our mission is to inspire creativity in
          the kitchen, promote culinary education, and foster a global community
          of food enthusiasts. We believe that great meals have the power to
          create lasting memories and strengthen bonds between family and
          friends.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Join Our Culinary Journey
        </h2>
        <p className="text-lg mb-8">
          Whether you're a seasoned chef or a curious beginner, there's a place
          for you in our kitchen. Let's explore, create, and savor the world of
          flavors together!
        </p>
        <button
          onClick={() => navigate("/recipes")}
          className="bg-red-700 text-primary-foreground hover:bg-red-500/90 px-6 py-3 rounded-md font-semibold transition duration-300"
        >
          Start Cooking
        </button>
      </div>
    </div>
  );
}
