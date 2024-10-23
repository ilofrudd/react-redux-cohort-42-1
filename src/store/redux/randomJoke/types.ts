export interface RandomJoke {
    id: string
    setup: string
    punchline: string;
  }
  
  export interface RandomJokeSliceInitialState {
    jokes: RandomJoke[]
    error: undefined | string
    isLoading: boolean;
  }