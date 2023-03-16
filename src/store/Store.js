import { configureStore } from "@reduxjs/toolkit";
import Search from "./Search";

const Store = configureStore({
    reducer : {
        search : Search
    }
})
export default Store;