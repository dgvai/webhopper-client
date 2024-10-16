import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <p className="text-3xl mb-4" id="title">
        WebHopper | Articles
      </p>
      <ol className="list-decimal p-4">
        <li>
          <Link href={"/articles/data-structures"} className="link">
            Data Structures
          </Link>
        </li>
      </ol>
    </div>
  );
}
