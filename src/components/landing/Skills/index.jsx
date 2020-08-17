import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I am a fullstack developer with excellent communication skills, as well as a deep understanding of digital systems and supply chain processes.
          </p>

          <h1>Programming Skills</h1>
          <ul>
          <li>Object Oriented Programming</li>
          <li>JAVASCRIPT</li>
          <li>REACT REDUX</li>
          <li>NODEJS</li>
          <li>MONGODB</li>
          <li>EXPRESS</li>
          </ul>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
