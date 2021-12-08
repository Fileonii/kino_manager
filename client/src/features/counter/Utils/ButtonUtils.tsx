import React, { useEffect, useState } from 'react';
import { FreeSeatButton, DisabledButton } from '../../component/styledComponents/Button'
import { seatValue } from './SeatsUtils';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { changeIsChosen } from './reduxSlices/seatsSlice';
type buttonProps = {
    singleSeat: seatValue
}
export default function ButtonUtils({ singleSeat }: buttonProps) {
    const dispatch = useAppDispatch();
    function chooseSeat() {
        dispatch(changeIsChosen(singleSeat));
    }

    return (
        <div>
            {singleSeat.reserved
                ? <DisabledButton>{singleSeat.cords.x} {singleSeat.cords.y}</DisabledButton>
                : <FreeSeatButton onClick={() => chooseSeat()} backgroundColor={singleSeat.isChosen}>{singleSeat.cords.x} {singleSeat.cords.y}</FreeSeatButton>}
        </div>


    );

}
