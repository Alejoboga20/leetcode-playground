const createCounter = (initialCount: number) => {
	return () => initialCount++;
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
