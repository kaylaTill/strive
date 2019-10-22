import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import _ from 'underscore';

const Progress = ((props) => {
  const { objectives } = props;

  return (
    <div>
      {objectives.map((obj) => {
          return(
            <div style={{ width: '15rem', 
            position: 'relative', left: '5rem', height: '15rem',
            textAlign: 'center', float: 'left', marginRight: '6rem', 
            marginTop: '3rem',
            marginBottom: '5rem'
            }}>
              <CircularProgressbar value={obj.progress}  
                styles={
                  buildStyles({
                    pathColor:'black',
                    textColor: '#000000',
                    trailColor: '#cccccc',
                    backgroundColor: '#000000'})
                  }/>
                <div style={{ fontSize: '15px', fontFamily: 'OCR A Std, monospace' }}>{obj.name}</div>
                <br></br>
                <div style={{ fontSize: '15px', fontFamily: 'OCR A Std, monospace' }}>{`${obj.progress}% Completed`}</div>
            </div>
          )
      })}
    </div>
  )
});

export default Progress;    