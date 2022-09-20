import type { FC } from "react";

import { useCtxState } from "../../../Context/StateContext";

import { Grid } from "./UserGrid.Styled";
import UserCard from "../UserCard/UserCard";

const UserGrid: FC = () => {
    const state = useCtxState();
    const users = state?.users?.users;

    return (
        <Grid>
            {!!users &&
                users.length > 0 &&
                users.map((user) => <UserCard key={user.id} user={user} />)}
        </Grid>
    );
};

export default UserGrid;
