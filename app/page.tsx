import CardSlide from "@/app/Components/CardSlide";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start pt-24">
        <h4 className="text-white bg-gray-500 rounded-2xl p-2 mt-3 mb-5">
          Directory Starter Template
        </h4>

        <h1 className="text-white font-extrabold my-5 text-4xl text-center">
          Launch your directory website in hours,<br />not weeks
        </h1>

        <p className="text-center my-5 font-medium text-lg">
          Quick is a full-featured directory starter built with Next.js and Tailwind CSS.
        </p>

        <div className="relative mt-12 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-3xl p-4 pr-12"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        {/* Card Slide */}
        <CardSlide />
      </div>
    </main>
  );
}
