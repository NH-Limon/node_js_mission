const fs = require('fs');
const yargs = require('yargs');
const { default: chalk } = require('chalk');
const operation = yargs.argv._[0];
const title = yargs.argv.title;
const file = yargs.argv.file;
const data = yargs.argv.data;

if (operation === 'create') {
	fs.writeFileSync(
		file,
		`Title: ${title}
Body: ${yargs.argv.body}`
	);
	console.log(chalk.bold.green.inverse('note created successfully'));
} else if (operation === 'read') {
	const content = fs.readFileSync(file);
	console.log(
		`${chalk.cyan.inverse.bold('Here is the content:')}\n${content}`
	);
} else if (operation === 'update') {
	fs.appendFileSync(file, data);
	console.log(chalk.blue.bold.inverse('note updated successfully'));
} else if (operation === 'delete') {
	fs.unlinkSync(file);
	console.log(chalk.red.inverse.bold('note deleted successfully'));
} else {
	console.log('Operation failed!');
}