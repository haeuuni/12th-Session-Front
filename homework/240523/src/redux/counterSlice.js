import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //RTK의 핵심 기능인 createSlice!
  //action 타입 및 생성, 리듀서 정의를 한 번에 할 수 있게 해줍니다.
  //redux의 단점인 위 역할에 필요했던 방대한 보일러플레이트 코드를 줄여주는 역할을 합니다 ~.~
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
