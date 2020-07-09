import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {useCallback, useState} from 'react';
import {setApp} from '../../services/redux/actions';

const useCalculator = () => {
  const initialState = {
    diameter: 0,
    diameterUnit: 0,
    thickness: 0,
    thicknessUnit: 0,
    length: 0,
    lengthUnit: 0,
    height: 0,
    heightUnit: 0,
    width: 0,
    widthUnit: 0,
    unit: 0,
    amount: 0,
  };
  const [initialValues, setInitialValues] = useState(initialState);
  const [result, setResult] = useState({value: 0, totalValue: 0});

  const clearResult = useCallback(() => {
    setResult({value: 0, totalValue: 0});
  }, [setResult]);

  const clearAll = useCallback(() => {
    clearResult();
    setInitialValues(initialState);
  }, [clearResult, setInitialValues, initialState]);

  const mm2cm = useCallback((mm) => Number(mm) / 10, []);
  const pol2cm = useCallback((pol) => Number(pol) * 2.54, []);

  // Barra sextavada
  const shape1 = useCallback(
    ({diameter, length}) => (diameter * diameter * 3 * 7.85 * length) / 3383,
    [],
  );

  // Barra redonda
  const shape2 = useCallback(
    ({diameter, length}) => (diameter * diameter * Math.PI * 7.85 * length) / 4000,
    [],
  );

  // Tubo
  const shape3 = useCallback(
    ({thickness, diameter, length}) =>
      (thickness * Math.PI * (diameter - thickness) * 7.85 * length) / 1000,
    [],
  );

  // Barra quadrada
  const shape4 = useCallback(({height, length}) => (height * height * 7.85 * length) / 1000, []);

  // Tubo quadrado
  const shape5 = useCallback(
    ({thickness, height, width, length}) =>
      (2 * thickness * (height + width - 2 * thickness) * 7.85 * length) / 1000,
    [],
  );

  // Barra chata
  const shape10 = useCallback(
    ({height, width, length}) => (height * width * 7.85 * length) / 1000,
    [],
  );

  // Chapa
  const shape11 = useCallback(
    ({height, width, length, thinkness}) => (height * width * thinkness * 7.85 * length) / 1000,
    [],
  );

  return {clearAll, clearResult, initialValues, result};
};

export default useCalculator;
