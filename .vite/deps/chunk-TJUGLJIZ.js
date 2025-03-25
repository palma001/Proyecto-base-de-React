import {
  $337b884510726a0d$export$c6fdb837b070b4ff,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $49c51c25361d4cd2$export$ee0f7cc6afcd1c18,
  $6179b936705e76d3$export$ae780daf29e6d456,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $9daab02d461809db$export$683480f191c0e3ea,
  $f645667febf57a63$export$4c014de7c8940b4c,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  createContext2,
  forwardRef,
  mapPropsVariants,
  pickChildren,
  useDOMRef,
  useProviderContext
} from "./chunk-N43JYRTR.js";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m
} from "./chunk-OPGLLIYE.js";
import {
  require_jsx_runtime
} from "./chunk-UTFF5B2L.js";
import {
  clsx,
  dataAttr,
  navbar,
  objectToDeps
} from "./chunk-H7CGNULQ.js";
import {
  require_react
} from "./chunk-52VOLQIH.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/@heroui/navbar/dist/chunk-IGERPFKH.mjs
var [NavbarProvider, useNavbarContext] = createContext2({
  name: "NavbarContext",
  strict: true,
  errorMessage: "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"
});

// node_modules/@heroui/navbar/dist/chunk-UJDFI5KD.mjs
var menuVariants = {
  enter: {
    height: "calc(100vh - var(--navbar-height))",
    transition: {
      duration: 0.3,
      easings: "easeOut"
    }
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.25,
      easings: "easeIn"
    }
  }
};

// node_modules/@heroui/navbar/dist/chunk-GGZP2VLD.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var domAnimation2 = () => import("./dist-NAOJD4DY.js").then((res) => res.default);
var NavbarMenu = forwardRef((props, ref) => {
  var _a, _b;
  const { className, children, portalContainer, motionProps, style, ...otherProps } = props;
  const domRef = useDOMRef(ref);
  const { slots, isMenuOpen, height, disableAnimation, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.menu, className);
  if (disableAnimation) {
    if (!isMenuOpen) return null;
    return (0, import_jsx_runtime.jsx)($337b884510726a0d$export$c6fdb837b070b4ff, { portalContainer, children: (0, import_jsx_runtime.jsx)(
      "ul",
      {
        ref: domRef,
        className: (_a = slots.menu) == null ? void 0 : _a.call(slots, { class: styles }),
        "data-open": dataAttr(isMenuOpen),
        style: {
          // @ts-expect-error
          "--navbar-height": typeof height === "number" ? `${height}px` : height
        },
        ...otherProps,
        children
      }
    ) });
  }
  return (0, import_jsx_runtime.jsx)(AnimatePresence, { mode: "wait", children: isMenuOpen ? (0, import_jsx_runtime.jsx)($337b884510726a0d$export$c6fdb837b070b4ff, { portalContainer, children: (0, import_jsx_runtime.jsx)(LazyMotion, { features: domAnimation2, children: (0, import_jsx_runtime.jsx)(
    m.ul,
    {
      ref: domRef,
      layoutScroll: true,
      animate: "enter",
      className: (_b = slots.menu) == null ? void 0 : _b.call(slots, { class: styles }),
      "data-open": dataAttr(isMenuOpen),
      exit: "exit",
      initial: "exit",
      style: {
        // @ts-expect-error
        "--navbar-height": typeof height === "number" ? `${height}px` : height,
        ...style
      },
      variants: menuVariants,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(motionProps, otherProps),
      children
    }
  ) }) }) : null });
});
NavbarMenu.displayName = "HeroUI.NavbarMenu";
var navbar_menu_default = NavbarMenu;

// node_modules/@heroui/framer-utils/dist/chunk-54L3M2TC.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@heroui/use-measure/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function useMeasure() {
  const [dimensions, setDimensions] = (0, import_react.useState)({
    width: null,
    height: null
  });
  const previousObserver = (0, import_react.useRef)(null);
  const customRef = (0, import_react.useCallback)((node) => {
    if (previousObserver.current) {
      previousObserver.current.disconnect();
      previousObserver.current = null;
    }
    if ((node == null ? void 0 : node.nodeType) === Node.ELEMENT_NODE) {
      const observer = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
          setDimensions({ width, height });
        }
      });
      observer.observe(node);
      previousObserver.current = observer;
    }
  }, []);
  return [customRef, dimensions];
}

