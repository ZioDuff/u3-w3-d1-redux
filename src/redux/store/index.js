//* come prima cosa andiamo ad importare il nostro store dalla librwria

import { configureStore } from "@reduxjs/toolkit"
import mainReducers from "../reducers"

//*creiamo una funzione che si occupa di creare lo store e viene esportata grazie al pacchetto importato
//* ci chiede un reducer e restituira un oggetto di stato che avremo all'interno di questa variabile
const store = configureStore({
  reducer: mainReducers,
})

export default store
