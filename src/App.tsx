
import './App.css'
import HeroSection from './component/HeroSection';
import Nav from './component/Nav'
import type { CardType } from './CardType';

import { Suspense } from 'react';
import CardList from './component/CardSelect';


// Data Fetching Function
const fetchTechnologies = async (): Promise<CardType[]> => {
  const res = await fetch('/Data.json');
  return res.json();
};

const technologiesPromise = fetchTechnologies();


function App() {
 

  return (
    <> 
      <Nav />
      <HeroSection />
      
      <div className="min-h-screen bg-gray-50 p-6 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-extrabold  mb-4 text-slate-900">
            Explore the
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className=" font-bold bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text text-transparent">
            SSR / Edge
          </p>

          <p className="mb-2.5">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-center p-10 font-medium">
              Loading technologies...
            </div>
          }
        >
          <CardList technologiesPromise={technologiesPromise} />
        </Suspense>

     </div>

    </>
  );
}

export default App;
