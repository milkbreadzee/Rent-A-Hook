import React, {useState} from 'react'
import './MostPopular.css'

import MostPopCardNet from '../../components/MostPopCardNet'
import MostPopCardReels from '../../components/MostPopCardReels'
import MostPopCardPli from '../../components/MostPopCardPli'
import MostPopCardBait from '../../components/MostPopCardBait'
const MostPopular = () => {
    const [isShownNet, setIsShownNet] = useState(true);
    const [isShownReels, setIsShownReels] = useState(false);
    const [isShownBait, setIsShownBait] = useState(false);
    const [isShownPli, setIsShownPli] = useState(false);
    const handleClickNet = event => {
        setIsShownNet(true);
        setIsShownReels(false);
        setIsShownBait(false);
        setIsShownPli(false);
      };
      const handleClickReels = event => {
        setIsShownNet(false);
        setIsShownReels(true);
        setIsShownBait(false);
        setIsShownPli(false);
      };
      const handleClickBait = event => {
        setIsShownNet(false);
        setIsShownReels(false);
        setIsShownBait(true);
        setIsShownPli(false);
      };
      const handleClickPli = event => {
        setIsShownNet(false);
        setIsShownReels(false);
        setIsShownBait(false);
        setIsShownPli(true);
      };
  return (
    <div>
        <div className="mostpop">
            <h3>Most Popular</h3>
        </div>
        <div className="popfilter">
            <button onClick={handleClickNet}>Landing Net</button>
            <button onClick={handleClickReels}>Fishing Reels</button>
            <button onClick={handleClickBait}>Baitcasing</button>
            <button onClick={handleClickPli}>Pliers</button>
        </div>
        <div className="popcont">
        {isShownNet &&  <MostPopCardNet />}
        {isShownReels &&  <MostPopCardReels/>}
        {isShownBait &&  <MostPopCardBait />}
        {isShownPli &&  <MostPopCardPli />}

        </div>
    </div>
  )
}

export default MostPopular