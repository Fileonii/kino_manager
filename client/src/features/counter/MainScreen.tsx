import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import { loadApi, selectSeats } from './Utils/reduxSlices/seatsSlice';
import axios from 'axios';
import { maxCords, maxProps, seatValue, fillGrid } from "./Utils/SeatsUtils"
import { setNumberOfSeats } from "./Utils/reduxSlices/seatsSlice";
import GridUtils from './Utils/GridUtils';
import { NextButton } from '../component/styledComponents/Button';
import StickyBarComponent from '../component/StickyBarComponent';
export function MainScreen() {

  const seatsSelector = useAppSelector(selectSeats);
  const dispatch = useAppDispatch();
  const [showMap, setShowMap] = useState<boolean>(false)
  const [chooseSeats, setChooseSeats] = useState<number>(0)
  const getSeats = () => {
    try {

      axios.get(`http://localhost:4000/seats`).then((response) => {
        const gridMaxProps: maxProps = maxCords(response.data);
        let grid: seatValue[] = fillGrid(gridMaxProps, response.data);

        if (chooseSeats && chooseSeats > 0) {
          dispatch(loadApi(grid));
          dispatch(setNumberOfSeats(chooseSeats));
          setShowMap(true);
        } else {
          window.alert("PROSZE PODAC LICZBE MIEJSC")
        }

      });
    } catch (err) {
      console.error(err);
    }
  }

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromImput: number = parseInt(e.target.value);
    setChooseSeats(valueFromImput);
  }

  return (
    <div>


      {showMap
        ? <div>
          <StickyBarComponent />
          <div className='mapOfButtons'>{
            seatsSelector.map((singleSeat) => (
              <GridUtils singleSeat={singleSeat}></GridUtils>

            ))}
          </div>

        </div>
        :
        <div className="d-flex justify-content-center">

          <div>

            <input type="number"
              className="d-flex justify-content-center form-control"
              onChange={handleChangeNumber}>
            </input>
            <div className="Kino-Label">
              Podaj liczbę miejsc na interesujący Cię seans.
            </div>
            <NextButton onClick={() => getSeats()}>Dalej</NextButton>
          </div>
        </div>}
    </div>

  );
}
