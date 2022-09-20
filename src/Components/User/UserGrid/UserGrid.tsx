import { FC } from "react";
import UserCard from "../UserCard/UserCard";
import { Grid } from "./UserGrid.Styled";

const dummyData: User[] = [
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
];

const UserGrid: FC = () => {
    return (
        <Grid>
            {dummyData.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Grid>
    );
};

export default UserGrid;
