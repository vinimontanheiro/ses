if (
  (ribbon === `Vertical` && weight > 0 && weight <= 1000) ||
  (ribbon === `Choker` && weight > 0 && weight <= 800) ||
  (ribbon === `Basket` && weight > 0 && weight <= 2000) ||
  (ribbon === `90°` && weight > 0 && weight <= 1400) ||
  (ribbon === `2 Pernas 0-45°` && weight > 0 && weight <= 1400) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 0 && weight <= 1000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 0 && weight <= 2100) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 0 && weight <= 1500)
) {
  return `Fita 1 Tol - Violeta`;
}
if (
  (ribbon === `Vertical` && weight > 1000 && weight <= 2000) ||
  (ribbon === `Choker` && weight > 800 && weight <= 1600) ||
  (ribbon === `Basket` && weight > 2000 && weight <= 4000) ||
  (ribbon === `90°` && weight > 1400 && weight <= 2800) ||
  (ribbon === `2 Pernas 0-45°` && weight > 1400 && weight <= 2800) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 1000 && weight <= 2000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 2100 && weight <= 4200) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 1500 && weight <= 3000)
) {
  return `Fita 2 Tol - Verde`;
}
if (
  (ribbon === `Vertical` && weight > 2000 && weight <= 3000) ||
  (ribbon === `Choker` && weight > 1600 && weight <= 2400) ||
  (ribbon === `Basket` && weight > 4000 && weight <= 6000) ||
  (ribbon === `90°` && weight > 2800 && weight <= 4200) ||
  (ribbon === `2 Pernas 0-45°` && weight > 2800 && weight <= 4200) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 2000 && weight <= 3000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 4200 && weight <= 6300) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 3000 && weight <= 4500)
) {
  return `Fita 3 Tol - Amarelo`;
}
if (
  (ribbon === `Vertical` && weight > 3000 && weight <= 4000) ||
  (ribbon === `Choker` && weight > 2400 && weight <= 3200) ||
  (ribbon === `Basket` && weight > 6000 && weight <= 8000) ||
  (ribbon === `90°` && weight > 4200 && weight <= 5600) ||
  (ribbon === `2 Pernas 0-45°` && weight > 4200 && weight <= 5600) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 3000 && weight <= 4000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 6300 && weight <= 8400) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 4500 && weight <= 6000)
) {
  return `Fita 4 Tol - Cinza`;
}
if (
  (ribbon === `Vertical` && weight > 4000 && weight <= 5000) ||
  (ribbon === `Choker` && weight > 3200 && weight <= 4000) ||
  (ribbon === `Basket` && weight > 8000 && weight <= 10000) ||
  (ribbon === `90°` && weight > 5600 && weight <= 7000) ||
  (ribbon === `2 Pernas 0-45°` && weight > 5600 && weight <= 7000) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 4000 && weight <= 5000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 8400 && weight <= 10500) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 6000 && weight <= 7500)
) {
  return `Fita 5 Tol - Vermelho`;
}
if (
  (ribbon === `Vertical` && weight > 5000 && weight <= 6000) ||
  (ribbon === `Choker` && weight > 4000 && weight <= 4800) ||
  (ribbon === `Basket` && weight > 10000 && weight <= 12000) ||
  (ribbon === `90°` && weight > 7000 && weight <= 8400) ||
  (ribbon === `2 Pernas 0-45°` && weight > 7000 && weight <= 8400) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 5000 && weight <= 6000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 10500 && weight <= 12600) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 7500 && weight <= 9000)
) {
  return `Fita 6 Tol - Marrom`;
}
if (
  (ribbon === `Vertical` && weight > 6000 && weight <= 8000) ||
  (ribbon === `Choker` && weight > 4800 && weight <= 6400) ||
  (ribbon === `Basket` && weight > 12000 && weight <= 16000) ||
  (ribbon === `90°` && weight > 8400 && weight <= 11200) ||
  (ribbon === `2 Pernas 0-45°` && weight > 8400 && weight <= 11200) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 6000 && weight <= 8000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 12600 && weight <= 16800) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 9000 && weight <= 12000)
) {
  return `Fita 8 Tol - Azul`;
}
if (
  (ribbon === `Vertical` && weight > 8000 && weight <= 10000) ||
  (ribbon === `Choker` && weight > 6400 && weight <= 8000) ||
  (ribbon === `Basket` && weight > 16000 && weight <= 20000) ||
  (ribbon === `90°` && weight > 11200 && weight <= 14000) ||
  (ribbon === `2 Pernas 0-45°` && weight > 11200 && weight <= 14000) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 8000 && weight <= 10000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 16800 && weight <= 21000) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 12000 && weight <= 15000)
) {
  return `Fita 10 Tol - Laranja`;
}
if (
  (ribbon === `Vertical` && weight > 10000 && weight <= 15000) ||
  (ribbon === `Choker` && weight > 8000 && weight <= 12000) ||
  (ribbon === `Basket` && weight > 20000 && weight <= 30000) ||
  (ribbon === `90°` && weight > 14000 && weight <= 21000) ||
  (ribbon === `2 Pernas 0-45°` && weight > 14000 && weight <= 21000) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 10000 && weight <= 15000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 21000 && weight <= 31500) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 15000 && weight <= 22500)
) {
  return `Fita 15 Tol - Laranja`;
}
if (
  (ribbon === `Vertical` && weight > 15000 && weight <= 20000) ||
  (ribbon === `Choker` && weight > 12000 && weight <= 16000) ||
  (ribbon === `Basket` && weight > 30000 && weight <= 40000) ||
  (ribbon === `90°` && weight > 21000 && weight <= 28000) ||
  (ribbon === `2 Pernas 0-45°` && weight > 21000 && weight <= 28000) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 15000 && weight <= 20000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 31500 && weight <= 42000) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 22500 && weight <= 30000)
) {
  return `Fita 20 Tol - Laranja`;
}
if (
  (ribbon === `Vertical` && weight > 20000 && weight <= 25000) ||
  (ribbon === `Choker` && weight > 16000 && weight <= 20000) ||
  (ribbon === `Basket` && weight > 40000 && weight <= 50000) ||
  (ribbon === `90°` && weight > 28000 && weight <= 35000) ||
  (ribbon === `2 Pernas 0-45°` && weight > 28000 && weight <= 35000) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 20000 && weight <= 25000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 42000 && weight <= 52500) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 30000 && weight <= 37500)
) {
  return `Fita 25 Tol - Laranja`;
}
if (
  (ribbon === `Vertical` && weight > 25000 && weight <= 30000) ||
  (ribbon === `Choker` && weight > 20000 && weight <= 24000) ||
  (ribbon === `Basket` && weight > 50000 && weight <= 60000) ||
  (ribbon === `90°` && weight > 35000 && weight <= 42000) ||
  (ribbon === `2 Pernas 0-45°` && weight > 35000 && weight <= 42000) ||
  (ribbon === `2 Pernas 46°-60°` && weight > 25000 && weight <= 30000) ||
  (ribbon === `3 e 4 Pernas 0-45°` && weight > 52500 && weight <= 63000) ||
  (ribbon === `3 e 4 Pernas 46°-60°` && weight > 37500 && weight <= 45000)
) {
  return `Fita 30 Tol - Laranja`;
}
return `Necessário definir o que fazer inf||m&&o weight acima`;
