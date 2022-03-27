import styled from "styled-components";

export const FooterLine = () => {
  return (
    <SContainer>
      <p>　　　フッター</p>
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
  position: absolute;
  bottom: 0;
`;
