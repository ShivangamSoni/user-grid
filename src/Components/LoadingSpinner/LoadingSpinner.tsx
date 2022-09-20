import type { FC } from "react";

import { Spinner, Circle } from "./LoadingSpinner.Styled";

const LoadingSpinner: FC = () => {
    return (
        <Spinner>
            {
                /* @ts-expect-error */
                [...Array(12).keys()].map((id) => (
                    <Circle key={id} idx={id} />
                ))
            }
        </Spinner>
    );
};

export default LoadingSpinner;
