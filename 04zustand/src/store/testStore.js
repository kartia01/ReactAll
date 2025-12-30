import { create } from 'zustand';

// const testStore = create((set,get)=>({}))
const testStore = create(() => ({
  name: '홍길동',
}));

export default testStore;

