import type {CSS} from "../theme/stitches.config";

import React from "react";

import withDefaults from "../utils/with-defaults";

import StyledCol, {ColVariantsProps} from "./col.styles";

interface Props {
  span?: number;
  offset?: number;
  css?: CSS;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const defaultProps = {
  span: 12,
  offset: 0,
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type ColProps = Props & typeof defaultProps & ColVariantsProps & NativeAttrs;

const Col: React.FC<ColProps> = ({children, span, offset, css, ...props}) => {
  return (
    <StyledCol
      css={{
        width: `${(100 / 12) * span}%`,
        marginLeft: `${(100 / 12) * offset}%`,
        ...css,
      }}
      {...props}
    >
      {children}
    </StyledCol>
  );
};

Col.toString = () => ".nextui-column";

const MemoCol = React.memo(Col);

export default withDefaults(MemoCol, defaultProps);
