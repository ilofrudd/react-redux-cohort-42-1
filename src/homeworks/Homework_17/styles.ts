import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  gap: 30px;
  background-color: ${colors.PRIMARY};
`

export const PageTitle = styled.p`
  color: #1f27f5;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  width: 400px;
`
export const JokesContainer = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`
export const JokesText = styled.li`
  font-size: 30px;
  color: ${colors.PRIMARY};
  text-align: justify;
`

export const JokesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
`