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
