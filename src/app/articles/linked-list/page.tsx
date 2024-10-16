export default function LSPage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        Linked List
      </p>
      <p id="text">
        A linked list (also just called list) is a linear collection of data
        elements of any type, called nodes, where each node has itself a value,
        and points to the next node in the linked list. The principal advantage
        of a linked list over an array is that values can always be efficiently
        inserted and removed without relocating the rest of the list. Certain
        other operations, such as random access to a certain element, are
        however slower on lists than on arrays.
      </p>
    </div>
  );
}
