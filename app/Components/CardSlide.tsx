import Image from "next/image";
import image1 from "@/public/bolognese.jpeg";

const cards = [
  { id: 1, title: "Listing-20", description: "A sample listing used to showcase how items appear in the directory" },
  { id: 2, title: "Listing-21", description: "A sample listing used to showcase how items appear in the directory" },
  { id: 3, title: "Listing-22", description: "A sample listing used to showcase how items appear in the directory" },
  { id: 4, title: "Listing-23", description: "A sample listing used to showcase how items appear in the directory" },
  { id: 5, title: "Listing-24", description: "A sample listing used to showcase how items appear in the directory" },
];

export default function CardSlide() {
  // We duplicate the cards array to ensure the slider is long enough to loop seamlessly
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="bg-gray-900 min-h-[400px] w-full mt-12 py-12 overflow-hidden">
      <h1 className="text-white text-3xl font-bold mb-12 text-center">
        Card Slide
      </h1>

      {/* Viewport: This hides the cards that are outside the screen */}
      <div className="relative w-full overflow-hidden">
        
        {/* Track: This is the long line of cards that actually moves */}
        <div className="flex w-max gap-6 animate-scroll">
          {duplicatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`} // Unique key for duplicated items
              className="w-64 flex-shrink-0 bg-gray-800 rounded-2xl border border-gray-700 p-4 text-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-32 bg-gray-700 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <Image 
                  src={image1} 
                  alt={card.title} 
                  width={200} 
                  height={150} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}