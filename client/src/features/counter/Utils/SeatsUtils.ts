import { setConstantValue } from 'typescript';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { } from './reduxSlices/seatsSlice';
import { loadApi, selectSeats } from './reduxSlices/seatsSlice';
export type cordsType = {
    x: number,
    y: number
}
export interface seatValue {
    id: string,
    cords: cordsType,
    reserved: boolean,
    isChosen: boolean
}


export interface seatInfo {
    info: seatValue[],
    chosen: seatValue[],
    numberOfSeats: number
}

export type maxProps = {
    maxX: number,
    maxY: number
}

export const maxCords = (seatsSelector: seatValue[]) => {
    let maxX: number = 0;
    let maxY: number = 0;
    seatsSelector.forEach(element => {
        if (element.cords.x > maxX) {
            maxX = element.cords.x;
        }
        if (element.cords.y > maxY) {
            maxY = element.cords.y;
        }
    });

    return { maxX, maxY }
}

// export const allHall : number = (maxX:number, maxY:number) => {
//      const allHallValue = maxX * maxY;
//      return allHallValue;
// }

export function allHall(maxProps: maxProps): number {
    const allHallValue = maxProps.maxX * maxProps.maxY;
    return allHallValue;
}

export function isButtonExist(cordX: number, cordY: number, seatsSelector: seatValue[]): boolean {
    let isButton: boolean = false;
    seatsSelector.forEach(element => {
        if (element.cords.x == cordX && element.cords.y == cordY) {
            isButton = true;
        }
    });
    return isButton;
}
export function fillGrid(gridMaxProps: maxProps, seatsFromData: seatValue[]): seatValue[] {
    let grid: seatValue[] = [];
    for (let x = 0; x <= gridMaxProps.maxX; x++) {
        for (let y = 0; y <= gridMaxProps.maxY; y++) {
            if (isButtonExist(x, y, seatsFromData)) {
                grid.push(getSeat(x, y, seatsFromData));
            } else {
                grid.push({
                    id: 'NaN',
                    cords: {
                        x: x,
                        y: y
                    },
                    reserved: false,
                    isChosen: false
                })
            }
        }
    }
    return grid;
}
export function getSeat(cordX: number, cordY: number, seatsSelector: seatValue[] = []): seatValue {
    let seatValue: seatValue = { id: 'Nan', cords: { x: 0, y: 0 }, reserved: false, isChosen: false };
    seatsSelector.forEach(element => {
        if (element.cords.x == cordX && element.cords.y == cordY) {
            seatValue = element;
            seatValue.isChosen = false;
        }
    });

    return seatValue;


}