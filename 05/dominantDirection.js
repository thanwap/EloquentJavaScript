function dominantDirection(text) {
    var chars = [];
    for (let char of text) {
        chars.push(characterScript(char.codePointAt(0)));

    }
    return countBy(chars, (x) => { return x ? x.direction : "" })
        .reduce((res, cur) => 
            {
                if (cur.count > res.count) return cur;
                    
                return res;
            }).name;
}



console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl