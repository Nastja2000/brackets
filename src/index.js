module.exports = function check(str, bracketsConfig) {
    let bracketSequence = str.split('');
    let stack = [];
    let index = 0;
    let pair = {};
    bracketsConfig.forEach(element => {
        pair[element[0]] = element[1];
    });

    while (index < bracketSequence.length) {
        let lastOfBracketSequence = stack[stack.length - 1];
        (pair[lastOfBracketSequence] === bracketSequence[index]) ? stack.pop(): stack.push(bracketSequence[index]);
        index++;
    }
    return (stack.length === 0) ? true : false;

}
