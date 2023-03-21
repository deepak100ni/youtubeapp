import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
    reducer : {
        search : SearchSlice
    }
})
export default Store;