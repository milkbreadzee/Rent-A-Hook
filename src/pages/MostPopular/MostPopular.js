import React, {useState} from 'react'
import './MostPopular.css'
import MostPopCard  from '../../components/MostPopCard/mostpopcard'
import MostPopCardNet from '../../components/MostPopCardNet'
import MostPopCardReels from '../../components/MostPopCardReels'
import MostPopCardPli from '../../components/MostPopCardPli'
import MostPopCardBait from '../../components/MostPopCardBait'
const MostPopular = () => {
    const [isShownNet, setIsShownNet] = useState(false);
    const [isShownReels, setIsShownReels] = useState(false);
    const [isShownBait, setIsShownBait] = useState(false);
    const [isShownPli, setIsShownPli] = useState(false);
    const handleClickNet = event => {
        setIsShownNet(current => !current);
      };
      const handleClickReels = event => {
        setIsShownReels(current => !current);
      };
      const handleClickBait = event => {
        setIsShownBait(current => !current);
      };
      const handleClickPli = event => {
        setIsShownPli(current => !current);
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