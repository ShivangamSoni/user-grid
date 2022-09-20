import type { FC } from "react";
import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import { useCtxState, useDispatch } from "../../Context/StateContext";
import { hideNotification } from "../../Context/SiteState/actions";

import { Button, Description, Title, Wrapper } from "./Notification.Styled";

const Notification: FC = () => {
    const dispatch = useDispatch();
    const state = useCtxState();
    const { title, description, type } = state?.site?.notification ?? {};

    // @ts-expect-error
    const close = useCallback(() => dispatch(hideNotification()), [dispatch]);

    useEffect(() => {
        if (type !== "error" && type !== "warning") {
            const unSub = setTimeout(close, 2000);
            return () => clearTimeout(unSub);
        }
    }, [type, close]);

    return createPortal(
        <Wrapper type={type ?? "info"}>
            <Button onClick={close}>&times;</Button>
            <Title>{title}</Title>
            {!!description && <Description>{description}</Description>}
        </Wrapper>,
        document.getElementById("notification") as HTMLElement,
    );
};

export default Notification;
