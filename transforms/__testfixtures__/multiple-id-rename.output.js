const greeting = 'Hello, ';
const farewell = 'Farewell, ';

function showGreeting(name = 'someone') {
  return greeting + name;
}

function showFarewell(name = 'someone') {
  return farewell + name;
}
