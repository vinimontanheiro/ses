import {useCallback, useState} from 'react';

const useCalculator = () => {
  const [shackle, setShackle] = useState(``);
  const [weight, setWeight] = useState(`1`);
  const [ribbon, setRibbon] = useState(1);
  const [shackleOpened, setShackleOpened] = useState(false);

  const handleShackleOpened = useCallback(
    (o) => {
      setShackleOpened(o);
    },
    [setShackleOpened],
  );

  // const clearResult = useCallback(() => {
  //   setResult({value: 0, totalValue: 0});
  // }, [setResult]);

  const onShackleChange = useCallback(() => {
    const w = Number(weight);
    if (w > 0 && w <= 500) {
      setShackle(`1/4''`);
    }
    if (w > 500 && w <= 750) {
      setShackle(`5/16''`);
    }
    if (w > 750 && w <= 1000) {
      setShackle(`3/8''`);
    }
    if (w > 1000 && w <= 2000) {
      setShackle(`1/2''`);
    }
    if (w > 2000 && w <= 3250) {
      setShackle(`5/8''`);
    }
    if (w > 3250 && w <= 4750) {
      setShackle(`3/4''`);
    }
    if (w > 4750 && w <= 6500) {
      setShackle(`7/8''`);
    }
    if (w > 6500 && w <= 8500) {
      setShackle(`1''`);
    }
    if (w > 8500 && w <= 9500) {
      setShackle(`1.1/8''`);
    }
    if (w > 9500 && w <= 12000) {
      setShackle(`1.1/4''`);
    }
    if (w > 12000 && w <= 13500) {
      setShackle(`1.3/8''`);
    }
    if (w > 13500 && w <= 17000) {
      setShackle(`1.1/2''`);
    }
    if (w > 17000 && weight <= 25000) {
      setShackle(`1.3/4''`);
    }
    if (w > 25000 && w <= 35000) {
      setShackle(`2''`);
    }
    if (w > 35000 && w <= 55000) {
      setShackle(`2'' 1/2''`);
    }
  }, [setShackle, weight]);

  const handleCalculate = useCallback(() => {
    onShackleChange();
  }, [onShackleChange]);

  const onWeightChange = useCallback(
    (text) => {
      setWeight(text);
    },
    [setWeight],
  );

  const onRibbonsChange = useCallback(
    (r) => {
      setRibbon(r);
    },
    [setRibbon],
  );

  return {
    onWeightChange,
    onShackleChange,
    shackle,
    shackleOpened,
    weight,
    handleCalculate,
    onRibbonsChange,
    ribbon,
  };
};

export default useCalculator;
