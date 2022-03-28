import styled from "styled-components";

export const SchedulePopup = () => {
  return (
    <>
      <SContainer>
        <p>ポップアップ</p>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 1;
`;
