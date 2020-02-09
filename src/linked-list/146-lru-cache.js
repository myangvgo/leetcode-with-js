/**
 * 解法一：使用哈希表 + 双向链表
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

export { LRUCache, LRUCache2 };
