import create from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  fontLoaded: true,
  changeFontLoaded: () => set((state) => ({ fontLoaded: true })),
  borderInputText: false,
  changeBorderInputText: () =>
    set((state) => ({ borderInputText: !state.borderInputText })),
}));
