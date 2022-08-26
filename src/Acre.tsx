import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Crop, Result, Player } from './model';
interface Props {
  index: number;
  crops: Crop[];
  setCrops: React.Dispatch<React.SetStateAction<Crop[]>>;
  allCrops: Crop[];
  turnDone: boolean;
  results: Result[]
  player: Player
  setPlayer: React.Dispatch<React.SetStateAction<Player>>
}

const Acre = ({ index, crops, setCrops, allCrops, turnDone, results, setPlayer, player }: Props) => {
  const [value, setValue] = useState<number>(-1);
  const [color, setColor] = useState<string>("white")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(parseInt(e.target.value));
  };

  useEffect(() => {
      turnDone && setColor("white")
      turnDone && setValue(-1)
  },[turnDone])

  useEffect(() => {
    value!==-1 && setCrops(
        crops.map((crop) =>
          crop.id === index
            ? allCrops[value]
            : crop
        )
      );
      value!==-1 && setPlayer({...player, balance: player.balance - allCrops[value].cost})
      value!==-1 && setColor(allCrops[value].color)
  },[value])

  

  

  return (
    <div className='acre' style={{backgroundColor: color}}>
      {turnDone ? <div className='Choose'>
        <label></label>

        <select onChange={handleChange} value={value} >
            <option value={-1}>Choose Crop</option>
          {allCrops.map((crop, index2) => (
            <option key={index2} value={`${index2}`}>
              {crop.name} (Cost {crop.cost}) 
            </option>
          ))}
        </select>
      </div> : <div className='Results'>Yield ${results[index].yield}</div> }
    </div> 
  );
};

export default Acre;
