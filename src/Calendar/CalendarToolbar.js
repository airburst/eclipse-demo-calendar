import moment from 'moment';
import React from 'react';
import { MdChevronLeft, MdChevronRight, MdToday } from 'react-icons/md';
import styled from 'styled-components';

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  background-color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-top: 8px;
`;

const Button = styled.button`
  display: block;
  width: 48px;
  border: 0;
  padding: 0;
  font-size: 2em;
  background-color: transparent;
  cursor: pointer;
  color: #3b3f3f;
  transition: all 0.1s;

  :hover {
    color: #282a2a;
  }
`;

const MonthLabel = styled.div`
  padding-left: 16px;
  font-size: 1.2em;
  color: #282a2a;
`;

const CalendarToolbar = (toolbar) => {
  const goToBack = () => toolbar.onNavigate('PREV');
  const goToNext = () => toolbar.onNavigate('NEXT');
  const goToCurrent = () => toolbar.onNavigate('TODAY');

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span>{date.format('MMMM')}<span> {date.format('YYYY')}</span></span>
    );
  };

  return (
    <ToolbarContainer>
      <ButtonGroup>
        <Button onClick={goToBack} title="Previous month"><MdChevronLeft/></Button>
        <Button onClick={goToCurrent} title="Today"><MdToday/></Button>
        <Button onClick={goToNext} title="Next month"><MdChevronRight/></Button>
      </ButtonGroup>
      <MonthLabel>{label()}</MonthLabel>
    </ToolbarContainer>
  );
};

export default CalendarToolbar;

