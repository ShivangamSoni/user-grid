import type { FC } from "react";

import { Info, Main, Wrapper } from "./App.Styled";
import Header from "./Components/Header/Header";
import UserGrid from "./Components/User/UserGrid/UserGrid";
import { useState } from "./Context/StateContext";

const App: FC = () => {
    const state = useState();
    const users = state?.users?.users;

    return (
        <Wrapper>
            <Header />

            <Main>
                {!!users && users.length !== 0 ? (
                    <UserGrid />
                ) : (
                    <Info>
                        Click <strong>Get User</strong> Data to View Users
                    </Info>
                )}
            </Main>
        </Wrapper>
    );
};

export default App;
