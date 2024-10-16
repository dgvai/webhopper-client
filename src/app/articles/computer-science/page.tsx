import Link from "next/link";

export default function CSPage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        Computer Science
      </p>
      <p id="text">
        Computer science is the study of{" "}
        <Link className="link" href={"/articles/computation"}>
          computation
        </Link>
        ,{" "}
        <Link className="link" href={"/articles/information"}>
          information
        </Link>
        , and{" "}
        <Link className="link" href={"/articles/automation"}>
          automation
        </Link>
        . Computer science spans theoretical disciplines (such as algorithms,
        theory of computation, and information theory) to applied disciplines
        (including the design and implementation of hardware and software){" "}
      </p>
    </div>
  );
}
