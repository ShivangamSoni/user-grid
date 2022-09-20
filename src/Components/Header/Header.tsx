import type { FC } from "react";
import { setError, setLoading } from "../../Context/SiteState/actions";

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

    const getUsers = async () => {
        const showError = () => {
            console.log("Error");
            // @ts-expect-error
            dispatch(setError(true));

            setTimeout(() => {
                // @ts-expect-error
                dispatch(setError(false));
            }, 3000);
        };

        // @ts-expect-error
        dispatch(setLoading(true));

        const response = await fetch("https://reqres.in/api/users?page=qw");

        // @ts-expect-error
        dispatch(setLoading(false));

        if (response.ok) {
            const data = await response.json();

            if (!!data) {
                // @ts-expect-error
                dispatch(storeUsers(data.data));
            } else {
                showError();
            }
        } else {
            showError();
        }
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
