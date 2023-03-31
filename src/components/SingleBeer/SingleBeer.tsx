import React from "react";
import { useRouter } from "next/router";
import styles from "../SingleBeer/SingleBeer.module.scss";

export interface SingleBeerData {
  id: number;
  name: string;
  tagline: string;
  description: string;
  abv: string;
  ibu: string;
}

export const BeerItem: React.FC<{ data: SingleBeerData[] }> = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.infoBox}>
      <div className={styles.card}>
        {data.map((el: any) => {
          return (
            <>
              <div>
                {el.name && (
                  <h3>
                    Beer name: <p className={styles.text}>{el.name}</p>
                  </h3>
                )}
                {el.tagline && (
                  <h3>
                    Tag line:
                    <p className={styles.text}>{el.tagline}</p>
                  </h3>
                )}
                {el.description && (
                  <h3>
                    Descritpion: <p className={styles.text}>{el.description}</p>
                  </h3>
                )}
                {el.abv && (
                  <h3>
                    ABV:<p className={styles.text}> {el.abv}</p>
                  </h3>
                )}
                {el.ibu && (
                  <h3>
                    IBU: <p className={styles.text}> {el.ibu}</p>{" "}
                  </h3>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BeerItem;
