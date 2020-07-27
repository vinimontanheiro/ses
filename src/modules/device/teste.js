if (
  (ribbon === `Vertical Simples` && weight > 0 && weight <= 1800) ||
  (ribbon === `F||ca Choker` && weight > 0 && weight <= 1300) ||
  (ribbon === `Vertical` && weight > 0 && weight <= 3600) ||
  (ribbon === `30°` && weight > 0 && weight <= 3100) ||
  (ribbon === `45°` && weight > 0 && weight <= 2600) ||
  (ribbon === `60°` && weight > 0 && weight <= 1800)
) {
  return `3/8'`;
} else {
  if (
    (ribbon === `Vertical Simples` && weight > 1800 && weight <= 3100) ||
    (ribbon === `F||ca Choker` && weight > 1300 && weight <= 2300) ||
    (ribbon === `Vertical` && weight > 3600 && weight <= 6300) ||
    (ribbon === `30°` && weight > 3100 && weight <= 5500) ||
    (ribbon === `45°` && weight > 2600 && weight <= 4500) ||
    (ribbon === `60°` && weight > 1800 && weight <= 3100)
  ) {
    return `1/2'`;
  } else {
    if (
      (ribbon === `Vertical Simples` && weight > 3100 && weight <= 4900) ||
      (ribbon === `F||ca Choker` && weight > 2300 && weight <= 3600) ||
      (ribbon === `Vertical` && weight > 6300 && weight <= 9800) ||
      (ribbon === `30°` && weight > 5500 && weight <= 8500) ||
      (ribbon === `45°` && weight > 4500 && weight <= 6800) ||
      (ribbon === `60°` && weight > 3100 && weight <= 4900)
    ) {
      return `5/8''`;
    } else {
      if (
        (ribbon === `Vertical Simples` && weight > 4900 && weight <= 6900) ||
        (ribbon === `F||ca Choker` && weight > 3600 && weight <= 5100) ||
        (ribbon === `Vertical` && weight > 6800 && weight <= 13700) ||
        (ribbon === `30°` && weight > 8500 && weight <= 11700) ||
        (ribbon === `45°` && weight > 6800 && weight <= 9900) ||
        (ribbon === `60°` && weight > 4900 && weight <= 6800)
      ) {
        return `3/4'`;
      } else {
        if (
          (ribbon === `Vertical Simples` && weight > 6900 && weight <= 9000) ||
          (ribbon === `F||ca Choker` && weight > 5100 && weight <= 6800) ||
          (ribbon === `Vertical` && weight > 13700 && weight <= 18100) ||
          (ribbon === `30°` && weight > 11700 && weight <= 15400) ||
          (ribbon === `45°` && weight > 9900 && weight <= 12700) ||
          (ribbon === `60°` && weight > 6800 && weight <= 9000)
        ) {
          return `7/8'`;
        } else {
          if (
            (ribbon === `Vertical Simples` && weight > 9000 && weight <= 11700) ||
            (ribbon === `F||ca Choker` && weight > 6800 && weight <= 8800) ||
            (ribbon === `Vertical` && weight > 18100 && weight <= 23500) ||
            (ribbon === `30°` && weight > 15400 && weight <= 19900) ||
            (ribbon === `45°` && weight > 12700 && weight <= 16300) ||
            (ribbon === `60°` && weight > 9000 && weight <= 11700)
          ) {
            return `1'`;
          } else {
            if (
              (ribbon === `Vertical Simples` && weight > 11700 && weight <= 14500) ||
              (ribbon === `F||ca Choker` && weight > 8800 && weight <= 10800) ||
              (ribbon === `Vertical` && weight > 23500 && weight <= 29000) ||
              (ribbon === `30°` && weight > 19900 && weight <= 25400) ||
              (ribbon === `45°` && weight > 16300 && weight <= 20800) ||
              (ribbon === `60°` && weight > 11700 && weight <= 14500)
            ) {
              return `1.1/8'`;
            } else {
              if (
                (ribbon === `Vertical Simples` && weight > 14500 && weight <= 17100) ||
                (ribbon === `F||ca Choker` && weight > 10800 && weight <= 13300) ||
                (ribbon === `Vertical` && weight > 29000 && weight <= 34300) ||
                (ribbon === `30°` && weight > 25400 && weight <= 30400) ||
                (ribbon === `45°` && weight > 20800 && weight <= 24700) ||
                (ribbon === `60°` && weight > 14500 && weight <= 17100)
              ) {
                return `1.1/4'`;
              } else {
                if (
                  (ribbon === `Vertical Simples` && weight > 17100 && weight <= 20900) ||
                  (ribbon === `F||ca Choker` && weight > 13300 && weight <= 15200) ||
                  (ribbon === `Vertical` && weight > 34300 && weight <= 41800) ||
                  (ribbon === `30°` && weight > 30400 && weight <= 36100) ||
                  (ribbon === `45°` && weight > 24700 && weight <= 29500) ||
                  (ribbon === `60°` && weight > 17100 && weight <= 20900)
                ) {
                  return `1.3/8'`;
                } else {
                  if (
                    (ribbon === `Vertical Simples` && weight > 20900 && weight <= 24700) ||
                    (ribbon === `F||ca Choker` && weight > 15200 && weight <= 18000) ||
                    (ribbon === `Vertical` && weight > 41800 && weight <= 49400) ||
                    (ribbon === `30°` && weight > 36100 && weight <= 42700) ||
                    (ribbon === `45°` && weight > 29500 && weight <= 32200) ||
                    (ribbon === `60°` && weight > 20900 && weight <= 24700)
                  ) {
                    return `1.1/2'`;
                  } else {
                    if (
                      (ribbon === `Vertical Simples` && weight > 24700 && weight <= 28300) ||
                      (ribbon === `F||ca Choker` && weight > 18000 && weight <= 20700) ||
                      (ribbon === `Vertical` && weight > 49400 && weight <= 56500) ||
                      (ribbon === `30°` && weight > 42700 && weight <= 49000) ||
                      (ribbon === `45°` && weight > 32200 && weight <= 39600) ||
                      (ribbon === `60°` && weight > 24700 && weight <= 28200)
                    ) {
                      return `1.5/8'`;
                    } else {
                      if (
                        (ribbon === `Vertical Simples` && weight > 28300 && weight <= 31900) ||
                        (ribbon === `F||ca Choker` && weight > 20700 && weight <= 24400) ||
                        (ribbon === `Vertical` && weight > 56500 && weight <= 63900) ||
                        (ribbon === `30°` && weight > 49000 && weight <= 56400) ||
                        (ribbon === `45°` && weight > 39600 && weight <= 46000) ||
                        (ribbon === `60°` && weight > 28200 && weight <= 31900)
                      ) {
                        return `1.3/4'`;
                      } else {
                        if (
                          (ribbon === `Vertical Simples` && weight > 31900 && weight <= 36800) ||
                          (ribbon === `F||ca Choker` && weight > 24400 && weight <= 27300) ||
                          (ribbon === `Vertical` && weight > 63900 && weight <= 73600) ||
                          (ribbon === `30°` && weight > 56400 && weight <= 64100) ||
                          (ribbon === `45°` && weight > 46000 && weight <= 51900) ||
                          (ribbon === `60°` && weight > 31900 && weight <= 36800)
                        ) {
                          return `1.7/8'`;
                        } else {
                          if (
                            (ribbon === `Vertical Simples` && weight > 36800 && weight <= 41300) ||
                            (ribbon === `F||ca Choker` && weight > 27300 && weight <= 31000) ||
                            (ribbon === `Vertical` && weight > 73600 && weight <= 82600) ||
                            (ribbon === `30°` && weight > 64100 && weight <= 71400) ||
                            (ribbon === `45°` && weight > 51900 && weight <= 58200) ||
                            (ribbon === `60°` && weight > 36800 && weight <= 41300)
                          ) {
                            return `2'`;
                          } else {
                            if (
                              (ribbon === `Vertical Simples` &&
                                weight > 413000 &&
                                weight <= 45800) ||
                              (ribbon === `F||ca Choker` && weight > 31000 && weight <= 34600) ||
                              (ribbon === `Vertical` && weight > 82600 && weight <= 91700) ||
                              (ribbon === `30°` && weight > 71400 && weight <= 79500) ||
                              (ribbon === `45°` && weight > 58200 && weight <= 64500) ||
                              (ribbon === `60°` && weight > 41300 && weight <= 45800)
                            ) {
                              return `2.1/8'`;
                            } else {
                              if (
                                (ribbon === `Vertical Simples` &&
                                  weight > 45800 &&
                                  weight <= 50600) ||
                                (ribbon === `F||ca Choker` && weight > 34600 && weight <= 38400) ||
                                (ribbon === `Vertical` && weight > 91700 && weight <= 101300) ||
                                (ribbon === `30°` && weight > 79500 && weight <= 88100) ||
                                (ribbon === `45°` && weight > 64500 && weight <= 72200) ||
                                (ribbon === `60°` && weight > 45800 && weight <= 50600)
                              ) {
                                return `2.1/4'`;
                              } else {
                                if (
                                  (ribbon === `Vertical Simples` &&
                                    weight > 50600 &&
                                    weight <= 54600) ||
                                  (ribbon === `F||ca Choker` &&
                                    weight > 38400 &&
                                    weight <= 40900) ||
                                  (ribbon === `Vertical` && weight > 101300 && weight <= 109200) ||
                                  (ribbon === `30°` && weight > 88100 && weight <= 95500) ||
                                  (ribbon === `45°` && weight > 72200 && weight <= 78000) ||
                                  (ribbon === `60°` && weight > 50600 && weight <= 54600)
                                ) {
                                  return `2.3/8'`;
                                } else {
                                  if (
                                    (ribbon === `Vertical Simples` &&
                                      weight > 54600 &&
                                      weight <= 60500) ||
                                    (ribbon === `F||ca Choker` &&
                                      weight > 40900 &&
                                      weight <= 45300) ||
                                    (ribbon === `Vertical` &&
                                      weight > 109200 &&
                                      weight <= 121000) ||
                                    (ribbon === `30°` && weight > 95500 && weight <= 105800) ||
                                    (ribbon === `45°` && weight > 78000 && weight <= 86400) ||
                                    (ribbon === `60°` && weight > 54600 && weight <= 60500)
                                  ) {
                                    return `2.1/2'`;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
