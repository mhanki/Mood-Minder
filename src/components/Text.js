import styled, { useTheme } from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const title = (theme) => `
  font-size: ${theme.fontSizes.title};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-size: ${theme.fontSizes.label};
  font-weight: ${theme.fontWeights.medium};
`;

const VARIANT = {
  body,
  title,
  label,
  caption,
  error,
};

const TextView = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => VARIANT[variant](theme)}
`;

export const Text = ({variant, children, style={}}) => {
  const theme = useTheme();

  return <TextView variant={variant} theme={theme} style={style}>{children}</TextView>
}

Text.defaultProps = {
  variant: "body",
};