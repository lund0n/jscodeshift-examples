import flatten from 'util/flatten';

function addAll(...values) {
  return flatten(values).reduce((acc, curr) => acc + curr, 0);
}
