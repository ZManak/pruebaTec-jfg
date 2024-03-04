import { css } from "lit";
export const styles = css`
  body,
  html {
    font-family: "Open Sans", sans-serif;
    margin: 0px;
    padding: 0px;
  }
  h1 {
    font-family: "Open Sans", sans-serif;
    color: white;
    background-color: teal;
    margin: 0px;
    padding: 0.5rem;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: right;
    width: 100%;
  }
  ul {
    font-family: "Open Sans", sans-serif;
    margin: 0px;
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: row;
  }
  ul :hover {
    border: 1px solid green;
  }
`;
