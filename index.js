const getObject = async () => ({ key: 'value' });

console.log('\n\nUp and running');
getObject().then(obj => console.log(obj));
