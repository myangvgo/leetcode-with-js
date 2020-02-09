import { expect } from 'chai';
import { LRUCache, LRUCache2 } from '../../src';

describe('Test LRU Cache', () => {
    //arrange
    let cache;
    let expectedOutput = [1, -1, -1, 3, 4];
    let actual = [];
    let testMethods = [LRUCache, LRUCache2];

    testMethods.forEach(f => {
        it(`Test ${f.name} methods`, () => {
            // act
            actual = [];
            cache = new f(2 /* 缓存容量 */);
            cache.put(1, 1);
            cache.put(2, 2);
            actual.push(cache.get(1)); // 返回  1
            cache.put(3, 3); // 该操作会使得密钥 2 作废
            actual.push(cache.get(2)); // 返回 -1 (未找到)
            cache.put(4, 4); // 该操作会使得密钥 1 作废
            actual.push(cache.get(1)); // 返回 -1 (未找到)
            actual.push(cache.get(3)); // 返回  3
            actual.push(cache.get(4)); // 返回  4

            // assert
            expect(actual).deep.equal(expectedOutput);
        });
    });
});
