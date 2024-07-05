


const asyncFunc2 = () => (asyncFunc1) => {
    return asyncFunc1;
};

asyncFunc2();

const asyncFunc1 = () => {
  const a = 5;
  const b = 10;
  console.log(a + b);
};

const asyncFunc3 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const orchestrateFuncs = async () => {

  const data = await asyncFunc3();
  console.log(data.title)
  asyncFunc1();
};

orchestrateFuncs();