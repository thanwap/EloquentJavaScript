function deepEqual(obj1, obj2) {
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) return false;

    for (let i = 0; i < obj1Keys.length; i++) {
        var key1 = obj1Keys[i], key2 = obj2Keys[i];
        var val1 = obj1[key1], val2 = obj2[key2];
        var type1 = typeof val1, type2 = typeof val2;
        if (key1 !== key2 || type1 !== type2) {

            return false;
        }
        if (type1 === 'object') {
            if (!deepEqual(val1, val2)) { return false; }
        } else {
            if (val1 !== val2) return false;
        }
    }

    return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

