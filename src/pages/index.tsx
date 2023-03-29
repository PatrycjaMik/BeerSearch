import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageLoaderProps } from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  const myLoader = ({ src }: ImageLoaderProps) => {
    return `${src}`;
  };

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  const [pageId, setPageId] = React.useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.punkapi.com/v2/beers?page=${pageId}&per_page=12`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [pageId]);

  const loadNext = () => setPageId(pageId + 1);
  const loadPrevious = () =>
    pageId === 1 ? setPageId(1) : setPageId(pageId - 1);

  if (isLoading) return <div className={styles.loader} />;
  if (!data) return <p>No profile data</p>;

  const ROUTE_POST_ID = "singleBeer/[id]";

  return (
    <>
      <div className={styles.container}>
        <h1>Find your favourite beer and enjoy the day!</h1>
        <div className={styles.wrapper}>
          {data.map((e: any) => {
            return (
              <>
                <div key={`post-${e.id}`}>
                  <Link
                    href={{
                      pathname: ROUTE_POST_ID,
                      query: { id: e.id },
                    }}
                    className={styles.link}
                  >
                    <div className={styles.itemBox}>
                      <h2>{e.name}</h2>
                      <Image
                        loader={myLoader}
                        src={e.image_url}
                        alt={e.name}
                        width={50}
                        height={160}
                      />
                      <p>{e.tagline}</p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.pagination}>
          <button onClick={loadPrevious} type="button">
            previous
          </button>
          <p>Page {pageId}</p>
          <button onClick={loadNext} type="button">
            next
          </button>
        </div>
      </div>
    </>
  );
}
