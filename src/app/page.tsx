import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ルート</h1>
      <Link href="./articles">記事へ</Link>
    </div>
  );
}