// node_modules/@heroui/framer-utils/dist/chunk-54L3M2TC.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var ResizablePanel = (0, import_react2.forwardRef)(
  (originalProps, ref) => {
    const { children, ...props } = originalProps;
    let [measureRef, bounds] = useMeasure();
    return (0, import_jsx_runtime2.jsx)(LazyMotion, { features: domAnimation, children: (0, import_jsx_runtime2.jsx)(
      m.div,
      {
        ref,
        animate: {
          width: bounds.width && (bounds == null ? void 0 : bounds.width) > 0 ? bounds.width : "auto",
          height: bounds.height && bounds.height > 0 ? bounds.height : "auto"
        },
        children: (0, import_jsx_runtime2.jsx)("div", { ref: measureRef, ...props, children })
      }
    ) });
  }
);
ResizablePanel.displayName = "HeroUI - ResizablePanel";

// node_modules/@heroui/framer-utils/dist/chunk-736YWA4T.mjs
var TRANSITION_EASINGS = {
  ease: [0.36, 0.66, 0.4, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.155, 1.105, 0.295, 1.12],
  springOut: [0.57, -0.15, 0.62, 0.07],
  softSpring: [0.16, 1.11, 0.3, 1.02]
};
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var TRANSITION_VARIANTS = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.2
      }
    },
    exit: {
      transform: "scale(0.85)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.15
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.96)",
      transition: {
        type: "easeOut",
        bounce: 0,
        duration: 0.15
      }
    }
  },
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  scaleFadeIn: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: TRANSITION_EASINGS.easeIn
      }
    },
    exit: {
      transform: "scale(0.95)",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: TRANSITION_EASINGS.easeOut
      }
    }
  },
  scaleInOut: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      transform: "scale(1.03)",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        },
        opacity: {
          easings: "ease",
          duration: 0.4
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        easings: "ease",
        duration: 0.3
      }
    }
  }
};

// node_modules/@heroui/navbar/dist/chunk-RRUQIZLR.mjs
var hideOnScrollVariants = {
  visible: {
    y: 0,
    transition: {
      ease: TRANSITION_EASINGS.easeOut
    }
  },
  hidden: {
    y: "-100%",
    transition: {
      ease: TRANSITION_EASINGS.easeIn
    }
  }
};

// node_modules/@heroui/navbar/dist/chunk-LTNGAWBY.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@heroui/use-scroll-position/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var isBrowser = typeof window !== "undefined";
function getScrollPosition(element) {
  if (!isBrowser) return { x: 0, y: 0 };
  if (!element) {
    return { x: window.scrollX, y: window.scrollY };
  }
  return { x: element.scrollLeft, y: element.scrollTop };
}
var useScrollPosition = (props) => {
  const { elementRef, delay = 30, callback, isEnabled } = props;
  const position = (0, import_react3.useRef)(
    isEnabled ? getScrollPosition(elementRef == null ? void 0 : elementRef.current) : { x: 0, y: 0 }
  );
  const throttleTimeout = (0, import_react3.useRef)(null);
  const handler = (0, import_react3.useCallback)(() => {
    const currPos = getScrollPosition(elementRef == null ? void 0 : elementRef.current);
    if (typeof callback === "function") {
      callback({ prevPos: position.current, currPos });
    }
    position.current = currPos;
    throttleTimeout.current = null;
  }, [callback, elementRef]);
  (0, import_react3.useEffect)(() => {
    if (!isEnabled) return;
    const handleScroll = () => {
      if (delay) {
        if (throttleTimeout.current) {
          clearTimeout(throttleTimeout.current);
        }
        throttleTimeout.current = setTimeout(handler, delay);
      } else {
        handler();
      }
    };
    const target = (elementRef == null ? void 0 : elementRef.current) || window;
    target.addEventListener("scroll", handleScroll);
    return () => {
      target.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
        throttleTimeout.current = null;
      }
    };
  }, [elementRef == null ? void 0 : elementRef.current, delay, handler, isEnabled]);
  return position.current;
};

