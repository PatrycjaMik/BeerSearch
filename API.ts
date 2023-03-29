import Axios, { AxiosError, AxiosResponse} from "axios";
import { SingleBeerData } from "src/components/SingleBeer/SingleBeer";

export class API {
static getBeer = async (
    page:number
  ) => {
    try {
      const res = await Axios.get<AxiosResponse<SingleBeerData>>(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`,
      );
      return res.data;
      
    } catch (e) {
       errorHandler(e as AxiosError);
    }
  };
}

function errorHandler(arg0: AxiosError<unknown, any>) {
    throw new Error("Function not implemented.");
}
