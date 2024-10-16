import Link from "next/link";

export default function ExamplePage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        Data Structure Types
      </p>
      <p id="text">
        Here are some examples of Data Structures:{" "}
        <Link className="link" href={"/articles/array"}>
          Array
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/linked-list"}>
          Linked List
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/record"}>
          Record
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/hash-table"}>
          Hash Tables
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/graphs"}>
          Graphs
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/stack-queue"}>
          Stack-Queue
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/trees"}>
          Trees
        </Link>
        , etc.
      </p>
    </div>
  );
}