// node_modules/@heroui/navbar/dist/chunk-LTNGAWBY.mjs
function useNavbar(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, navbar.variantKeys);
  const {
    ref,
    as,
    parentRef,
    height = "4rem",
    shouldHideOnScroll = false,
    disableScrollHandler = false,
    shouldBlockScroll = true,
    onScrollPositionChange,
    isMenuOpen: isMenuOpenProp,
    isMenuDefaultOpen,
    onMenuOpenChange = () => {
    },
    motionProps,
    className,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "nav";
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const domRef = useDOMRef(ref);
  const prevWidth = (0, import_react4.useRef)(0);
  const navHeight = (0, import_react4.useRef)(0);
  const [isHidden, setIsHidden] = (0, import_react4.useState)(false);
  const handleMenuOpenChange = (0, import_react4.useCallback)(
    (isOpen) => {
      onMenuOpenChange(isOpen || false);
    },
    [onMenuOpenChange]
  );
  const [isMenuOpen, setIsMenuOpen] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(
    isMenuOpenProp,
    isMenuDefaultOpen != null ? isMenuDefaultOpen : false,
    handleMenuOpenChange
  );
  const updateWidth = () => {
    if (domRef.current) {
      const width = domRef.current.offsetWidth;
      if (width !== prevWidth.current) {
        prevWidth.current = width;
      }
    }
  };
  $49c51c25361d4cd2$export$ee0f7cc6afcd1c18({
    isDisabled: !(shouldBlockScroll && isMenuOpen)
  });
  $9daab02d461809db$export$683480f191c0e3ea({
    ref: domRef,
    onResize: () => {
      var _a2;
      const currentWidth = (_a2 = domRef.current) == null ? void 0 : _a2.offsetWidth;
      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
      if (currentWidth && currentWidth + scrollWidth == prevWidth.current) {
        return;
      }
      if (currentWidth !== prevWidth.current) {
        updateWidth();
        setIsMenuOpen(false);
      }
    }
  });
  (0, import_react4.useEffect)(() => {
    var _a2;
    updateWidth();
    navHeight.current = ((_a2 = domRef.current) == null ? void 0 : _a2.offsetHeight) || 0;
  }, []);
  const slots = (0, import_react4.useMemo)(
    () => navbar({
      ...variantProps,
      disableAnimation,
      hideOnScroll: shouldHideOnScroll
    }),
    [objectToDeps(variantProps), disableAnimation, shouldHideOnScroll]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  useScrollPosition({
    elementRef: parentRef,
    isEnabled: shouldHideOnScroll || !disableScrollHandler,
    callback: ({ prevPos, currPos }) => {
      onScrollPositionChange == null ? void 0 : onScrollPositionChange(currPos.y);
      if (shouldHideOnScroll) {
        setIsHidden((prev) => {
          const next = currPos.y > prevPos.y && currPos.y > navHeight.current;
          return next !== prev ? next : prev;
        });
      }
    }
  });
  const getBaseProps = (props2 = {}) => ({
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, props2),
    "data-hidden": dataAttr(isHidden),
    "data-menu-open": dataAttr(isMenuOpen),
    ref: domRef,
    className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) }),
    style: {
      "--navbar-height": typeof height === "number" ? `${height}px` : height,
      ...otherProps == null ? void 0 : otherProps.style,
      ...props2 == null ? void 0 : props2.style
    }
  });
  const getWrapperProps = (props2 = {}) => ({
    ...props2,
    "data-menu-open": dataAttr(isMenuOpen),
    className: slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
  });
  return {
    Component,
    slots,
    domRef,
    height,
    isHidden,
    disableAnimation,
    shouldHideOnScroll,
    isMenuOpen,
    classNames,
    setIsMenuOpen,
    motionProps,
    getBaseProps,
    getWrapperProps
  };
}

