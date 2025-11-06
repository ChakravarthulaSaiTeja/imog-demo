declare module 'next/link' {
  import { ComponentProps } from 'react';
  
  interface LinkProps extends Omit<ComponentProps<'a'>, 'href'> {
    href: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    prefetch?: boolean;
    locale?: string | false;
  }
  
  export default function Link(props: LinkProps): JSX.Element;
}

