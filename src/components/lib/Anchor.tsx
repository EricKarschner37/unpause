interface AnchorProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export const Anchor = ({ children, href, target }: AnchorProps) => (
  <a href={href} target={target}>
    {children}
  </a>
);
