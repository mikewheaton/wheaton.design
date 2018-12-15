import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Root = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Note = styled.li`
  margin-bottom: 40px;
`;

const TitleLink = styled(Link)`
  font-size: 44px;
  line-height: 1.4;
`;

const Date = styled.div`
  font-size: 16px;
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.font.monospace};
  line-height: 2;
`;

export default ({ notes }) => {
  return (
    <Root>
      {notes.map(note => (
        <Note key={note.id}>
          <TitleLink to={note.path}>{note.title}</TitleLink>
          <Date>{note.date}</Date>
        </Note>
      ))}
    </Root>
  );
};
