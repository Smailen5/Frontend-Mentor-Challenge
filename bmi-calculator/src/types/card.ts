export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface LimitationCardProps extends CardProps {
  limitation?: boolean;
}
