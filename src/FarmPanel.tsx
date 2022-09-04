import React from 'react';
import { useState, useEffect } from 'react';
import Acre from './Acre';
import './FarmPanel.css';
import { Crop, Result, Player } from './model';
interface Props {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

const FarmPanel = ({ player, setPlayer }: Props) => {
  const [turnDone, setTurnDone] = useState<boolean>(true);

  const [results, setResults] = useState<Result[]>([
    { nr: 0, yield: 0 },
    { nr: 0, yield: 0 },
    { nr: 0, yield: 0 },
  ]);

  const [crops, setCrops] = useState<Crop[]>([
    {
      name: '',
      cost: 0,
      color: '',
    },
    {
      name: '',
      cost: 0,
      color: '',
    },
    {
      name: '',
      cost: 0,
      color: '',
    },
  ]);

  const handleTurn = () => {
    const temp: number[] = [
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
    ];

    setResults(
      results.map((result, i) => ({
        ...result,
        nr: temp[i],
        yield: temp[i] * crops[i].cost,
      }))
    );

    setCrops([
      {
        name: '',
        cost: 0,
        color: '',
      },
      {
        name: '',
        cost: 0,
        color: '',
      },
      {
        name: '',
        cost: 0,
        color: '',
      },
    ]);
    setTurnDone(!turnDone);
  };

  useEffect(() => {
    setPlayer({
      ...player,
      year: player.year + 1,
      balance:
        player.balance + results.map((r) => r.yield).reduce((a, s) => a + s),
    });
  }, [results]);


  const [allCrops, setAllCrops] = useState<Crop[]>([
    {
      name: 'Carrots',
      cost: 400,
      color: 'rgb(216, 144, 10)',
    },
    {
      name: 'Wheat',
      cost: 500,
      color: 'yellow',
    },
    {
      name: 'Potatoes',
      cost: 300,
      color: 'beige',
    },
  ]);

  return (
    <div className='FarmPanel'>
      <div className='acre-container'>
        {crops.map((crop, index) => (
          <Acre
            key={index}
            index={index}
            crops={crops}
            setCrops={setCrops}
            allCrops={allCrops}
            turnDone={turnDone}
            results={results}
            player={player}
            setPlayer={setPlayer}
          />
        ))}
      </div>
      {turnDone ? (
        <button onClick={handleTurn}>Play turn</button>
      ) : (
        <button onClick={() => setTurnDone(!turnDone)}>
          Choose next years crops
        </button>
      )}
    </div>
  );
};

export default FarmPanel;
