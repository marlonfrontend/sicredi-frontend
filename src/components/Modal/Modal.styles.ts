import styled from 'styled-components';

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;

  & .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
  }

  & .wrapper {
    width: 100%;
    position: relative;
    z-index: 50;
    border-radius: 0.375rem;
    background-color: #ffffff;
  }

  & .close-button {
    position: absolute;
    top: 15px;
    right: 0px;
    background-color: transparent;
    border-radius: 9999px;
    border: 1px solid #d2d6dc;
    height: 30px;
    display: flex;
    justify-content: center;
    width: 30px;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: var(--clr-primary);
      color: var(--clr-primary);
    }
  }
`;

export const ModalHeaderStyle = styled.div`
  border-bottom: 1px solid #eee;
  display: flex;
  padding: 20px 20px;
  & .title {
    font-weight: 600;
  }
`
export const ModalContentStyle = styled.div`
  padding: 20px;
`

export const ModalFooterStyle = styled.div`
  border-top: 1px solid #eee;
  padding: 15px 20px;
  display: flex;
  gap: 20px;
`
