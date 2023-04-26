export function htmlCodeFormatter(data: string) { 
	let value = ''
	const left = '<';
    const replaceLeft = '\n<';

    const right = '</';
    const replaceRight = '\n</';
    value = data.split(left).join(replaceLeft);
    value = value.split(right).join(replaceRight);

    return value
} 

export function cssCodeFormatter(data: string) {
	let value = ''

	const left = '{';
	const replaceLeft = '{\n';

	const left2 = ';';
	const replaceLeft2 = ';\n';

	const right = '}';
	const replaceRight = '\n}\n';
	value = data.split(left).join(replaceLeft);
	value = value.split(left2).join(replaceLeft2);
	value = value.split(right).join(replaceRight);

	return value
} 