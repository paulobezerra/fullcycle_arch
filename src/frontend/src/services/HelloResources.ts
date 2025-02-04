async function getHelloResource() {
  const response = await fetch('/api/hello');
  return response.json();
}

export { getHelloResource };

