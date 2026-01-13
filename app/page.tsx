import Image from "next/image";

export default function Home() {
  return (
    <main>
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
        
      </div>
    </main>
  );
}
