import type { FC } from "react";

import { Main, Wrapper } from "./App.Styled";
import Header from "./Components/Header/Header";
import UserGrid from "./Components/User/UserGrid/UserGrid";

const App: FC = () => {
    return (
        <Wrapper>
            <Header />

            <Main>
                <UserGrid />
            </Main>
        </Wrapper>
    );
};

export default App;
