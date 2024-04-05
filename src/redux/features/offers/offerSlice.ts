import { createSlice } from "@reduxjs/toolkit";
import offers from '../../../db/offer.json'
export interface OfferType {
    id: string
    name: string
    text: string
    date: {
        [key: string]: string
    }
    url: string
    status: string
}

type OfferTypes = {
    offersList: OfferType[]
}

const offerType: OfferTypes  = {
    offersList: offers
}

const offerSlice = createSlice({
    name: 'offers',
    initialState: offerType,
    reducers: {

    }
})

export default offerSlice.reducer