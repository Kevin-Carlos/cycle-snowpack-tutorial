import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { cardArrayTotalLength, fetchCards } from 'store/flashcards';

type CardDataProps = {
  index: number;
  side: 'front' | 'back';
};

export const CardData: FC<CardDataProps> = ({ index, side }) => {
  const cards = useRecoilValue(fetchCards);

  const updateLength = useSetRecoilState(cardArrayTotalLength);
  updateLength(cards.length);

  return (
    <div>
      {side === 'front' ? cards[index].subject : cards[index].description}
    </div>
  );
};
