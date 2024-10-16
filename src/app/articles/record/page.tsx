export default function HashTablePage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        Hash Table
      </p>
      <p id="text">
        Hash tables, also known as hash maps, are data structures that provide
        fast retrieval of values based on keys. They use a hashing function to
        map keys to indexes in an array, allowing for constant-time access in
        the average case. Hash tables are commonly used in dictionaries, caches,
        and database indexing. However, hash collisions can occur, which can
        impact their performance. Techniques like chaining and open addressing
        are employed to handle collisions.
      </p>
    </div>
  );
}
