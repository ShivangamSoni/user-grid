import type { FC } from "react";
import { useDispatch } from "../../Context/StateContext";
import { storeUsers } from "../../Context/UserState/actions";

import {
    Link,
    LinksList,
    ListItem,
    Nav,
    Title,
    Wrapper,
} from "./Header.Styled";

const Header: FC = () => {
    const dispatch = useDispatch();

    const getUsers = () => {
        // TODO: Send API Request & Update State
        // @ts-expect-error
        dispatch(
            storeUsers([
                {
                    id: 1,
                    email: "user@test.com",
                    first_name: "Test",
                    last_name: "User",
                    avatar: "https://reqres.in/img/faces/1-image.jpg",
                },
                {
                    id: 2,
                    email: "user@test.com",
                    first_name: "Test",
                    last_name: "User",
                    avatar: "https://reqres.in/img/faces/1-image.jpg",
                },
            ]),
        );
    };

    return (
        <Wrapper>
            <Title>User Management</Title>

            <Nav>
                <LinksList>
                    <ListItem>
                        <Link onClick={getUsers}>Get Users</Link>
                    </ListItem>
                </LinksList>
            </Nav>
        </Wrapper>
    );
};

export default Header;
