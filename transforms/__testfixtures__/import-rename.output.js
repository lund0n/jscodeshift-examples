import flatten from 'lodash/flatten';

function addAll(...values) {
  return flatten(values).reduce((acc, curr) => acc + curr, 0);
}
