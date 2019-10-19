import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const Container = styled.div`
  width: 10px,
  height: 10px,
  position: relative,
  left: 10rem,
  align: center,
  textAlign: center,
  fontSize: 20px,
  fontFamily: OCR A Std, monospace
`;




const Progress = ((props) => {
  const percentage = 25;
  return (
    <div style={{width: '10rem',height: '10rem'}}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} 
      styles={
        buildStyles({
          pathColor:'black',
          textColor: '#000000',
          trailColor: '#cccccc',
          backgroundColor: ' #000000'})}/>
    </div>
  )
});

export default Progress;    