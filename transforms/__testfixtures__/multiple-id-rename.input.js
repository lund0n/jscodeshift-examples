const a = 'Hello, ';
const b = 'Farewell, ';

function showGreeting(name = 'someone') {
  return a + name;
}

function showFarewell(name = 'someone') {
  return b + name;
}
