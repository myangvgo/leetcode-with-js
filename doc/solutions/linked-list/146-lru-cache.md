# 146 LRU 缓存机制

## 题目描述

<https://leetcode-cn.com/problems/lru-cache>

## 题目解析

LRU Cache 需要在 O(1) 时间复杂度完成如下操作

-   获取键 / 检查键是否存在
-   设置键
-   删除最先插入的键

### 解法一：哈希表 + 双向链表

哈希表特点 - 查找：O(1)，数据没有顺序，但插入删除慢。
双链表特点 - 插入、删除：O(1)，数据有顺序，但查找慢。

```js
let LRUCache = function(capacity) {
    初始化容量，用于判断LRU是否已满
    初始化哈希表映射，用于查找节点
    初始化双链表，用于插入、删除节点
};
LRUCache.prototype.get = function(key) {
    if(哈希查找 不存在){
        return -1;
    }else{
        将此节点置于开头，为最近访问节点
        return 节点值
    }
}
LRUCache.prototype.put = function(key, value) {
    if(哈希查找 已经存在){
        删除旧的数据
    }else{
        if(LRU 即 双链表已满){
            删除尾节点
            更新哈希映射值，并将更新后的节点置于开头
        }
        将新节点置于开头
        新建新节点的哈希映射
    }
}
```

具体实现

```js
/**
 * 使用哈希表 + 双向链表
 */
class LRUCache {
    /**
     * 初始化一个大小为 capacity 的缓存
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.cache = new DoublyLinkedList();
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;
        let val = this.map.get(key).val;
        this.put(key, val); // 访问缓存数据后，将改缓存结点放到最前
        return val;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = new DoubleLinkedNode(key, value);
        // 命中缓存，删除旧的结点
        if (this.map.has(key)) {
            this.cache.remove(this.map.get(key));
            this.map.delete(key);
        } else {
            // 未找到缓存
            // 超出缓存大小限制，删除最后一个缓存结点及其映射
            if (this.capacity === this.cache.size) {
                let last = this.cache.removeLast();
                this.map.delete(last.key);
            }
        }
        // 在头部新增结点更新映射
        this.cache.addFirst(node);
        this.map.set(key, node);
    }
}

/**
 * Definition for doubly linked list
 */
class DoublyLinkedList {
    // 初始化链表大小、头结点和尾结点
    constructor() {
        this.size = 0;
        // dummy head and tail
        this.head = new DoubleLinkedNode(0, 0);
        this.tail = new DoubleLinkedNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * 在链表头部后面增加节点
     * @param {DoubleLinkedNode} node
     * @return {void}
     */
    addFirst(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }

    /**
     * 删除 DoubleLinkedNode节点
     * @param {DoubleLinkedNode} node
     * @return {void}
     */
    remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
        this.size--;
    }

    /**
     * 删除链表最后一个结点（尾结点的前驱结点）
     * @return {DoubleLinkedNode}
     */
    removeLast() {
        // this.size === 0
        if (this.tail.prev == this.head) return null; // 链表为空
        let last = this.tail.prev;
        this.remove(last);
        return last;
    }
}

/**
 * Definition for a double linked list node
 */
class DoubleLinkedNode {
    /**
     * @param {number} key
     * @param {number} val
     * @param {DoubleLinkedNode} prev
     * @param {DoubleLinkedNode} next
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = this.next = null;
    }
}
```

时间复杂度：对于 put 和 get 都是 O(1)O(1)。
空间复杂度：O(capacity)O(capacity)，因为哈希表和双向链表最多存储 capacity + 1 个元素。

### 解法二：使用有序字典数据结构（综合了哈希表和链表）

有一种叫做有序字典的数据结构，综合了哈希表和链表，在 Python 中为 OrderedDict，在 Java 中为 LinkedHashMap。
在 JavaScript 中，数据类型 Map 可以符合要求：

> MDN: Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

1. Map 中的键值是有序的（添加到对象中的键是无序的），对 Map 进行遍历，是按照插入记录的顺序返回的。
2. Map.prototype.keys() 返回一个新的 Iterator 对象， 它包含按照顺序插入 Map 对象中每个元素的 key 值。
    - 尾部元素一直是最新 set 的，对应于 LRU 的最近使用原则 (Map.set())
    - 头部元素是最远使用的，用于 LRU 容量满载时删除最远使用的元素，可以获取第一个记录的 key (Map.keys().next().value)

```js
/**
 * 解法二：利用 JavaScript 中 Map （本质上是 Ordered Hashmap）
 */
class LRUCache2 {
    /**
     * 初始化容量大小为 capacity 的缓存
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // 访问到缓存
        if (this.cache.has(key)) {
            let val = this.cache.get(key);
            // 删除缓存 并添加到最前面
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else {
            if (this.cache.size === this.capacity) {
                // 使用迭代器获取第一个记录（对应的就是LRU Cache中最旧的元素）
                let last = this.cache.keys().next().value;
                this.cache.delete(last);
            }
        }
        this.cache.set(key, value);
    }
}
```

时间复杂度：对于 put 和 get 都是 O(1)O(1)。
空间复杂度：O(capacity)O(capacity)，因为哈希表和双向链表最多存储 capacity + 1 个元素。