// node_modules/@heroui/navbar/dist/chunk-63OA3RRZ.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var domAnimation3 = () => import("./dist-NAOJD4DY.js").then((res) => res.default);
var Navbar = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  const context = useNavbar({ ...otherProps, ref });
  const Component = context.Component;
  const [childrenWithoutMenu, menu] = pickChildren(children, navbar_menu_default);
  const content = (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    (0, import_jsx_runtime3.jsx)("header", { ...context.getWrapperProps(), children: childrenWithoutMenu }),
    menu
  ] });
  return (0, import_jsx_runtime3.jsx)(NavbarProvider, { value: context, children: context.shouldHideOnScroll ? (0, import_jsx_runtime3.jsx)(LazyMotion, { features: domAnimation3, children: (0, import_jsx_runtime3.jsx)(
    m.nav,
    {
      animate: context.isHidden ? "hidden" : "visible",
      initial: false,
      variants: hideOnScrollVariants,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(context.getBaseProps(), context.motionProps),
      children: content
    }
  ) }) : (0, import_jsx_runtime3.jsx)(Component, { ...context.getBaseProps(), children: content }) });
});
Navbar.displayName = "HeroUI.Navbar";
var navbar_default = Navbar;

// node_modules/@heroui/navbar/dist/chunk-4DMBHLGU.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var NavbarBrand = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, ...otherProps } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.brand, className);
  return (0, import_jsx_runtime4.jsx)(Component, { ref: domRef, className: (_a = slots.brand) == null ? void 0 : _a.call(slots, { class: styles }), ...otherProps, children });
});
NavbarBrand.displayName = "HeroUI.NavbarBrand";
var navbar_brand_default = NavbarBrand;

// node_modules/@heroui/navbar/dist/chunk-UYTDJMPP.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var NavbarContent = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, justify = "start", ...otherProps } = props;
  const Component = as || "ul";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.content, className);
  return (0, import_jsx_runtime5.jsx)(
    Component,
    {
      ref: domRef,
      className: (_a = slots.content) == null ? void 0 : _a.call(slots, { class: styles }),
      "data-justify": justify,
      ...otherProps,
      children
    }
  );
});
NavbarContent.displayName = "HeroUI.NavbarContent";
var navbar_content_default = NavbarContent;

// node_modules/@heroui/navbar/dist/chunk-5LMKFFWA.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var NavbarItem = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, isActive, ...otherProps } = props;
  const Component = as || "li";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.item, className);
  return (0, import_jsx_runtime6.jsx)(
    Component,
    {
      ref: domRef,
      className: (_a = slots.item) == null ? void 0 : _a.call(slots, { class: styles }),
      "data-active": dataAttr(isActive),
      ...otherProps,
      children
    }
  );
});
NavbarItem.displayName = "HeroUI.NavbarItem";
var navbar_item_default = NavbarItem;

// node_modules/@heroui/navbar/dist/chunk-W4R67QGI.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var NavbarMenuItem = forwardRef((props, ref) => {
  var _a;
  const { className, children, isActive, ...otherProps } = props;
  const domRef = useDOMRef(ref);
  const { slots, isMenuOpen, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.menuItem, className);
  return (0, import_jsx_runtime7.jsx)(
    "li",
    {
      ref: domRef,
      className: (_a = slots.menuItem) == null ? void 0 : _a.call(slots, { class: styles }),
      "data-active": dataAttr(isActive),
      "data-open": dataAttr(isMenuOpen),
      ...otherProps,
      children
    }
  );
});
NavbarMenuItem.displayName = "HeroUI.NavbarMenuItem";
var navbar_menu_item_default = NavbarMenuItem;

// node_modules/@react-aria/button/dist/useButton.mjs
function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressUp,
    onPressChange,
    preventFocusOnPress,
    allowFocusWhenDisabled,
    // @ts-ignore
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button"
  } = props;
  let additionalProps;
  if (elementType === "button") additionalProps = {
    type,
    disabled: isDisabled
  };
  else additionalProps = {
    role: "button",
    href: elementType === "a" && !isDisabled ? href : void 0,
    target: elementType === "a" ? target : void 0,
    type: elementType === "input" ? type : void 0,
    disabled: elementType === "input" ? isDisabled : void 0,
    "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
    rel: elementType === "a" ? rel : void 0
  };
  let { pressProps, isPressed } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    onPressUp,
    isDisabled,
    preventFocusOnPress,
    ref
  });
  let { focusableProps } = (0, $f645667febf57a63$export$4c014de7c8940b4c)(props, ref);
  if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  let buttonProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(focusableProps, pressProps, (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  }));
  return {
    isPressed,
    buttonProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      "aria-current": props["aria-current"],
      onClick: (e) => {
        if (deprecatedOnClick) {
          deprecatedOnClick(e);
          console.warn("onClick is deprecated, please use onPress");
        }
      }
    })
  };
}

