import React from 'react';
import { Player } from './model';

interface Props {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

const PlayerPanel = ({ player, setPlayer }: Props) => {
  return (
    <div className='PlayerPanel'>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Farm size</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <td>{player.year}</td>
          <td>{player.farmsize}</td>
          <td>${player.balance}</td>
        </tbody>
      </table>
    </div>
  );
};

export default PlayerPanel;
