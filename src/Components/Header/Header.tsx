import type { FC } from "react";

import {
    Link,
    LinksList,
    ListItem,
    Nav,
    Title,
    Wrapper,
} from "./Header.Styled";

const Header: FC = () => {
    return (
        <Wrapper>
            <Title>User Management</Title>

            <Nav>
                <LinksList>
                    <ListItem>
                        <Link>Get Users</Link>
                    </ListItem>
                </LinksList>
            </Nav>
        </Wrapper>
    );
};

export default Header;
