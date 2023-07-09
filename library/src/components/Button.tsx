import { Badge } from '@mui/material';

import { css } from '@emotion/react';

type IButtonProps = {
  children?: string;
  title?: string;
};

export const Button = (props: IButtonProps) => {
  const { children, title = 'Simple Button' } = props;
  return (
    <Badge badgeContent={4} color="primary">
      <button
        title={title}
        css={css`
          background: darkcyan;
          color: azure;
          padding: 2px 5px;
          border-radius: 6px;
          cursor: pointer;
          user-select: none;
        `}
      >
        <div>{children}</div>
      </button>
    </Badge>
  );
};
