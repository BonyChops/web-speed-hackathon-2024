type Props = {
  color: string;
  height: number;
  Icon: React.ElementType;
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, Icon, width }) => {
  return <Icon style={{ color, height, width }} />;
};
