// console.log('utils.js');
// const country = 'Bangladesh';
// const tech = 'nodejs';
// module.exports = { country, tech };

function getAge(age) {
	console.log(`Age is ${age}`);
}

function getAddress (address) {
    console.log(address);
}

// module.exports = getAge;
module.exports = { getAge, getAddress };
