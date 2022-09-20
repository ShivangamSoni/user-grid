import type { FC } from "react";

import { useCtxState } from "./Context/StateContext";

import { Info, Main, Wrapper } from "./App.Styled";

import Header from "./Components/Header/Header";
import UserGrid from "./Components/User/UserGrid/UserGrid";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Notification from "./Components/Notification/Notification";

const App: FC = () => {
    const state = useCtxState();
    const users = state?.users?.users;
    const { loading } = state?.site ?? {};
    const { visible: notificationVisible } = state?.site?.notification ?? {};

    return (
        <Wrapper>
            <Header />

            <Main>
                {loading ? (
                    <LoadingSpinner />
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

            {notificationVisible && <Notification />}
        </Wrapper>
    );
};

export default App;
