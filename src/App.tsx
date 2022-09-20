import type { FC } from "react";

import { Wrapper } from "./App.Styled";
import Header from "./Components/Header/Header";

const App: FC = () => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
};

export default App;
