module.exports = function check(str, bracketsConfig) {
        /*variant 2 (trying to use stack)*/
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
    /*variant 1*/
    /*let pair = '';
        while (str.length > 1) {
            bracketsConfig.forEach(element => {
                
                pair = `${element[0]}${element[1]}`;

                console.log(pair);

                
                console.log(str.length);
                while (str.length > 1) {
                    for (let i = 0; i < str.length; i++) {
                        let subString = `${str[i]}${str[i+1]}`;
                        console.log(subString);
                        if (subString === pair) {
                            str = str.replace(subString, '');
                            console.log(str);
                            str.length -= 2;
                        }

                    }
                    if (str.length === 1 || (!str.includes(pair))) break;
                }

            });
            if (str.length === 1 ) break;
           }


           if (str.length === 0) return true;
           return false;*/
