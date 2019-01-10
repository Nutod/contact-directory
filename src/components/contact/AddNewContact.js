import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 70vw;
    height: 60vh;
    margin: 10rem auto;
    border: 2px solid #eee;
    border-radius: 5px;
    padding: 3rem;
`

export default function AddNewContact() {
    return (
        <Wrapper>
            <form>
                <label htmlFor="fullname">Fullname</label>
                <input type="text" name="fullname" placeholder="Fullname" />
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="password" name="retype-password" placeholder="Re-type" />
            </form>
        </Wrapper>
    )
}