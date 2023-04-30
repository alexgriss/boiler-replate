import { SAppWrapper } from './styled';

interface IAppWrapper {
  children: React.ReactNode;
}

export const AppWrapper = ({ children }: IAppWrapper) => {
  return <SAppWrapper>{children}</SAppWrapper>;
};
