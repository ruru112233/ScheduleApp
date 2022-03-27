import styled from "styled-components";

export const SchedulePopup = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <Overlay>
          <SContent>
            <p>ポップアップ</p>
          </SContent>
        </Overlay>
      ) : null}
    </>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 1;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 100);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SContent = styled.div`
  z-index: 1;
  width: 50%;
  padding: 1em;
  background-color: #fff;
`;
