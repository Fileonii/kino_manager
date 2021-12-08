import React, { useEffect, useState } from 'react';
import { StickyBar, StickyButton, StickyElement } from './styledComponents/StickyBar';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectChosen } from '../counter/Utils/reduxSlices/seatsSlice'
import { StickyNav, StickyPlace } from './styledComponents/StickyBar'
export default function StickyBarComponent() {
    const chosenSeats = useAppSelector(selectChosen);
    return (<StickyBar>
        <StickyNav>
            <div>
                WYBRANE MIEJSCA
            </div>
        </StickyNav>
        {

            chosenSeats.map((seat) => (
                <StickyElement>
                    <div className="d-flex">
                        <div className="sticky-element-first">
                            MIEJSCE: {seat.id}
                        </div>
                        <div className="sticky-element-secound">
                            <div className="d-flex flex-column">
                                <div>
                                    RZĄD: {seat.cords.x}
                                </div>
                                <div>
                                    KOLUMNA: {seat.cords.y}
                                </div>
                            </div>
                        </div>

                    </div>



                </StickyElement>
            ))
        }
        <StickyPlace> <StickyButton>Podsumowanie</StickyButton></StickyPlace>
    </StickyBar>);

}
