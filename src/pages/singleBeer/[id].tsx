import React from "react";
import { GetStaticPropsContext, NextPage } from "next";
import axios, { AxiosResponse } from "axios";
import BeerItem, {
  SingleBeerData,
} from "../../components/SingleBeer/SingleBeer";

const SingleBeer: NextPage<{ singleBeer: SingleBeerData[] }> = ({
  singleBeer,
}) => {
  return <BeerItem data={singleBeer} />;
};

export default SingleBeer;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page = context.params?.id;

  try {
    const { data: singleBeerResult } = await axios.get<
      AxiosResponse<SingleBeerData>
    >(`https://api.punkapi.com/v2/beers/${page}`);
    return {
      props: {
        singleBeer: singleBeerResult,
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
