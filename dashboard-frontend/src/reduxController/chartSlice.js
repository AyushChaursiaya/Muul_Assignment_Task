const { createSlice } = require("@reduxjs/toolkit");

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    pieChartData: null,
    barChartData: null,
    lineChartData: null,
  },
  reducers: {
    setPieChartData: (state, action) => {
      state.pieChartData = action.payload;
    },
    setBarChartData: (state, action) => {
      state.barChartData = action.payload;
    },
    setLineChartData: (state, action) => {
      state.lineChartData = action.payload;
    },
  },
});

export const { setPieChartData, setBarChartData, setLineChartData } =
  chartSlice.actions;
export default chartSlice.reducer;
