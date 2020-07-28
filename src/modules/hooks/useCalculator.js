import {useCallback, useState} from 'react';
import {SHAPE_LABEL, UNIT} from '../../constants';
import {parseValue} from '../../services/utils';

const useCalculator = (shape) => {
  const initialState = {
    diameter: 0,
    diameterUnit: 1,
    thickness: 0,
    thicknessUnit: 1,
    length: 0,
    lengthUnit: 1,
    height: 0,
    heightUnit: 1,
    width: 0,
    widthUnit: 1,
    amount: 1,
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

  const mm2cm = useCallback((value) => Number(value) / 10, []);
  const pol2cm = useCallback((value) => Number(value) * 2.54, []);

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
    ({width, length, thickness}) => (width * thickness * 7.85 * length) / 1000,
    [],
  );

  const getValue = useCallback(
    (value, unit) => {
      if (unit === UNIT.MM) {
        return mm2cm(Number(parseValue(value)));
      }
      if (unit === UNIT.POL) {
        return pol2cm(Number(parseValue(value)));
      }
      return Number(parseValue(value));
    },
    [mm2cm, pol2cm],
  );

  const calculate = useCallback(
    ({
      diameter: diameterCM,
      diameterUnit,
      thickness: thicknessCM,
      thicknessUnit,
      length: lengthCM,
      lengthUnit,
      height: heightCM,
      heightUnit,
      width: widthCM,
      widthUnit,
      amount,
    }) => {
      const diameter = getValue(diameterCM, diameterUnit);
      const thickness = getValue(thicknessCM, thicknessUnit);
      const length = getValue(lengthCM, lengthUnit);
      const height = getValue(heightCM, heightUnit);
      const width = getValue(widthCM, widthUnit);

      switch (shape.label) {
        case SHAPE_LABEL.SHAPE1:
          setResult({
            value: shape1({diameter, length}),
            totalValue: shape1({diameter, length}) * +amount,
          });
          break;
        case SHAPE_LABEL.SHAPE2:
          setResult({
            value: shape2({diameter, length}),
            totalValue: shape2({diameter, length}) * +amount,
          });
          break;
        case SHAPE_LABEL.SHAPE3:
          setResult({
            value: shape3({thickness, diameter, length}),
            totalValue: shape3({thickness, diameter, length}) * +amount,
          });
          break;
        case SHAPE_LABEL.SHAPE4:
          setResult({
            value: shape4({height, length}),
            totalValue: shape4({height, length}) * +amount,
          });
          break;
        case SHAPE_LABEL.SHAPE5:
          setResult({
            value: shape5({thickness, height, width, length}),
            totalValue: shape5({thickness, height, width, length}) * +amount,
          });
          break;
        // case SHAPE_LABEL.SHAPE6:
        //   break;
        // case SHAPE_LABEL.SHAPE7:
        //   break;
        // case SHAPE_LABEL.SHAPE8:
        //   break;
        // case SHAPE_LABEL.SHAPE9:
        //   break;
        case SHAPE_LABEL.SHAPE10:
          setResult({
            value: shape10({height, width, length}),
            totalValue: shape10({height, width, length}) * +amount,
          });
          break;
        case SHAPE_LABEL.SHAPE11:
          setResult({
            value: shape11({width, length, thickness}),
            totalValue: shape11({width, length, thickness}) * +amount,
          });
          break;
        default:
          break;
      }
    },
    [
      shape,
      getValue,
      shape1,
      shape2,
      shape3,
      shape4,
      shape5,
      // shape6,
      // shape7,
      // shape8,
      // shape9,
      shape10,
      shape11,
      setResult,
    ],
  );

  return {clearAll, clearResult, initialValues, result, calculate};
};

export default useCalculator;
