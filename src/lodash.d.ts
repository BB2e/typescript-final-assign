// 모듈의 타입을 선언해주는 declaration file

/*
    head.js: https://github.com/lodash/lodash/blob/master/head.js
    hasIn.js: https://github.com/lodash/lodash/blob/master/hasIn.js
    isBoolean.js: https://github.com/lodash/lodash/blob/master/isBoolean.js
    toString.js: https://github.com/lodash/lodash/blob/master/toString.js
    split.js: https://github.com/lodash/lodash/blob/master/split.js
    hasPath.js: https://github.com/lodash/lodash/blob/master/hasPath.js
    filter.js: https://github.com/lodash/lodash/blob/master/filter.js
    every.js: https://github.com/lodash/lodash/blob/master/every.js
    map.js: https://github.com/lodash/lodash/blob/master/map.js
*/

interface Object {
    key: string
}

declare module "lodash" {
    function head < A > (array: A[]): A | undefined;

    function hasIn(object: Object, key:Object): boolean;

    function isBoolean < C > (value: C): boolean;

    function toString(value: string): string;

    function split < E > (string: E, separator: RegExp | E, limit: number): string[];

    function hasPath < F > (object: Object, path: F[] | F): boolean;

    function filter < G > (array: G[], predicate: Function): G[];

    function every<E>(array: E[] , predicate: Function): boolean;

    function map < I > (array: I[], iteratee: Function): I[];
}