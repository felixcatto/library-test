import { css } from '@emotion/react';
import { Button, sayHi, solo } from '@felixcatto/ui322';
import { Rating } from '@mui/material';
// import { Button } from 'ui/components';

export const App = () => {
  console.log(solo);

  return (
    <div style={{ width: 600, margin: 'auto', padding: 15 }}>
      <div css={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <div css={s.title} onClick={sayHi}>
          Hello world!
        </div>
        <div css={{ marginLeft: 10 }}>
          <Rating defaultValue={4} />
        </div>
      </div>

      <Button>Hi bro</Button>
    </div>
  );
};

const s = {
  title: css`
    color: darkcyan;
    cursor: pointer;
    user-select: none;
  `,

  button: css`
    color: lime;
    background-color: chocolate;
    margin-top: 14px;
  `,
};