// node_modules/@react-aria/button/dist/useToggleButton.mjs
function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
  const { isSelected } = state;
  const { isPressed, buttonProps } = (0, $701a24aa0da5b062$export$ea18c227d4417cc3)({
    ...props,
    onPress: (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(state.toggle, props.onPress)
  }, ref);
  return {
    isPressed,
    isSelected,
    isDisabled: props.isDisabled || false,
    buttonProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(buttonProps, {
      "aria-pressed": isSelected
    })
  };
}

// node_modules/@react-aria/toolbar/dist/useToolbar.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-stately/toggle/dist/useToggleState.mjs
function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
  let { isReadOnly } = props;
  let [isSelected, setSelected] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.isSelected, props.defaultSelected || false, props.onChange);
  function updateSelected(value) {
    if (!isReadOnly) setSelected(value);
  }
  function toggleState() {
    if (!isReadOnly) setSelected(!isSelected);
  }
  return {
    isSelected,
    setSelected: updateSelected,
    toggle: toggleState
  };
}

// node_modules/@react-stately/toggle/dist/useToggleGroupState.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@heroui/navbar/dist/chunk-M6Y4IXO7.mjs
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var NavbarMenuToggle = forwardRef((props, ref) => {
  var _a;
  const {
    as,
    icon,
    className,
    onChange,
    autoFocus,
    srOnlyText: srOnlyTextProp,
    ...otherProps
  } = props;
  const Component = as || "button";
  const domRef = useDOMRef(ref);
  const { slots, classNames, isMenuOpen, setIsMenuOpen } = useNavbarContext();
  const handleChange = (isOpen) => {
    onChange == null ? void 0 : onChange(isOpen);
    setIsMenuOpen(isOpen);
  };
  const state = $3017fa7ffdddec74$export$8042c6c013fd5226({ ...otherProps, isSelected: isMenuOpen, onChange: handleChange });
  const { buttonProps, isPressed } = $55f54f7887471b58$export$51e84d46ca0bc451(props, state, domRef);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus });
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({});
  const toggleStyles = clsx(classNames == null ? void 0 : classNames.toggle, className);
  const child = (0, import_react7.useMemo)(() => {
    if (typeof icon === "function") {
      return icon(isMenuOpen != null ? isMenuOpen : false);
    }
    return icon || (0, import_jsx_runtime8.jsx)("span", { className: slots.toggleIcon({ class: classNames == null ? void 0 : classNames.toggleIcon }) });
  }, [icon, isMenuOpen, slots.toggleIcon, classNames == null ? void 0 : classNames.toggleIcon]);
  const srOnlyText = (0, import_react7.useMemo)(() => {
    if (srOnlyTextProp) {
      return srOnlyTextProp;
    }
    return state.isSelected ? "close navigation menu" : "open navigation menu";
  }, [srOnlyTextProp, isMenuOpen]);
  return (0, import_jsx_runtime8.jsxs)(
    Component,
    {
      ref: domRef,
      className: (_a = slots.toggle) == null ? void 0 : _a.call(slots, { class: toggleStyles }),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-open": dataAttr(isMenuOpen),
      "data-pressed": dataAttr(isPressed),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(buttonProps, focusProps, hoverProps, otherProps),
      children: [
        (0, import_jsx_runtime8.jsx)("span", { className: slots.srOnly(), children: srOnlyText }),
        child
      ]
    }
  );
});
NavbarMenuToggle.displayName = "HeroUI.NavbarMenuToggle";
var navbar_menu_toggle_default = NavbarMenuToggle;

export {
  NavbarProvider,
  useNavbarContext,
  navbar_menu_default,
  ResizablePanel,
  TRANSITION_EASINGS,
  TRANSITION_VARIANTS,
  useNavbar,
  navbar_default,
  navbar_brand_default,
  navbar_content_default,
  navbar_item_default,
  navbar_menu_item_default,
  $701a24aa0da5b062$export$ea18c227d4417cc3,
  $3017fa7ffdddec74$export$8042c6c013fd5226,
  navbar_menu_toggle_default
};
//# sourceMappingURL=chunk-TJUGLJIZ.js.map
