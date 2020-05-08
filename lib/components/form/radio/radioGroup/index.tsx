import * as React from 'react';
import { Container } from './style';

interface IProps {
  onchange?: () => void;
  selectedValue?: string;
  name: string;
  defaultValue?: string;
  children: JSX.Element[];
}

export const RadioGroup: React.FC<IProps> = ({ children, name, defaultValue = null }) => {
  const [selected, setSelected] = React.useState(defaultValue);

  function getValue(value: string): void {
    setSelected(value);
  }

  function renderChildren(): React.ReactNode {
    return React.Children.map(children, (child) => {
      const isSelected = child.props.value === selected ? true : false;
      return React.cloneElement(child as React.ReactElement<any>, { name: name, getValue: getValue, isSelected: isSelected });
    });
  }

  return (
    <Container>
      {renderChildren()}
    </Container>
  );
};
