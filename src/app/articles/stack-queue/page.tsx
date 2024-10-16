export default function StackQueuePage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        Stack-Queue
      </p>
      <p id="text">
        Stacks and queues are abstract data types that can be implemented using
        arrays or linked lists. A stack has two primary operations: push (adds
        an element to the top of the stack) and pop (removes the topmost element
        from the stack), that follow the Last In, First Out (LIFO) principle.
        Queues have two main operations: enqueue (adds an element to the rear of
        the queue) and dequeue (removes an element from the front of the queue)
        that follow the First In, First Out (FIFO) principle.
      </p>
    </div>
  );
}
