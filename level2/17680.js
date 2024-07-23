// https://school.programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
  var answer = 0;
  const cache = new LRUCache(cacheSize);

  for (const city of cities) {
    const cityName = city.toLowerCase();
    if (cache.get(cityName) !== -1) {
      answer += 1; // cache hit
    } else {
      answer += 5; // cache miss
      cache.put(cityName, cityName);
    }
  }

  return answer;
}

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode(null, null);
    this.tail = new ListNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _addNode(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  _removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addNode(node);
  }

  _popTail() {
    const res = this.tail.prev;
    this._removeNode(res);
    return res;
  }

  get(key) {
    const node = this.cache.get(key);
    if (!node) return -1;
    this._moveToHead(node);
    return node.value;
  }

  put(key, value) {
    let node = this.cache.get(key);
    if (node) {
      node.value = value;
      this._moveToHead(node);
    } else {
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this._addNode(newNode);

      if (this.cache.size > this.capacity) {
        const tail = this._popTail();
        this.cache.delete(tail.key);
      }
    }
  }
}

const cacheSize = 3;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];
const result = solution(cacheSize, cities);
console.log(result);
