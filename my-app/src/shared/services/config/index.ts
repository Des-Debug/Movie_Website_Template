export interface ApiConfig {
    apiKey: string,
    mainOrigin: string,
    imageOrigin: string,
}

export default class ApiConfiguration implements ApiConfig
{
    private _apiKey: string = "217affce557b6830534beac890cdd3bd";
    private _mainOrigin: string = "https://api.themoviedb.org/3/";
    private _imageOrigin: string = "https://image.tmdb.org/t/p/w500/";
    
    get apiKey(): string {
        return this._apiKey;
    }
    set apiKey(value: string) {
        this._apiKey = value;
    }

    get mainOrigin(): string {
        return this._mainOrigin;
    }
    set mainOrigin(value: string) {
        this._mainOrigin = value;
    }

    get imageOrigin(): string {
        return this._imageOrigin;
    }
}