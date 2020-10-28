import React, { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useRecoilCallback } from "recoil";
import { cardState, postCards } from "store/flashcards";
import styled from "styled-components";

type FlashcardInputProps = {};

export const Inputs: FC<FlashcardInputProps> = () => {
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);

  const submitHandler = async () => {
    const resp = await postCards({
      subject,
      description,
    });

    if (!resp.ok) {
      throw resp.statusText;
    }

    const updateCards = useSetRecoilState(cardState);

    updateCards(cards => [...cards as any, resp.json() ] as any)
  }

  const removeHandler = async () => {
    
  }

  return (
    <GridForm>
      <InputFieldControl>
        <StyledLabel htmlFor="subject">
          Subject
        </StyledLabel>
        <StyledInput
          type="text"
          name="subject"
          value={subject}
          onInput={(e) => setSubject(e.currentTarget.value)}
        />
      </InputFieldControl>
      <InputFieldControl>
        <StyledLabel htmlFor="description">
          Description
        </StyledLabel>
        <StyledInput
          type="text"
          name="description"
          value={description}
          onInput={(e) => setDescription(e.currentTarget.value)}
        />
      </InputFieldControl>
      <StyledButton onClick={() => submitHandler()}>
        Submit
      </StyledButton>
      <StyledButton onClick={() => removeHandler()}>
        Remove
      </StyledButton>
    </GridForm>
  );
};

const GridForm = styled.form`
  display: grid;
  grid-template-columns: minmax(25rem, 1fr) minmax(25rem, 1fr);
  grid-gap: 2rem;
`;

const InputFieldControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`;

const StyledInput = styled.input`
  line-height: 2;
  padding-left: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 1rem;
  cursor: pointer;
`;
