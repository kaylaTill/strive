import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import _ from 'underscore';

const Progress = ((props) => {
  const { objectives } = props;
  return (
    <div>
      {objectives.map((obj) => {
        const percentage = Math.floor(Math.random() * 100)
          return(
            <div style={{ width: '15rem', 
            position: 'relative', left: '5rem', height: '15rem',
            textAlign: 'center', float: 'left', marginRight: '6rem', 
            marginTop: '3rem',
            marginBottom: '3rem'
            }}>
              <CircularProgressbar value={percentage}  
                styles={
                  buildStyles({
                    pathColor:'black',
                    textColor: '#000000',
                    trailColor: '#cccccc',
                    backgroundColor: '#000000'})
                  }/>
                <div style={{ fontSize: '15px', fontFamily: 'OCR A Std, monospace' }}>{obj.name}</div>
                <br></br>
                <div style={{ fontSize: '15px', fontFamily: 'OCR A Std, monospace' }}>{`${percentage}% Completed`}</div>
            </div>
          )
      })}
    </div>
  )
});

export default Progress;    