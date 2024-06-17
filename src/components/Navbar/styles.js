import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: #d9d9d9;
  max-height: 100px;

  padding: 0px 3.125rem;
  @media (max-width: 1150px) {
    /* padding: 0px 10px 0px 3.125rem; */
  }
`
export const LogoContainer = styled.div`
  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
export const SearchForm = styled.form`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 700px;
  height: 30px;
  background-color: #7f7777;
  border-radius: 9px;
  padding: 6px 16px;

  > input {
    background-color: #7f7777;
    border: none;
    color: white;

    &::placeholder {
      color: white;
    }
  }
`
export const UserWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  padding: 8px;
  border-radius: 6px;

  > p {
    font-size: 28px;
    font-weight: 400;
    padding: 5px 0;
    @media (max-width: 500px) {
      display: none;
    }
  }
  > svg {
    font-size: 60px;
    color: #5aa024;
  }
`
