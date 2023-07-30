import type {CSS} from "../theme/stitches.config";

import React, {useEffect, useRef, useState} from "react";

import withDefaults from "../utils/with-defaults";
import useClickAway from "../use-click-away";
import {Placement, TriggerTypes} from "../utils/prop-types";

import TooltipContent, {TooltipContentProps} from "./tooltip-content";
import {StyledTooltipTrigger, TooltipContentVariantsProps} from "./tooltip.styles";

export type TooltipOnVisibleChange = (visible: boolean) => void;

interface Props {
  content: string | React.ReactNode;
  placement?: Placement;
  visible?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  initialVisible?: boolean;
  animated?: boolean;
  hideArrow?: boolean;
  trigger?: TriggerTypes;
  enterDelay?: number;
  leaveDelay?: number;
  offset?: number;
  className?: string;
  keepMounted?: boolean;
  isDisabled?: boolean;
  portalClassName?: string;
  onClick?: () => void;
  onVisibleChange?: TooltipOnVisibleChange;
  as?: keyof JSX.IntrinsicElements;
  triggerCss?: CSS;
  children?: React.ReactNode;
}

const defaultProps = {
  initialVisible: false,
  hideArrow: false,
  animated: true,
  shadow: true,
  rounded: false,
  keepMounted: false,
  isDisabled: false,
  trigger: "hover" as TriggerTypes,
  enterDelay: 0,
  leaveDelay: 0,
  className: "",
  portalClassName: "",
  onVisibleChange: (() => {}) as TooltipOnVisibleChange,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type TooltipProps = Props &
  typeof defaultProps &
  NativeAttrs &
  Pick<TooltipContentVariantsProps, "color" | "contentColor"> &
  Pick<TooltipContentProps, "css">;

const Tooltip: React.FC<TooltipProps> = ({
  children,
  initialVisible,
  content,
  offset,
  placement,
  portalClassName,
  enterDelay,
  leaveDelay,
  trigger,
  rounded,
  animated,
  shadow,
  className,
  color,
  contentColor,
  onVisibleChange,
  hideArrow,
  css,
  triggerCss,
  onClick,
  keepMounted,
  visible: customVisible,
  isDisabled,
  ...props
}) => {
  const timer = useRef<number>();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(initialVisible);

  const contentProps = {
    animated,
    visible,
    css,
    shadow,
    offset,
    placement,
    rounded,
    color,
    contentColor,
    hideArrow,
    parent: ref,
    className: portalClassName,
  };

  const changeVisible = (nextState: boolean) => {
    const clear = () => {
      clearTimeout(timer.current);
      timer.current = undefined;
    };
    const handler = (nextState: boolean) => {
      setVisible(nextState);
      onVisibleChange(nextState);
      clear();
    };

    clear();
    if (nextState) {
      timer.current = window.setTimeout(() => handler(true), enterDelay);

      return;
    }
    timer.current = window.setTimeout(() => handler(false), leaveDelay);
  };

  const mouseEventHandler = (next: boolean) => {
    trigger === "hover" && changeVisible(next);
  };

  const clickEventHandler = () => {
    trigger === "click" && changeVisible(!visible);
    onClick?.();
  };

  useClickAway(ref, () => trigger === "click" && !keepMounted && changeVisible(false));

  useEffect(() => {
    if (customVisible === undefined) return;
    changeVisible(customVisible);
  }, [customVisible]);

  return (
    <StyledTooltipTrigger
      ref={ref}
      className={`nextui-tooltip-button ${className}`}
      css={triggerCss}
      role="button"
      tabIndex={-1}
      onBlur={() => mouseEventHandler(false)}
      onClickCapture={clickEventHandler}
      onFocus={() => mouseEventHandler(true)}
      onKeyUp={() => mouseEventHandler(true)}
      onMouseEnter={() => mouseEventHandler(true)}
      onMouseLeave={() => mouseEventHandler(false)}
      {...props}
    >
      {children}
      {content && !isDisabled ? <TooltipContent {...contentProps}>{content}</TooltipContent> : null}
    </StyledTooltipTrigger>
  );
};

Tooltip.toString = () => ".nextui-tooltip";

export default withDefaults(Tooltip, defaultProps);
