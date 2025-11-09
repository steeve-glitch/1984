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

interface ParagraphOrganizationActivityProps {
  onComplete: () => void;
}

const initialItems = [
  { id: 'item-2', content: 'Considering the context/theme' },
  { id: 'item-4', content: 'Analysis of the authorial choices (literary elements)' },
  { id: 'item-1', content: 'The magic sentence' },
  { id: 'item-5', content: 'Evaluation of the authorial choice and its effect on the reader (meaning)' },
  { id: 'item-3', content: 'Integration of a significant text reference using reporting verbs' },
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

const ParagraphOrganizationActivity: FC<ParagraphOrganizationActivityProps> = ({ onComplete }) => {
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
      <h3 className="text-xl font-bold text-center">Paragraph Organization Activity</h3>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300">
        Drag and drop the paragraph components into the correct order.
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
          <p className="font-bold text-red-800 dark:text-red-200">Not quite. Try reordering the components.</p>
        </div>
      )}
    </div>
  );
};

export default ParagraphOrganizationActivity;