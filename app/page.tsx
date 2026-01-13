import Image from "next/image";
import image1 from "../public/bolognese.jpeg";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start pt-24">
         <h4 className="text-white border-white rounded-2xl bg-gray-500 p-2 mt -3 mb-5">Directory Starter Template</h4>
          <h1 className="text-white flex items-center justify-center font-extrabold my-5 text-4xl text-center">Launch your directory website in hours,<br />not weeks</h1>
         <p className="text-center my-5 font-medium text-lg">Quick is a full-featured directory starter built with Next.js and tailwind CSS. Manage listings<br/>with markdown content, accept asubmissions, monetize with payments, and launch a fully<br />functional directory site in hours</p>
          <div className="relative mt-12 w-full max-w-xl">
             <input 
                type="text" 
                id = "search" 
                placeholder="Search..."  
                className="w-full border rounded-3xl p-4 pr-12"             />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 ">🔍</span>
          </div>
        

        {/* CardSlide */}

<div className="bg-gray-900 min-h-[400px] w-full mt-12 text-center py-12">
  <h1 className="text-white text-3xl font-bold mb-12">
    Card Slide
  </h1>

  <div className="flex justify-center">
    <div className="w-64 bg-gray-800 rounded-2xl border border-gray-700 p-4 text-white shadow-lg">

      {/* Image container */}
      <div className="w-full h-32  rounded-xl flex items-center justify-center mb-4">
        <Image
          src={image1}
          alt="Sample Listing"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold mb-2">
        Listing-20
      </h3>

      <p className="text-sm text-gray-400">
        A sample listing used to showcase how items appear in the directory
      </p>
    </div>
  </div>

    <div className="flex justify-center">
    <div className="w-64 bg-gray-800 rounded-2xl border border-gray-700 p-4 text-white shadow-lg">

      {/* Image container */}
      <div className="w-full h-32  rounded-xl flex items-center justify-center mb-4">
        <Image
          src={image1}
          alt="Sample Listing"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold mb-2">
        Listing-20
      </h3>

      <p className="text-sm text-gray-400">
        A sample listing used to showcase how items appear in the directory
      </p>
    </div>
  </div>

  <div className="flex justify-center">
    <div className="w-64 bg-gray-800 rounded-2xl border border-gray-700 p-4 text-white shadow-lg">

      {/* Image container */}
      <div className="w-full h-32  rounded-xl flex items-center justify-center mb-4">
        <Image
          src={image1}
          alt="Sample Listing"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold mb-2">
        Listing-20
      </h3>

      <p className="text-sm text-gray-400">
        A sample listing used to showcase how items appear in the directory
      </p>
    </div>
  </div>

  <div className="flex justify-center">
    <div className="w-64 bg-gray-800 rounded-2xl border border-gray-700 p-4 text-white shadow-lg">

      {/* Image container */}
      <div className="w-full h-32  rounded-xl flex items-center justify-center mb-4">
        <Image
          src={image1}
          alt="Sample Listing"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold mb-2">
        Listing-20
      </h3>

      <p className="text-sm text-gray-400">
        A sample listing used to showcase how items appear in the directory
      </p>
    </div>
  </div>

  <div className="flex justify-center">
    <div className="w-64 bg-gray-800 rounded-2xl border border-gray-700 p-4 text-white shadow-lg">

      {/* Image container */}
      <div className="w-full h-32  rounded-xl flex items-center justify-center mb-4">
        <Image
          src={image1}
          alt="Sample Listing"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold mb-2">
        Listing-20
      </h3>

      <p className="text-sm text-gray-400">
        A sample listing used to showcase how items appear in the directory
      </p>
    </div>
  </div>
</div>

      </div>
    </main>
  );
}
