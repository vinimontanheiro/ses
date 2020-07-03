import React from 'react';
import propTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

const SimpleAnimatableView = ({
  style,
  type,
  children,
  iterationCount,
  duration,
  onAnimationBegin,
  onAnimationEnd,
  ...props
}) => (
  <Animatable.View
    style={style}
    animation={type}
    iterationCount={iterationCount}
    duration={duration}
    useNativeDriver
    onAnimationBegin={onAnimationBegin}
    onAnimationEnd={onAnimationEnd}
    {...props}>
    {children}
  </Animatable.View>
);

SimpleAnimatableView.defaultProps = {
  iterationCount: 1,
  duration: 1000,
  onAnimationBegin: () => true,
  onAnimationEnd: () => true,
  style: [{}],
  children: <></>,
};

SimpleAnimatableView.propTypes = {
  style: propTypes.arrayOf(propTypes.shape({})),
  children: propTypes.node,
  iterationCount: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string.isRequired,
  duration: propTypes.number,
  onAnimationBegin: propTypes.func,
  onAnimationEnd: propTypes.func,
};

export default SimpleAnimatableView;
