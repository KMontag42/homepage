import { ReactNode } from "react";

type TypographyProps = Readonly<{
  children: ReactNode;
}>;

export function TypographyH1(props: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}

export function TypographyH4(props: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

export function TypographyP(props: TypographyProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
  );
}

export function TypographyLead(props: TypographyProps) {
  return <p className="text-xl text-muted-foreground">{props.children}</p>;
}

export function TypographyBlockquote(props: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  );
}
