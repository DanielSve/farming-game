import React, { useState } from 'react';
import FarmPanel from './FarmPanel';
import { Player } from './model';
import PlayerPanel from './PlayerPanel';

const Main = () => {
  const [crops, setCrops] = useState(['oats', 'wheat', 'carrots', 'potatoes']);
  const [player, setPlayer] = useState<Player>({
    name: 'Player 1',
    year: 1949,
    balance: 10000,
    farmsize: "small"
  });
  
  return (
    <div className='Main'>
      <PlayerPanel player={player} setPlayer={setPlayer} />
      <FarmPanel player={player} setPlayer={setPlayer}/>
    </div>
  );
};

export default Main;
