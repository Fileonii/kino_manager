import React, { useEffect, useState } from 'react';
import { Button, NotExistingButton } from '../../component/styledComponents/Button'
import { seatValue } from './SeatsUtils';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import ButtonUtils from './ButtonUtils'
import { changeIsChosen } from './reduxSlices/seatsSlice';
type buttonProps = {
    singleSeat: seatValue
}
export default function GridUtils({ singleSeat }: buttonProps) {
    const dispatch = useAppDispatch();
    function isButtonExist(): boolean {
        let isButtonExist: boolean = false;
        if ("NaN" != singleSeat.id) {
            isButtonExist = true
        }
        return isButtonExist;
    }


    return (
        <div>
            {isButtonExist() ? <ButtonUtils singleSeat={singleSeat} /> : <NotExistingButton></NotExistingButton>}
        </div>


    );

}
