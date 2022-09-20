import type { FC } from "react";

import { Info, Main, Wrapper } from "./App.Styled";
import Header from "./Components/Header/Header";
import UserGrid from "./Components/User/UserGrid/UserGrid";
import { useCtxState } from "./Context/StateContext";

const App: FC = () => {
    const state = useCtxState();
    const users = state?.users?.users;
    const { loading } = state?.site ?? {};

    return (
        <Wrapper>
            <Header />

            <Main>
                {loading ? (
                    <Info>Loading...</Info>
                ) : (
                    <>
                        {!!users && users.length !== 0 ? (
                            <UserGrid />
                        ) : (
                            <Info>
                                Click <strong>Get User</strong> Data to View
                                Users
                            </Info>
                        )}
                    </>
                )}
            </Main>
        </Wrapper>
    );
};

export default App;
