type SliceActions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never;
}[keyof T];
type ActionTypes = SliceActions<typeof cartStore.actions>;
type AppDispatch = typeof store.dispatch<ActionTypes>;
