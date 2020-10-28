import React, { FC, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { cardIndexState } from "store/flashcards";
import styled from "styled-components";
import { CardData } from "./data";
import { Inputs } from "./inputs";

type FlashcardProps = {}

type CardSideT = "front" | "back";

export const Flashcard: FC<FlashcardProps> = ({ }) => {
  const [sideOfCard, setSideOfCard] = useState<CardSideT>("front");
  const [cardIndex, setCardIndex] = useState(0);
  const cardTotalLength = useRecoilValue(cardIndexState);

  useEffect(() => {
    setSideOfCard("front");
  }, [cardIndex]);


  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <CardWrapper>
        <LeftArrow
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          disable={cardIndex === 0}
          onClick={() => setCardIndex(index => index - 1)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </LeftArrow>
        <Card
          side={sideOfCard}
          onClick={() => setSideOfCard(sideOfCard === "front" ? "back" : "front")}
        >
          <React.Suspense fallback={<div>Loading . . .</div>}>
            <CardData index={cardIndex} side={sideOfCard} />
          </React.Suspense>
        </Card>
        <RightArrow
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          disable={cardIndex === cardTotalLength - 1}
          onClick={() => setCardIndex(index => index + 1)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </RightArrow>
      </CardWrapper>
      <Inputs />
    </div>
  );
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Card = styled.div<{ side: CardSideT }>`
  width: 50rem;
  height: 30rem;
  border: 1px solid lightgray;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;

  ${({ side }) => side === "back" && `
      background-image: linear-gradient(to bottom,
          #ffffff 15%,
          #F94545 16%,
          #ffffff 16%,
          #ffffff 25%,
          #85b2d3 26%,
          #ffffff 26%,
          #ffffff 35%,
          #85b2d3 36%,
          #ffffff 36%,
          #ffffff 45%,
          #85b2d3 46%,
          #ffffff 46%,
          #ffffff 55%,
          #85b2d3 56%,
          #ffffff 56%,
          #ffffff 65%,
          #85b2d3 66%,
          #ffffff 66%,
          #ffffff 75%,
          #85b2d3 76%,
          #ffffff 76%,
          #ffffff 85%,
          #85b2d3 86%,
          #ffffff 86%,
          #ffffff 95%,
          #85b2d3 96%,
          #ffffff 96%
      );
    `};
`;

const LeftArrow = styled.svg<{ disable: boolean }>`
  margin-right: 2rem;
  cursor: pointer;
  height: 4rem;
  transition: opacity 0.25s ease-in-out;

  ${({ disable }) => disable && `
    opacity: 0;
    pointer-events: none;
  `};

  &:hover {
    opacity: 0.6;
  }
`;

const RightArrow = styled.svg<{ disable: boolean }>`
  margin-left: 2rem;
  cursor: pointer;
  height: 4rem;
  transition: opacity 0.25s ease-in-out;

  ${({ disable }) => disable && `
    opacity: 0;
    pointer-events: none;
  `};

  &:hover {
    opacity: 0.6;
  }
`;