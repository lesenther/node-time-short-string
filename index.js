/**
 * Units
 */
const units = require('./units.json');

/**
 * Format a number of seconds into a short readable string
 * 
 * @param {float} seconds 
 */
function timeStr(seconds, opts = {}) {
  opts = {
    sep: ' ',
    suffix: true,
    suffixPast: 'ago',
    suffixPresent: 'now',
    suffixFuture: 'from now',
    precision: 'ms',
    units: {},
    ...opts,
  };

  if (seconds === 0) {
    return opts.suffix ? opts.suffixPresent : '';
  }

  const past = seconds >= 0;
  const limit = units.find(unit => unit.label === opts.precision);
  let remaining = past ? seconds : (-1 * seconds);

  return [
    units.reduce((str, unit) => {
      if (remaining < unit.seconds || unit.seconds < limit.seconds) {
        return str;
      }

      const value = Math.floor(remaining / unit.seconds);
      remaining = remaining - value * unit.seconds;

      return [ str, `${value}${unit.label}` ].join(opts.sep);
    }, '').trim(),
    opts.suffix ? (past ? opts.suffixPast : opts.suffixFuture) : '',
  ].join(opts.sep).trim();
}

module.exports = timeStr
