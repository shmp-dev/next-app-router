import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArtcleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            width={1280}
            height={300}
            alt=""
          ></Image>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.js の勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Publiched on 2023/11/26</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            doloremque similique, voluptatum dignissimos ipsa fuga amet cumque
            magni adipisci aperiam! Vitae deleniti voluptas nesciunt iure, dolor
            quibusdam minima mollitia quam.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=２"
            width={1280}
            height={300}
            alt=""
          ></Image>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.js の勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Publiched on 2023/11/26</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            doloremque similique, voluptatum dignissimos ipsa fuga amet cumque
            magni adipisci aperiam! Vitae deleniti voluptas nesciunt iure, dolor
            quibusdam minima mollitia quam.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArtcleList;
