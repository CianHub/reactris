import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => {
  console.log(stage);
  return (
    <div>
      {stage?.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]}></Cell>)
      )}
      <Cell></Cell>
    </div>
  );
};

export default Stage;
