import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <h1>Oooops....</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to{" "}
          <Link href="/" legacyBehavior>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    );
}