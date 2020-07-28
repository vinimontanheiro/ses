import {useCallback, useState} from 'react';
// import {parseValue} from '../../services/utils';

const useCrane = () => {
  const [height, setHeight] = useState(``);
  const [weight, setWeight] = useState(``);
  const [radius, setRadius] = useState(``);

  const clear = useCallback(() => {
    setHeight(``);
    setWeight(``);
    setRadius(``);
  }, [setHeight, setWeight, setRadius]);

  const onHeightChange = useCallback(
    (h) => {
      setHeight(h);
    },
    [setHeight],
  );

  const onWeightChange = useCallback(
    (h) => {
      setWeight(h);
    },
    [setWeight],
  );

  const onRadiusChange = useCallback(
    (h) => {
      setRadius(h);
    },
    [setRadius],
  );

  return {height, weight, radius, onHeightChange, onWeightChange, onRadiusChange, clear};
};

export default useCrane;
