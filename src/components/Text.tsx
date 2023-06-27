import { ReactNode } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components/native';

const defaultTextStyles = (theme: DefaultTheme) => `
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.body};
`;

const title = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.title};
`;

const heading = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.h5};
`;

const error = (theme: DefaultTheme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.label};
  font-weight: ${theme.fontWeights.medium};
`;

const VARIANT = {
  body,
  title,
  heading,
  label,
  caption,
  error,
};

const TextView = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }: { variant: keyof typeof VARIANT, theme: DefaultTheme }) => VARIANT[variant](theme)}
`;

export const Text = ({variant, children, style}: {
  variant: keyof typeof VARIANT,
  children?: ReactNode,
  style?: {}
}) => {
  const theme = useTheme();
  return <TextView variant={variant} theme={theme} style={style}>{children}</TextView>
}

Text.defaultProps = {
  variant: "body"
};