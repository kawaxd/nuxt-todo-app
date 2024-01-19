export type Task = {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NavigationRoute = {
  id: number | string;
  text: string;
  route: string;
  icon?: string;
};

export type ButtonType = "button" | "submit" | "reset" | undefined;

export type FormVariant = "create" | "update";
