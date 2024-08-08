import Image from "next/image";
import Link from "next/link";
import RecipeImage from "../../public/recipe-image.jpg";

export default function Home() {
  return (
    <div className="hero-image h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-[#B80201] font-mono mb-5 font-semibold">
        Welcome to Recipe App
      </h1>
      <Link href={"/recipe-list"}>
        <button className="w-[200px] h-[40px] font-mono font-bold bg-red-500 border-solid text-white text-xl rounded-md">
          Expolre Recipe
        </button>
      </Link>
    </div>
  );
}
