import type { FC } from "react";

import {
    Card,
    CardHeader,
    CardAvatar,
    CardFooter,
    CardTitle,
    CardSubTitle,
} from "./UserCard.Styled";

interface Props {
    user: User;
}

const UserCard: FC<Props> = ({ user }) => {
    const { first_name, last_name, email, avatar } = user;
    const fullName = `${first_name} ${last_name}`;

    return (
        <Card>
            <CardHeader>
                <CardAvatar>
                    <img src={avatar} alt={fullName} />
                </CardAvatar>
            </CardHeader>

            <CardFooter>
                <CardTitle>{fullName}</CardTitle>
                <CardSubTitle>{email}</CardSubTitle>
            </CardFooter>
        </Card>
    );
};

export default UserCard;
