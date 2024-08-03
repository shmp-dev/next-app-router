import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 px-20 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Next Blog</Link>
        </h1>
      </div>
      <div>
        <Link
          href="/articles/new"
          className="bg-orange-300 px-3 py-3 rounded-md"
        >
          新規記事を作成
        </Link>
      </div>
    </header>
  );
};

export default Header;
