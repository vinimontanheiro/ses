import {useCallback, useState} from 'react';
import {RIBBON_VALUE} from '../../constants';
import theme from '../theme';

const useCalculator = () => {
  const ribbonDefault = {
    label: `Fita 1 Tol - Violeta`,
    color: `rgb(142,62,148)`,
    backgroundColor: `rgba(142,62,148,0.2)`,
  };
  const [shackle, setShackle] = useState(``);
  const [weight, setWeight] = useState(`1`);
  const [ribbon, setRibbon] = useState(1);
  const [ribbonResult, setRibbonResult] = useState(ribbonDefault);
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
    } else if (w > 500 && w <= 750) {
      setShackle(`5/16''`);
    } else if (w > 750 && w <= 1000) {
      setShackle(`3/8''`);
    } else if (w > 1000 && w <= 2000) {
      setShackle(`1/2''`);
    } else if (w > 2000 && w <= 3250) {
      setShackle(`5/8''`);
    } else if (w > 3250 && w <= 4750) {
      setShackle(`3/4''`);
    } else if (w > 4750 && w <= 6500) {
      setShackle(`7/8''`);
    } else if (w > 6500 && w <= 8500) {
      setShackle(`1''`);
    } else if (w > 8500 && w <= 9500) {
      setShackle(`1.1/8''`);
    } else if (w > 9500 && w <= 12000) {
      setShackle(`1.1/4''`);
    } else if (w > 12000 && w <= 13500) {
      setShackle(`1.3/8''`);
    } else if (w > 13500 && w <= 17000) {
      setShackle(`1.1/2''`);
    } else if (w > 17000 && w <= 25000) {
      setShackle(`1.3/4''`);
    } else if (w > 25000 && w <= 35000) {
      setShackle(`2''`);
    } else if (w > 35000 && w <= 55000) {
      setShackle(`2'' 1/2''`);
    } else {
      setShackle(`Indisponível para peso informado!`);
    }
  }, [setShackle, weight]);

  const handleRibbonResult = useCallback(() => {
    const w = Number(weight);
    if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 0 && w <= 1000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 0 && w <= 800) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 0 && w <= 2000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 0 && w <= 1400) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 0 && w <= 1400) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 0 && w <= 1000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 0 && w <= 2100) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 0 && w <= 1500)
    ) {
      setRibbonResult({
        label: `Fita 1 Tol - Violeta`,
        color: `rgb(142,62,148)`,
        backgroundColor: `rgba(142,62,148,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 1000 && w <= 2000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 800 && w <= 1600) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 2000 && w <= 4000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 1400 && w <= 2800) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 1400 && w <= 2800) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 1000 && w <= 2000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 2100 && w <= 4200) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 1500 && w <= 3000)
    ) {
      setRibbonResult({
        label: `Fita 2 Tol - Verde`,
        color: `rgb(67,150,66)`,
        backgroundColor: `rgba(67,150,66,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 2000 && w <= 3000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 1600 && w <= 2400) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 4000 && w <= 6000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 2800 && w <= 4200) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 2800 && w <= 4200) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 2000 && w <= 3000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 4200 && w <= 6300) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 3000 && w <= 4500)
    ) {
      setRibbonResult({
        label: `Fita 3 Tol - Amarelo`,
        color: `rgb(248,206,70)`,
        backgroundColor: `rgba(255,252,85,0.3)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 3000 && w <= 4000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 2400 && w <= 3200) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 6000 && w <= 8000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 4200 && w <= 5600) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 4200 && w <= 5600) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 3000 && w <= 4000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 6300 && w <= 8400) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 4500 && w <= 6000)
    ) {
      setRibbonResult({
        label: `Fita 4 Tol - Cinza`,
        color: `rgb(136,136,136)`,
        backgroundColor: `rgba(204,204,204,0.3)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 4000 && w <= 5000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 3200 && w <= 4000) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 8000 && w <= 10000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 5600 && w <= 7000) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 5600 && w <= 7000) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 4000 && w <= 5000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 8400 && w <= 10500) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 6000 && w <= 7500)
    ) {
      setRibbonResult({
        label: `Fita 5 Tol - Vermelho`,
        color: `rgb(234,73,105)`,
        backgroundColor: `rgba(234,73,105,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 5000 && w <= 6000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 4000 && w <= 4800) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 10000 && w <= 12000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 7000 && w <= 8400) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 7000 && w <= 8400) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 5000 && w <= 6000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 10500 && w <= 12600) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 7500 && w <= 9000)
    ) {
      setRibbonResult({
        label: `Fita 6 Tol - Marrom`,
        color: `rgb(195,153,110)`,
        backgroundColor: `rgba(195,153,110,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 6000 && w <= 8000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 4800 && w <= 6400) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 12000 && w <= 16000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 8400 && w <= 11200) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 8400 && w <= 11200) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 6000 && w <= 8000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 12600 && w <= 16800) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 9000 && w <= 12000)
    ) {
      setRibbonResult({
        label: `Fita 8 Tol - Azul`,
        color: `rgb(61,105,243)`,
        backgroundColor: `rgba(61,105,243,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 8000 && w <= 10000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 6400 && w <= 8000) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 16000 && w <= 20000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 11200 && w <= 14000) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 11200 && w <= 14000) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 8000 && w <= 10000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 16800 && w <= 21000) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 12000 && w <= 15000)
    ) {
      setRibbonResult({
        label: `Fita 10 Tol - Laranja`,
        color: `rgb(239,154,56)`,
        backgroundColor: `rgba(239,154,56,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 10000 && w <= 15000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 8000 && w <= 12000) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 20000 && w <= 30000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 14000 && w <= 21000) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 14000 && w <= 21000) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 10000 && w <= 15000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 21000 && w <= 31500) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 15000 && w <= 22500)
    ) {
      setRibbonResult({
        label: `Fita 15 Tol - Laranja`,
        color: `rgb(239,154,56)`,
        backgroundColor: `rgba(239,154,56,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 15000 && w <= 20000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 12000 && w <= 16000) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 30000 && w <= 40000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 21000 && w <= 28000) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 21000 && w <= 28000) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 15000 && w <= 20000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 31500 && w <= 42000) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 22500 && w <= 30000)
    ) {
      setRibbonResult({
        label: `Fita 20 Tol - Laranja`,
        color: `rgb(239,154,56)`,
        backgroundColor: `rgba(239,154,56,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 20000 && w <= 25000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 16000 && w <= 20000) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 40000 && w <= 50000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 28000 && w <= 35000) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 28000 && w <= 35000) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 20000 && w <= 25000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 42000 && w <= 52500) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 30000 && w <= 37500)
    ) {
      setRibbonResult({
        label: `Fita 25 Tol - Laranja`,
        color: `rgb(239,154,56)`,
        backgroundColor: `rgba(239,154,56,0.2)`,
      });
    } else if (
      (ribbon === RIBBON_VALUE.RIBBON1 && w > 25000 && w <= 30000) ||
      (ribbon === RIBBON_VALUE.RIBBON2 && w > 20000 && w <= 24000) ||
      (ribbon === RIBBON_VALUE.RIBBON3 && w > 50000 && w <= 60000) ||
      (ribbon === RIBBON_VALUE.RIBBON4 && w > 35000 && w <= 42000) ||
      (ribbon === RIBBON_VALUE.RIBBON5 && w > 35000 && w <= 42000) ||
      (ribbon === RIBBON_VALUE.RIBBON6 && w > 25000 && w <= 30000) ||
      (ribbon === RIBBON_VALUE.RIBBON7 && w > 52500 && w <= 63000) ||
      (ribbon === RIBBON_VALUE.RIBBON8 && w > 37500 && w <= 45000)
    ) {
      setRibbonResult({
        label: `Fita 30 Tol - Laranja`,
        color: `rgb(239,154,56)`,
        backgroundColor: `rgba(239,154,56,0.2)`,
      });
    } else {
      setRibbonResult({
        label: `Indisponível para peso informado!`,
        color: theme.color.blue2,
        backgroundColor: theme.color.blue6,
      });
    }
  }, [weight, ribbon, setRibbonResult]);

  const onWeightChange = useCallback(
    (text) => {
      setWeight(text);
    },
    [setWeight],
  );

  const onRibbonChange = useCallback(
    (r) => {
      setRibbon(r);
      handleRibbonResult();
    },
    [setRibbon, handleRibbonResult],
  );

  const handleCalculate = useCallback(() => {
    onShackleChange();
    handleRibbonResult();
  }, [onShackleChange, handleRibbonResult]);

  return {
    onWeightChange,
    onShackleChange,
    shackle,
    shackleOpened,
    weight,
    handleCalculate,
    onRibbonChange,
    ribbon,
    ribbonResult,
  };
};

export default useCalculator;
