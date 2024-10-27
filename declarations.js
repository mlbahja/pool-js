const escapeStr = "`, \\, \/, \", '.";
const arr = [4,'2'];
const obj = {
    str: "Mustapha",
    num: 24,
    bool: true,
    undef: undefined
};
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "Lbahja",
        num: 24,
        bool: false
    }
};
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(obj);