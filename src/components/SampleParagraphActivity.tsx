import React, { useState, FC } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SampleParagraphActivityProps {
  onComplete: () => void;
}

const initialItems = [
  { id: 'item-2', content: 'After having heard the conversation between the Willy and Linda, the audience is introduced to the two sons; Biff and Happy.' },
  { id: 'item-4', content: 'This shows how Biff is disillusioned with his life and the expectations of the American Dream.' },
  { id: 'item-1', content: 'Through the use of dialogue Miller shows how the characters feel about their existence.' },
  { id: 'item-5', content: 'The author’s choice of words like “measly” effectively conveys a sense of despair and frustration, making the reader question the true cost of the American Dream.' },
  { id: 'item-3', content: 'While lying in their childhood beds talking about their lives, Biff exclaims that he has a “measly manner of existence.”' },
];

const correctOrder = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

const SortableItem: FC<{ id: string, content: string }> = ({ id, content }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
      {content}
    </div>
  );
}

const SampleParagraphActivity: FC<SampleParagraphActivityProps> = ({ onComplete }) => {
  const [items, setItems] = useState(initialItems);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const checkOrder = () => {
    const currentOrder = items.map(item => item.id);
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <h3 className="text-xl font-bold text-center">Sample Paragraph Activity</h3>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300">
        Drag and drop the sentences into the correct order to form a cohesive paragraph.
      </p>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {items.map(item => <SortableItem key={item.id} id={item.id} content={item.content} />)}
          </div>
        </SortableContext>
      </DndContext>
      <div className="text-center">
        <button onClick={checkOrder} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Check Order
        </button>
      </div>
      {isCorrect === true && (
        <div className="p-4 rounded-md bg-green-100 dark:bg-green-900 text-center">
          <p className="font-bold text-green-800 dark:text-green-200">Correct! That's the right order.</p>
          <button onClick={onComplete} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Continue
          </button>
        </div>
      )}
      {isCorrect === false && (
        <div className="p-4 rounded-md bg-red-100 dark:bg-red-900 text-center">
          <p className="font-bold text-red-800 dark:text-red-200">Not quite. Try reordering the sentences.</p>
        </div>
      )}
    </div>
  );
};

export default SampleParagraphActivity;
