import React, { FC } from "react";
import styled from "styled-components";
import { Flashcard } from "./flashcard";

export const App: FC = () => {
  return (
    <StyledSection>
      <ContentWrapper>
        <Flashcard />
      </ContentWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 120rem;
`;