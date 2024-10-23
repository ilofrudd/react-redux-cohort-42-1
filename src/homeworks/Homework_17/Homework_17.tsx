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
  ButtonContainer,
  JokesText,
  JokesContainer,
  JokesCard,
} from "./styles"

function Homework_17() {
  const dispatch = useAppDispatch()
  const { jokes, error, isLoading } = useAppSelector(
    randomJokeSliceSelectors.jokesData,
  )
  const getRandomJoke = () => {
    dispatch(randomJokeSliceAction.getJokes())
  }
  const deleteAllJokes = () => {
    dispatch(randomJokeSliceAction.deleteJokes())
  }
  const randomJokes = jokes.map((randomJoke: RandomJoke) => {
    return (
      <JokesText
        key={randomJoke.id}
      >{`${randomJoke.setup}${randomJoke.punchline}`}</JokesText>
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
      {jokes.length > 0 && (
        <ButtonContainer>
          <Button name="Delete All Jokes" onClick={deleteAllJokes} />
        </ButtonContainer>
      )}
      <JokesCard>
        {jokes.length > 0 && (
          <JokesContainer>{randomJokes}</JokesContainer>
        )}
        {error && <JokesContainer>{error}</JokesContainer>}
      </JokesCard>
      <ButtonContainer>
        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </ButtonContainer>
    </PageWrapper>
  )
}

export default Homework_17
