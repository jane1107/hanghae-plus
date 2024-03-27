let observerFn = null;

export const 구독 = (fn) => {
  observerFn = fn;
  fn();
};

export const 발행기관 = (obj) => {
  const observers = new Map();

  const state = new Proxy(
    { ...obj },
    {
      set(target, key, value) {
        target[key] = value;
        notifyStateChange(key);
        return true;
      },
      get(target, key) {
        if (!observers.has(key)) {
          observers.set(key, new Set());
        }
        if (observerFn !== null || !observers.get(key).has(observerFn)) {
          observers.get(key).add(observerFn);
        }
        return target[key];
      },
    }
  );

  const notifyStateChange = (key) => {
    observers.get(key).forEach((fn) => fn());
  };

  return state;
};
