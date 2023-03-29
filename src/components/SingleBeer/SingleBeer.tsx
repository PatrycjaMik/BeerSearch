import React from "react";
import { useRouter } from "next/router";

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
    <div>
      {data.map((el: any) => {
        return (
          <>
            {el.name && <p>Beer name: {el.name}</p>}
            {el.tagline && <p>{el.tagline}</p>}
            {el.description && <p>Descritpion: {el.description}</p>}
            {el.abv && <p>ABV: {el.abv}</p>}
            {el.ibu && <p>IBU: {el.ibu}</p>}
          </>
        );
      })}
    </div>
  );
};

export default BeerItem;
