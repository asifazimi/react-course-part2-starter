import { create } from "zustand";

interface CounterState {
  counter: number;
  maxCount?: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  counter: 0,
  maxCount: 10,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  reset: () => set({ maxCount: 20 }),
}));

export default useCounterStore;
