import styled from "styled-components";

export const HeaderLine = () => {
  return (
    <SContainer>
      <p>　　　アプリ名</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: 50px;
  border: solid 1px;
  background-color: #67a7cc;
  text-align: left;
`;
