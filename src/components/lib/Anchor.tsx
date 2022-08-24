interface AnchorProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export const Anchor = ({ children, href, target, ...props }: AnchorProps) => (
  <a href={href} target={target} {...props}>
    {children}
  </a>
);
