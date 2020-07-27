import {useCallback, useState} from 'react';
import {RIBBON_VALUE, STEEL_VALUE} from '../../constants';
import theme from '../theme';
import {parseValue} from '../../services/utils';

const SHACKLE_MESSAGE = `Deverá ser utilizada a manilha de`;
const STEEL_MESSAGE = `Deverá ser utilizado o cabo de aço de`;

const useCalculator = () => {
  const undefinedResult = `Indisponível para peso informado!`;
  const ribbonDefault = {
    label: undefinedResult,
    color: theme.color.blue2,
    backgroundColor: theme.color.blue6,
  };
  const [shackle, setShackle] = useState(undefinedResult);
  const [weight, setWeight] = useState(``);
  const [ribbon, setRibbon] = useState(1);
  const [ribbonResult, setRibbonResult] = useState(undefinedResult);
  const [steel, setSteel] = useState(1);
  const [steelResult, setSteelResult] = useState(undefinedResult);

  const clearResult = useCallback(() => {
    setWeight(``);
    setShackle(undefinedResult);
    setRibbon(1);
    setSteel(1);
    setRibbonResult(ribbonDefault);
    setSteelResult(undefinedResult);
  }, [setWeight, setRibbon, setSteel, setRibbonResult, ribbonDefault, undefinedResult]);

  const handleShackleResult = useCallback(() => {
    const w = Number(parseValue(weight));
    if (w > 0 && w <= 500) {
      setShackle(`${SHACKLE_MESSAGE} 1/4''`);
    } else if (w > 500 && w <= 750) {
      setShackle(`${SHACKLE_MESSAGE} 5/16''`);
    } else if (w > 750 && w <= 1000) {
      setShackle(`${SHACKLE_MESSAGE} 3/8''`);
    } else if (w > 1000 && w <= 2000) {
      setShackle(`${SHACKLE_MESSAGE} 1/2''`);
    } else if (w > 2000 && w <= 3250) {
      setShackle(`${SHACKLE_MESSAGE} 5/8''`);
    } else if (w > 3250 && w <= 4750) {
      setShackle(`${SHACKLE_MESSAGE} 3/4''`);
    } else if (w > 4750 && w <= 6500) {
      setShackle(`${SHACKLE_MESSAGE} 7/8''`);
    } else if (w > 6500 && w <= 8500) {
      setShackle(`1''`);
    } else if (w > 8500 && w <= 9500) {
      setShackle(`${SHACKLE_MESSAGE} 1.1/8''`);
    } else if (w > 9500 && w <= 12000) {
      setShackle(`${SHACKLE_MESSAGE} 1.1/4''`);
    } else if (w > 12000 && w <= 13500) {
      setShackle(`${SHACKLE_MESSAGE} 1.3/8''`);
    } else if (w > 13500 && w <= 17000) {
      setShackle(`${SHACKLE_MESSAGE} 1.1/2''`);
    } else if (w > 17000 && w <= 25000) {
      setShackle(`${SHACKLE_MESSAGE} 1.3/4''`);
    } else if (w > 25000 && w <= 35000) {
      setShackle(`${SHACKLE_MESSAGE} 2''`);
    } else if (w > 35000 && w <= 55000) {
      setShackle(`${SHACKLE_MESSAGE} 2'' 1/2''`);
    } else {
      setShackle(undefinedResult);
    }
  }, [setShackle, weight, undefinedResult]);

  console.log(ribbonResult);

  const handleRibbonResult = useCallback(
    (ribbonValue) => {
      const r = Number(ribbonValue);
      const w = Number(parseValue(weight));
      console.log(`ribbon >>`, r);
      console.log(`weight`, w);
      if (
        (r === RIBBON_VALUE.RIBBON1 && w > 0 && w <= 1000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 0 && w <= 800) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 0 && w <= 2000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 0 && w <= 1400) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 0 && w <= 1400) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 0 && w <= 1000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 0 && w <= 2100) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 0 && w <= 1500)
      ) {
        setRibbonResult({
          label: `Fita 1 Tol - Violeta`,
          color: `rgb(142,62,148)`,
          backgroundColor: `rgba(142,62,148,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 1000 && w <= 2000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 800 && w <= 1600) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 2000 && w <= 4000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 1400 && w <= 2800) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 1400 && w <= 2800) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 1000 && w <= 2000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 2100 && w <= 4200) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 1500 && w <= 3000)
      ) {
        setRibbonResult({
          label: `Fita 2 Tol - Verde`,
          color: `rgb(67,150,66)`,
          backgroundColor: `rgba(67,150,66,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 2000 && w <= 3000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 1600 && w <= 2400) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 4000 && w <= 6000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 2800 && w <= 4200) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 2800 && w <= 4200) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 2000 && w <= 3000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 4200 && w <= 6300) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 3000 && w <= 4500)
      ) {
        setRibbonResult({
          label: `Fita 3 Tol - Amarelo`,
          color: `rgb(248,206,70)`,
          backgroundColor: `rgba(255,252,85,0.3)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 3000 && w <= 4000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 2400 && w <= 3200) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 6000 && w <= 8000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 4200 && w <= 5600) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 4200 && w <= 5600) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 3000 && w <= 4000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 6300 && w <= 8400) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 4500 && w <= 6000)
      ) {
        setRibbonResult({
          label: `Fita 4 Tol - Cinza`,
          color: `rgb(136,136,136)`,
          backgroundColor: `rgba(204,204,204,0.3)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 4000 && w <= 5000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 3200 && w <= 4000) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 8000 && w <= 10000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 5600 && w <= 7000) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 5600 && w <= 7000) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 4000 && w <= 5000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 8400 && w <= 10500) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 6000 && w <= 7500)
      ) {
        setRibbonResult({
          label: `Fita 5 Tol - Vermelho`,
          color: `rgb(234,73,105)`,
          backgroundColor: `rgba(234,73,105,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 5000 && w <= 6000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 4000 && w <= 4800) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 10000 && w <= 12000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 7000 && w <= 8400) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 7000 && w <= 8400) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 5000 && w <= 6000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 10500 && w <= 12600) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 7500 && w <= 9000)
      ) {
        setRibbonResult({
          label: `Fita 6 Tol - Marrom`,
          color: `rgb(195,153,110)`,
          backgroundColor: `rgba(195,153,110,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 6000 && w <= 8000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 4800 && w <= 6400) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 12000 && w <= 16000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 8400 && w <= 11200) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 8400 && w <= 11200) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 6000 && w <= 8000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 12600 && w <= 16800) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 9000 && w <= 12000)
      ) {
        setRibbonResult({
          label: `Fita 8 Tol - Azul`,
          color: `rgb(61,105,243)`,
          backgroundColor: `rgba(61,105,243,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 8000 && w <= 10000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 6400 && w <= 8000) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 16000 && w <= 20000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 11200 && w <= 14000) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 11200 && w <= 14000) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 8000 && w <= 10000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 16800 && w <= 21000) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 12000 && w <= 15000)
      ) {
        setRibbonResult({
          label: `Fita 10 Tol - Laranja`,
          color: `rgb(239,154,56)`,
          backgroundColor: `rgba(239,154,56,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 10000 && w <= 15000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 8000 && w <= 12000) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 20000 && w <= 30000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 14000 && w <= 21000) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 14000 && w <= 21000) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 10000 && w <= 15000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 21000 && w <= 31500) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 15000 && w <= 22500)
      ) {
        setRibbonResult({
          label: `Fita 15 Tol - Laranja`,
          color: `rgb(239,154,56)`,
          backgroundColor: `rgba(239,154,56,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 15000 && w <= 20000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 12000 && w <= 16000) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 30000 && w <= 40000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 21000 && w <= 28000) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 21000 && w <= 28000) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 15000 && w <= 20000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 31500 && w <= 42000) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 22500 && w <= 30000)
      ) {
        setRibbonResult({
          label: `Fita 20 Tol - Laranja`,
          color: `rgb(239,154,56)`,
          backgroundColor: `rgba(239,154,56,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 20000 && w <= 25000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 16000 && w <= 20000) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 40000 && w <= 50000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 28000 && w <= 35000) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 28000 && w <= 35000) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 20000 && w <= 25000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 42000 && w <= 52500) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 30000 && w <= 37500)
      ) {
        setRibbonResult({
          label: `Fita 25 Tol - Laranja`,
          color: `rgb(239,154,56)`,
          backgroundColor: `rgba(239,154,56,0.2)`,
        });
      } else if (
        (r === RIBBON_VALUE.RIBBON1 && w > 25000 && w <= 30000) ||
        (r === RIBBON_VALUE.RIBBON2 && w > 20000 && w <= 24000) ||
        (r === RIBBON_VALUE.RIBBON3 && w > 50000 && w <= 60000) ||
        (r === RIBBON_VALUE.RIBBON4 && w > 35000 && w <= 42000) ||
        (r === RIBBON_VALUE.RIBBON5 && w > 35000 && w <= 42000) ||
        (r === RIBBON_VALUE.RIBBON6 && w > 25000 && w <= 30000) ||
        (r === RIBBON_VALUE.RIBBON7 && w > 52500 && w <= 63000) ||
        (r === RIBBON_VALUE.RIBBON8 && w > 37500 && w <= 45000)
      ) {
        setRibbonResult({
          label: `Fita 30 Tol - Laranja`,
          color: `rgb(239,154,56)`,
          backgroundColor: `rgba(239,154,56,0.2)`,
        });
      } else {
        setRibbonResult(ribbonDefault);
      }
    },
    [weight, setRibbonResult, ribbonDefault],
  );

  const onWeightChange = useCallback(
    (text) => {
      setWeight(text);
    },
    [setWeight],
  );

  const handleSteelResult = useCallback(
    (steelValue) => {
      const st = Number(steelValue);
      const w = Number(parseValue(weight));
      if (
        (st === STEEL_VALUE.STEEL1 && w > 0 && w <= 1800) ||
        (st === STEEL_VALUE.STEEL2 && w > 0 && w <= 1300) ||
        (st === STEEL_VALUE.STEEL3 && w > 0 && w <= 3600) ||
        (st === STEEL_VALUE.STEEL4 && w > 0 && w <= 3100) ||
        (st === STEEL_VALUE.STEEL5 && w > 0 && w <= 2600) ||
        (st === STEEL_VALUE.STEEL6 && w > 0 && w <= 1800)
      ) {
        setSteelResult(`${STEEL_MESSAGE}  3/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 1800 && w <= 3100) ||
        (st === STEEL_VALUE.STEEL2 && w > 1300 && w <= 2300) ||
        (st === STEEL_VALUE.STEEL3 && w > 3600 && w <= 6300) ||
        (st === STEEL_VALUE.STEEL4 && w > 3100 && w <= 5500) ||
        (st === STEEL_VALUE.STEEL5 && w > 2600 && w <= 4500) ||
        (st === STEEL_VALUE.STEEL6 && w > 1800 && w <= 3100)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1/2'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 3100 && w <= 4900) ||
        (st === STEEL_VALUE.STEEL2 && w > 2300 && w <= 3600) ||
        (st === STEEL_VALUE.STEEL3 && w > 6300 && w <= 9800) ||
        (st === STEEL_VALUE.STEEL4 && w > 5500 && w <= 8500) ||
        (st === STEEL_VALUE.STEEL5 && w > 4500 && w <= 6800) ||
        (st === STEEL_VALUE.STEEL6 && w > 3100 && w <= 4900)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 5/8''`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 4900 && w <= 6900) ||
        (st === STEEL_VALUE.STEEL2 && w > 3600 && w <= 5100) ||
        (st === STEEL_VALUE.STEEL3 && w > 6800 && w <= 13700) ||
        (st === STEEL_VALUE.STEEL4 && w > 8500 && w <= 11700) ||
        (st === STEEL_VALUE.STEEL5 && w > 6800 && w <= 9900) ||
        (st === STEEL_VALUE.STEEL6 && w > 4900 && w <= 6800)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 3/4'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 6900 && w <= 9000) ||
        (st === STEEL_VALUE.STEEL2 && w > 5100 && w <= 6800) ||
        (st === STEEL_VALUE.STEEL3 && w > 13700 && w <= 18100) ||
        (st === STEEL_VALUE.STEEL4 && w > 11700 && w <= 15400) ||
        (st === STEEL_VALUE.STEEL5 && w > 9900 && w <= 12700) ||
        (st === STEEL_VALUE.STEEL6 && w > 6800 && w <= 9000)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 7/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 9000 && w <= 11700) ||
        (st === STEEL_VALUE.STEEL2 && w > 6800 && w <= 8800) ||
        (st === STEEL_VALUE.STEEL3 && w > 18100 && w <= 23500) ||
        (st === STEEL_VALUE.STEEL4 && w > 15400 && w <= 19900) ||
        (st === STEEL_VALUE.STEEL5 && w > 12700 && w <= 16300) ||
        (st === STEEL_VALUE.STEEL6 && w > 9000 && w <= 11700)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 11700 && w <= 14500) ||
        (st === STEEL_VALUE.STEEL2 && w > 8800 && w <= 10800) ||
        (st === STEEL_VALUE.STEEL3 && w > 23500 && w <= 29000) ||
        (st === STEEL_VALUE.STEEL4 && w > 19900 && w <= 25400) ||
        (st === STEEL_VALUE.STEEL5 && w > 16300 && w <= 20800) ||
        (st === STEEL_VALUE.STEEL6 && w > 11700 && w <= 14500)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.1/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 14500 && w <= 17100) ||
        (st === STEEL_VALUE.STEEL2 && w > 10800 && w <= 13300) ||
        (st === STEEL_VALUE.STEEL3 && w > 29000 && w <= 34300) ||
        (st === STEEL_VALUE.STEEL4 && w > 25400 && w <= 30400) ||
        (st === STEEL_VALUE.STEEL5 && w > 20800 && w <= 24700) ||
        (st === STEEL_VALUE.STEEL6 && w > 14500 && w <= 17100)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.1/4'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 17100 && w <= 20900) ||
        (st === STEEL_VALUE.STEEL2 && w > 13300 && w <= 15200) ||
        (st === STEEL_VALUE.STEEL3 && w > 34300 && w <= 41800) ||
        (st === STEEL_VALUE.STEEL4 && w > 30400 && w <= 36100) ||
        (st === STEEL_VALUE.STEEL5 && w > 24700 && w <= 29500) ||
        (st === STEEL_VALUE.STEEL6 && w > 17100 && w <= 20900)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.3/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 20900 && w <= 24700) ||
        (st === STEEL_VALUE.STEEL2 && w > 15200 && w <= 18000) ||
        (st === STEEL_VALUE.STEEL3 && w > 41800 && w <= 49400) ||
        (st === STEEL_VALUE.STEEL4 && w > 36100 && w <= 42700) ||
        (st === STEEL_VALUE.STEEL5 && w > 29500 && w <= 32200) ||
        (st === STEEL_VALUE.STEEL6 && w > 20900 && w <= 24700)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.1/2'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 24700 && w <= 28300) ||
        (st === STEEL_VALUE.STEEL2 && w > 18000 && w <= 20700) ||
        (st === STEEL_VALUE.STEEL3 && w > 49400 && w <= 56500) ||
        (st === STEEL_VALUE.STEEL4 && w > 42700 && w <= 49000) ||
        (st === STEEL_VALUE.STEEL5 && w > 32200 && w <= 39600) ||
        (st === STEEL_VALUE.STEEL6 && w > 24700 && w <= 28200)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.5/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 28300 && w <= 31900) ||
        (st === STEEL_VALUE.STEEL2 && w > 20700 && w <= 24400) ||
        (st === STEEL_VALUE.STEEL3 && w > 56500 && w <= 63900) ||
        (st === STEEL_VALUE.STEEL4 && w > 49000 && w <= 56400) ||
        (st === STEEL_VALUE.STEEL5 && w > 39600 && w <= 46000) ||
        (st === STEEL_VALUE.STEEL6 && w > 28200 && w <= 31900)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.3/4'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 31900 && w <= 36800) ||
        (st === STEEL_VALUE.STEEL2 && w > 24400 && w <= 27300) ||
        (st === STEEL_VALUE.STEEL3 && w > 63900 && w <= 73600) ||
        (st === STEEL_VALUE.STEEL4 && w > 56400 && w <= 64100) ||
        (st === STEEL_VALUE.STEEL5 && w > 46000 && w <= 51900) ||
        (st === STEEL_VALUE.STEEL6 && w > 31900 && w <= 36800)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 1.7/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 36800 && w <= 41300) ||
        (st === STEEL_VALUE.STEEL2 && w > 27300 && w <= 31000) ||
        (st === STEEL_VALUE.STEEL3 && w > 73600 && w <= 82600) ||
        (st === STEEL_VALUE.STEEL4 && w > 64100 && w <= 71400) ||
        (st === STEEL_VALUE.STEEL5 && w > 51900 && w <= 58200) ||
        (st === STEEL_VALUE.STEEL6 && w > 36800 && w <= 41300)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 2'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 413000 && w <= 45800) ||
        (st === STEEL_VALUE.STEEL2 && w > 31000 && w <= 34600) ||
        (st === STEEL_VALUE.STEEL3 && w > 82600 && w <= 91700) ||
        (st === STEEL_VALUE.STEEL4 && w > 71400 && w <= 79500) ||
        (st === STEEL_VALUE.STEEL5 && w > 58200 && w <= 64500) ||
        (st === STEEL_VALUE.STEEL6 && w > 41300 && w <= 45800)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 2.1/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 45800 && w <= 50600) ||
        (st === STEEL_VALUE.STEEL2 && w > 34600 && w <= 38400) ||
        (st === STEEL_VALUE.STEEL3 && w > 91700 && w <= 101300) ||
        (st === STEEL_VALUE.STEEL4 && w > 79500 && w <= 88100) ||
        (st === STEEL_VALUE.STEEL5 && w > 64500 && w <= 72200) ||
        (st === STEEL_VALUE.STEEL6 && w > 45800 && w <= 50600)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 2.1/4'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 50600 && w <= 54600) ||
        (st === STEEL_VALUE.STEEL2 && w > 38400 && w <= 40900) ||
        (st === STEEL_VALUE.STEEL3 && w > 101300 && w <= 109200) ||
        (st === STEEL_VALUE.STEEL4 && w > 88100 && w <= 95500) ||
        (st === STEEL_VALUE.STEEL5 && w > 72200 && w <= 78000) ||
        (st === STEEL_VALUE.STEEL6 && w > 50600 && w <= 54600)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 2.3/8'`);
      } else if (
        (st === STEEL_VALUE.STEEL1 && w > 54600 && w <= 60500) ||
        (st === STEEL_VALUE.STEEL2 && w > 40900 && w <= 45300) ||
        (st === STEEL_VALUE.STEEL3 && w > 109200 && w <= 121000) ||
        (st === STEEL_VALUE.STEEL4 && w > 95500 && w <= 105800) ||
        (st === STEEL_VALUE.STEEL5 && w > 78000 && w <= 86400) ||
        (st === STEEL_VALUE.STEEL6 && w > 54600 && w <= 60500)
      ) {
        setSteelResult(`${STEEL_MESSAGE} 2.1/2'`);
      } else {
        setSteelResult(undefinedResult);
      }
    },
    [weight, setSteelResult, undefinedResult],
  );

  const onRibbonChange = useCallback(
    (r) => {
      setRibbon(r);
      handleRibbonResult(r);
    },
    [setRibbon, handleRibbonResult],
  );

  const onSteelChange = useCallback(
    (s) => {
      setSteel(s);
      handleSteelResult(s);
    },
    [setSteel, handleSteelResult],
  );

  const handleCalculate = useCallback(() => {
    handleShackleResult();
    handleRibbonResult(ribbon);
    handleSteelResult(steel);
  }, [handleShackleResult, handleRibbonResult, handleSteelResult, ribbon, steel]);

  return {
    onWeightChange,
    shackle,
    clearResult,
    weight,
    handleCalculate,
    onRibbonChange,
    ribbon,
    ribbonResult,
    onSteelChange,
    steel,
    steelResult,
  };
};

export default useCalculator;
