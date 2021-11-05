import axios from "axios";
import ApiConfiguration from '../config/index';
import { IMainMovie } from './dto/IMainMovie.Dto'

export default class MovieService{
    private _movieMainOrigin: string = "";
    private _movieApiKey: string = "";
    // private _apiParams: any = {
    //     api_key:this._movieApiKey,
    //     language: "en-US",
    //     page:1,
    // };

    constructor(){
        const apiConfiguration = new ApiConfiguration();
        
        this._movieApiKey = apiConfiguration.apiKey;
        this._movieMainOrigin = apiConfiguration.mainOrigin;
    }

    async GetMoviePopularAsync(): Promise<IMainMovie>{
        const response = await axios.get(this._movieMainOrigin + "movie/popular",{
            params:{
                api_key:this._movieApiKey,
                language: "en-US",
                page:1,
            }})
        return response.data as IMainMovie;
    }

    async GetTopRatedMovieAsync(): Promise<IMainMovie>{
        const response = await axios.get(this._movieMainOrigin + "movie/top_rated",{
            params:{
                api_key:this._movieApiKey,
                language: "en-US",
                page:1,
            }})
        return response.data as IMainMovie;
    }  

    async getUpComingMovieAsync(): Promise<IMainMovie>{
        const response = await axios.get(this._movieMainOrigin + "movie/top_rated",{
            params:{
                api_key:this._movieApiKey,
                language: "en-US",
                page:1,
            }})
        return response.data as IMainMovie;
    }
}