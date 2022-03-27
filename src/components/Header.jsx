import styled from "styled-components";

export const HeaderLine = () => {
  return (
    <SContainer>
      <p>　　　スケジュールアプリ</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: 50px;
  border: solid 1px;
  background-color: #0072bc;
  text-align: left;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 1;
`;
