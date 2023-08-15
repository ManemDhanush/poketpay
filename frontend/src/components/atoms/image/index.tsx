export interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

export const Image = ({ ...props }: ImageProps) => {
  return <img {...props} />;
};
