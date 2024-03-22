export function createHooks(callback) {
  const _callback = callback;
  let _currentIndex = 0;
  let _states = [];

  const useState = (initState) => {
    const _key = _currentIndex;
    if (_states.length === _currentIndex) {
      _states[_currentIndex] = initState;
    }
    const state = _states[_key];
    const setState = (newVal) => {
      if (_states[_key] === newVal) return;
      _states[_key] = newVal;
      _callback();
    };
    _currentIndex += 1;
    return [state, setState];
  };

  const memorizedStates = [];
  const useMemo = (fn, refs) => {
    if (!memorizedStates[_currentIndex]) {
      const newVal = fn();
      memorizedStates[_currentIndex] = [newVal, refs];
      _currentIndex += 1;
      return newVal;
    }
    const nextRefs = refs;
    const [curVal, curRefs] = memorizedStates[_currentIndex];
    if (curRefs.every((ref, index) => ref === nextRefs[index])) {
      return curVal;
    }
    const newVal = fn();
    memorizedStates[_currentIndex] = [newVal, refs];
    _currentIndex += 1;
    return newVal;
  };

  const resetContext = () => {
    _currentIndex = 0;
  };

  return { useState, useMemo, resetContext };
}
