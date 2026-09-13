import { use, useState } from 'react';
import Card from './Card';
import type { CardType } from '../CardType';



interface CardListProps {
  technologiesPromise: Promise<CardType[]>;
}

const CardList = ({ technologiesPromise }: CardListProps) => {
  const technologies = use(technologiesPromise);

  const [selectedStack, setSelectedStack] = useState<CardType[]>([]);

  //stack add

  const handleAdd = (tech: CardType) => {
    const isAlreadyAdded = selectedStack.some(item => item.id === tech.id);

    if (isAlreadyAdded) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
  };
 

  return (
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 container ">
      {/* 3-Column Technology Grid */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologies.map(tech => {
          const isAdded = selectedStack.some(item => item.id === tech.id);

          return (
            <Card
              key={tech.id}
              tech={tech}
              isAdded={isAdded}
              onToggle={() => handleAdd(tech)}
            />
          );
        })}
      </div>

    </div>
  );
};

export default CardList;
