export const getPoetry = async () => {
  // return fetch('https://v1.jinrishici.com/all.json')
  //   .then((response) => response.json())
  //   .then((data) => [data.origin, data.author, data.content]);
  const data = await (await fetch('https://v1.jinrishici.com/all.json')).json();
  const {origin, author, content} = data;
  return [origin, author, content];
}