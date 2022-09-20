import type { FC } from "react";
import {
    setError,
    setLoading,
    showNotification,
} from "../../Context/SiteState/actions";

import { useDispatch } from "../../Context/StateContext";
import { storeUsers } from "../../Context/UserState/actions";

import {
    Container,
    Link,
    LinksList,
    ListItem,
    Nav,
    Title,
    Wrapper,
} from "./Header.Styled";

const Header: FC = () => {
    const dispatch = useDispatch();

    const getUsers = async () => {
        const showError = () => {
            console.log("Error");
            // @ts-expect-error
            dispatch(setError(true));

            setTimeout(() => {
                // @ts-expect-error
                dispatch(setError(false));
            }, 3000);

            // @ts-expect-error
            dispatch(
                showNotification(
                    "Error",
                    "Error Loading Data Try Again!",
                    "error",
                ),
            );
        };

        // @ts-expect-error
        dispatch(setLoading(true));

        const response = await fetch("https://reqres.in/api/users?page=qw");

        if (response.ok) {
            const data = await response.json();

            if (!!data) {
                // @ts-expect-error
                dispatch(storeUsers(data.data));

                // @ts-expect-error
                dispatch(setLoading(false));

                // @ts-expect-error
                dispatch(
                    showNotification(
                        "Success",
                        "Users Data Loaded Successfully!",
                        "success",
                    ),
                );
            } else {
                showError();
            }
        } else {
            showError();
        }
    };

    return (
        <Wrapper>
            <Container>
                <Title>User Management</Title>

                <Nav>
                    <LinksList>
                        <ListItem>
                            <Link onClick={getUsers}>Get Users</Link>
                        </ListItem>
                    </LinksList>
                </Nav>
            </Container>
        </Wrapper>
    );
};

export default Header;
