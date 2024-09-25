export interface ButtonProps {
  onClick: () => void;
  children?: string;
}

export interface ButtonWithLabelProps {
  onClick: () => void;
  children: string;
  label: string;
}

export interface UserProps {
  name?: string;
  username: string;
  phone: string;
  website: string;
}

export interface FormProps {
  onUserAddition: (user: UserProps) => void; // Принимаем функцию для обновления состояния верхнего компонента
}

export interface TabsProps {
  onChange: (tab: boolean) => void;
}
