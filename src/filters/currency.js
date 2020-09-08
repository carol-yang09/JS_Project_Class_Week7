export default function (num) {
  const n = Number(num);
  // const part = n.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,');
  // return `$ ${part}`;
  return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
    const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
    return currency;
  })}`;
}
