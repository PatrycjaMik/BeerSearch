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
            <p>Beer name: {el.name}</p>
            <p>{el.tagline}</p>
            <p>Descritpion: {el.description}</p>
            <p>ABV: {el.abv}</p>
            <p>IBU: {el.ibu}</p>
          </>
        );
      })}
    </div>
  );
};

export default BeerItem;
