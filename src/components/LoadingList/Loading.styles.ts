import styled from 'styled-components'

export const LoadingListStyle = styled.div`
  height: 90px;
  border-radius: 0.375rem;
  background-color: #ccc;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }
`
