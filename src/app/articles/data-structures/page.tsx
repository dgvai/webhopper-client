import Link from "next/link";

export default function DSPage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        Data Structure
      </p>
      <p id="text">
        In{" "}
        <Link className="link" href={"/articles/computer-science"}>
          computer science
        </Link>
        , a data structure is a data organization and storage format that is
        usually chosen for efficient access to data. More precisely, a data
        structure is a collection of data values, the relationships among them,
        and the{" "}
        <Link className="link" href={"/articles/function"}>
          functions
        </Link>{" "}
        or operations that can be applied to the data, i.e., it is an{" "}
        <Link className="link" href={"/articles/algebraic-structure"}>
          algebraic structure
        </Link>{" "}
        about data.
        <br></br>
        <br></br>
        Next we will learn about several{" "}
        <Link className="link" href={"/articles/data-structures/types"}>
          types of data structures
        </Link>
        .
      </p>
    </div>
  );
}
