import styled from "styled-components";

export const FormMain = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 640px) {
    width: 100%;
    max-width: 28rem;
  }
@media (max-width: 515px) {
  width: 90%;
    max-width: 28rem;
}
p{
      color: red;
      height: 1rem;
    }
  form {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    input {
      display: block;
      padding: 0.375rem;
      border-radius: 0.375rem;
      border-width: 0;
      box-shadow: var(--tw-ring-inset) 0 0 0
        calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      --tw-ring-inset: inset;
      --ring-color: #d1d5db;
      border: 0.3px solid #cecece;
      width: 100%;
      color: #111827;

      @media (min-width: 640px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
        line-height: 1.5rem;
      }
    }


  }

  .inputDiv {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0.8rem;

    label {
      margin: 0.3rem 0;
    }
  }
  .buttonDiv {
    display: flex;
    justify-content: center;
    margin: 0.8rem 0;
    margin-left: 3%;
    width: 100%;

    input{
      border: none;
      background-color: #3c55cb;
      color: white;
      cursor: pointer;
    }
  }
`;
