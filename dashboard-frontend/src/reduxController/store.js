import chartSlice from "./chartSlice";
import drawerSlice from "./drawerSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    chart: chartSlice,
  },
});

export default store;
