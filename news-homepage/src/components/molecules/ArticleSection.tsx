"use client";

import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { useButtonContext } from "@/config/buttonContext";

type ButtonType = "primary" | "secondary" | "readMore" | "submit";

interface ArticleSectionProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: ButtonType;
}

export const ArticleSection = ({
  title,
  content,
  buttonText,
  onButtonClick,
}: ArticleSectionProps) => {
  const { buttonActions } = useButtonContext();

  return (
    <div className="my-4 *:space-y-4 lg:mt-8 lg:grid lg:grid-cols-2">
      <Heading className="text-6xl">{title}</Heading>
      <div className="lg:grid lg:grid-cols-2 lg:justify-between lg:gap-y-4">
        <Paragraph className="lg:col-span-2">{content}</Paragraph>
        <Button onClick={buttonActions[onButtonClick]}>{buttonText}</Button>
      </div>
    </div>
  );
};
