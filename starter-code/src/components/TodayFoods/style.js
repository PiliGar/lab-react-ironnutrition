import styled from "styled-components";

export const StyledList = styled.div`
  margin: 0 0 30px 0;
  padding: 30px;
  background: #f2f2f2;
  border-radius: 5px;
  ul {
    padding: 20px 0;
    li {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
      font-size: 16px;
      margin-bottom: 10px;
      padding: 20px;
      &:nth-child(odd) {
        background: #e8e2e2;
      }
    }
  }
  .total {
    border-top: solid 1px #333333;
    padding: 20px 0;
  }
`;
