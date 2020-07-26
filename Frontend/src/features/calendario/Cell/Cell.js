import React from 'react';
import Styles from './Cell.module.scss'

const Cell = ({startSelection, endSelection, daysSelectionStarted}) => {

  const [style, setStyle] = React.useState('');

  function onMouseEnter() {
    if (daysSelectionStarted)
      setStyle(Styles.selectedCell);
  }

  const onClick = () => {
    if (!daysSelectionStarted){
      setStyle(Styles.selectedCell);
      startSelection();
    } else {
      endSelection();
    }          
  }

  return (
    <td className={style} onClick={onClick} onMouseEnter={onMouseEnter}></td>
  )
}

export default Cell;