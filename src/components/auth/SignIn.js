import React from "react";
import styled from "styled-components";

// background: url('/assets/background.jpg') no-repeat 100% -5rem;

const SignInWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CTAWrapper = styled.div`
  margin-left: 2rem;
`;

// TODO: DRY up this part
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin: 10rem 5rem;

  label {
    display: block;
    margin-bottom: 5px;
  }

  fieldset {
    margin-bottom: 6px;
    width: 30vw;
  }

  input {
    margin-bottom: 8px;
    width: 30vw;
    border: none;
    border-bottom: 2px;
    outline: none;
  }
`;

export default function SignIn() {
  return (
    <SignInWrapper>
      <HeaderWrapper>
        <div>Logo</div>
        <div>Navigation</div>
      </HeaderWrapper>
      <ContentWrapper>
        <form>
          <fieldset>Sign In</fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <br />
          <p style={{ textAlign: "center" }}>
            By signing up, you agree with our Terms & Condition, and read our
            Privacy Policy
          </p>
        </form>
        <CTAWrapper>
          <h1>Be More.</h1>
          <p style={{ textAlign: "center" }}>
            All your contacts from all your accounts In One Place
          </p>
        </CTAWrapper>
      </ContentWrapper>
    </SignInWrapper>
  );
}
