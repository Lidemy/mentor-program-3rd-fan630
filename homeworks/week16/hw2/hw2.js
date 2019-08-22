const Stack = function () {
  const list = []
  return {
    push: (n) => { list[list.length] = n },
    pop: () => {
      const newList = [list[0], list[1]] = [list[1], list[0]]
      return newList.shift()
    }
  }
}

const stack = new Stack()
stack.push(10)
stack.push(5)
console.log(stack.pop())
console.log(stack.pop())

const Queue = function () {
  const list = []
  return {
    push: (n) => { list[list.length] = n },
    pop: () => {
      const newList = list.shift()
      return newList
    }
  }
}

const queue = new Queue()
queue.push(1)
queue.push(2)
console.log(queue.pop())
console.log(queue.pop())
