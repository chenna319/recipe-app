import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Recipe = ({ recipes }) => {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Recipes</h2>
        <Link
          className="p-4 w-fit flex items-center gap-2 mb-3"
          href={"/"}
        >
          <BiArrowBack /> Back
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes && recipes.length > 0
            ? recipes.map((recipe) => (
                <Link key={recipe.id} href={`recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-12 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-ful w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="flex items-center flex-wrap gap-2 ">
                          <p className="text-lg text-gray-600">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
