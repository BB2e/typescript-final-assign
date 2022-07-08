// import {head, hasIn, isBoolean, toString, split, hasPath, filter, every, map} from 'lodash'; 

// lodash.d.ts 타입 작동 테스트

// ------------------------------
function head < A > (array: A[]): A | undefined {
    return (array != null && array.length) ?
        array[0] :
        undefined
}
head(["1234"]);

// ------------------------------
interface Object {
    key: string
}

let object = {
    key: 'asdf'
}

function hasIn(object: Object, key: Object): boolean {
    return object != null && true;
}
hasIn(object, 'a')

// ------------------------------
function isBoolean < C > (value: C): boolean {
    return true;
}
isBoolean(false)

// ------------------------------
function toString(value: string): string {
    return ''
}
toString('value')

// ------------------------------
function split < E > (string: E, separator: RegExp | E, limit: number): string[] {
    limit = limit === undefined ? 0 : 3;
    if (!limit) {
        return []
    }
    return ['a', 'b'];
}
split('a-b-c', '-', 2);

// ------------------------------
function hasPath < F > (object: Object, path: F[] | F): boolean {
    return true;
}
const object3 = {
    'a': {
        'b': 2
    }
}
const other = {
    'b': 2
}

hasPath(object3, 'a.b')
// => true
hasPath(object, ['a', 'b'])
// => true

// ------------------------------
const users = [{
        'user': 'barney',
        'active': true
    },
    {
        'user': 'fred',
        'active': false
    }
]
function filter < G > (array: G[], predicate: Function): G[] {
    let index = -1
    let resIndex = 0
    const length = array == null ? 0 : array.length
    const result = []

    while (++index < length) {
        const value = array[index]
        if (predicate(value, index, array)) {
            result[resIndex++] = value
        }
    }
    return result
}
filter(users, ({
    active
}) => active);

// ------------------------------
function every < E > (array: E[], predicate: Function): boolean {
    return true;
}
const object2 = {
    'b': 2
}
every([true, 1, null, 'yes'], Boolean);

// ------------------------------
function map < I > (array: I[], iteratee: Function): I[] {
    let index = -1
    const length = array == null ? 0 : array.length
    const result = new Array(length)
    while (++index < length) {
        result[index] = iteratee(array[index], index, array)
    }
    return result;
}

// ------------------------------
function square(n:number):number {
    return n * n
}
map([4, 8], square)
// => [16, 64]