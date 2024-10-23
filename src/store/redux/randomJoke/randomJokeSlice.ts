import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"

import { RandomJokeSliceInitialState } from "./types"

const randomJokeInitialState: RandomJokeSliceInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    deleteJokes: create.reducer((state: RandomJokeSliceInitialState) => {
      state.data = [],
      state.error = undefined
    }),
    getJokes: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const RANDOM_JOKE_API_URL: string =
          "https://official-joke-api.appspot.com/random_joke"

        const response = await fetch(RANDOM_JOKE_API_URL)

        const result = await response.json()
        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: RandomJokeSliceInitialState) => {
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: RandomJokeSliceInitialState, action) => {
          state.isLoading = false
          state.data = [
            ...state.data,
            {
              id: v4(),
              setup: action.payload.setup,
              punchline: action.payload.punchline,
            },
          ]
        },
        rejected: (state: RandomJokeSliceInitialState) => {
          state.error = "Some Network Error"
          state.isLoading = false
        },
      },
    ),
  }),
  selectors: {
    jokes: (state: RandomJokeSliceInitialState) => state,
  },
})

export const randomJokeSliceAction = randomJokeSlice.actions
export const randomJokeSliceSelectors = randomJokeSlice.selectors
