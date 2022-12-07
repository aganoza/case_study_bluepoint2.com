import * as React from "react";
// import classnames from "classnames";
// import { twMerge } from 'tailwind-merge';

const fontSize = {
  h1: "font-display leading-tight text-4xl md:text-5xl",
  h2: "font-display leading-tight text-3xl md:text-4xl",
  h3: "font-display text-2xl font-light md:text-3xl",
  h4: "font-display text-xl font-light md:text-2xl",
  h5: "font-display text-lg font-light md:text-xl",
  h6: "font-display text-lg font-light",
};

function Title({ size, as, className, ...rest }) {
  const Tag = as ?? size;
  return (
    <Tag
      // className={twMerge(classnames(fontSize[size], className))}
      className={fontSize[size]}
      {...rest}
    />
  );
}

function H1(props) {
  return <Title {...props} size="h1" />;
}

function H2(props) {
  return <Title {...props} size="h2" />;
}

function H3(props) {
  return <Title {...props} size="h3" />;
}

function H4(props) {
  return <Title {...props} size="h4" />;
}

function H5(props) {
  return <Title {...props} size="h5" />;
}

function H6(props) {
  return <Title {...props} size="h6" />;
}

function PageHeader(props) {
  const classes =
    // twMerge(
    "font-display text-[30px] font-light";
  // , props.className);
  return <div className={classes}>{props.children}</div>;
}

export { H1, H2, H3, H4, H5, H6, PageHeader };
