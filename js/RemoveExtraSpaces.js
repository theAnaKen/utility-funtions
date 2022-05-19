const removeExtraSpaces = (text) => {
	let newText = text.split(/[ ]+/);
	return newText.join(" ");
};

export default removeExtraSpaces;
