import { render, screen } from '@testing-library/react';
import CharacterMap from './CharacterMap';

describe('CharacterMap', () => {
  const mockCharacters = [
    { name: 'Willy Loman', description: 'A salesman' },
    { name: 'Linda Loman', description: 'Willy\'s wife' },
  ];

  it('renders the title and description', () => {
    render(<CharacterMap characters={mockCharacters} />);
    expect(screen.getByText('The Loman Family & Their World')).toBeInTheDocument();
    expect(screen.getByText('Click on a character to learn more about their role in the play.')).toBeInTheDocument();
  });

  it('renders character nodes', () => {
    render(<CharacterMap characters={mockCharacters} />);
    expect(screen.getByText('Willy Loman')).toBeInTheDocument();
    expect(screen.getByText('Linda Loman')).toBeInTheDocument();
  });
});
