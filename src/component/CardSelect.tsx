import { use, useState } from 'react';
import Card from './Card';
import type { CardType } from '../CardType';
import Sidebar from './Sidebar';
import { toast } from 'react-toastify';

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
      toast.error(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);

    toast.success(`${tech.name} added successfully!`);
  };
  const handleRemove = (id: number) => {
    setSelectedStack(selectedStack.filter(item => item.id !== id));
  };

  //remove all need
  const handleRemoveAll = () => {
    setSelectedStack([]);
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

      <div className="lg:col-span-1">
        <Sidebar
          selectedStack={selectedStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default CardList;
