import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokeSliceAction,
  randomJokeSliceSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  PageTitle,
  ButtonControl,
  RandomJokeText,
  RandomJokeContainer,
  RandomJokeCard,
} from "./styles"

function Homework_17() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    randomJokeSliceSelectors.jokes,
  )
  const getRandomJoke = () => {
    dispatch(randomJokeSliceAction.getJokes())
  }
  const deleteAllJokes = () => {
    dispatch(randomJokeSliceAction.deleteJokes())
  }
  const randomJokes = data.map((randomJoke: RandomJoke) => {
    return (
      <RandomJokeText
        key={randomJoke.id}
      >{`${randomJoke.setup}${randomJoke.punchline}`}</RandomJokeText>
    )
  })
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <PageTitle>Random Joke</PageTitle>
      {data.length > 0 && (
        <ButtonControl>
          <Button name="Delete All Jokes" onClick={deleteAllJokes} />
        </ButtonControl>
      )}
      <RandomJokeCard>
        {data.length > 0 && (
          <RandomJokeContainer>{randomJokes}</RandomJokeContainer>
        )}
        {error && <RandomJokeContainer>{error}</RandomJokeContainer>}
      </RandomJokeCard>
      <ButtonControl>
        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </ButtonControl>
    </PageWrapper>
  )
}

export default Homework_17
