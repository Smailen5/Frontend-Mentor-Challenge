"use client";

import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { useButtonContext } from "@/config/buttonContext";
import { twMerge } from "tailwind-merge";

type ButtonType = "primary" | "secondary" | "readMore" | "submit";

interface ArticleSectionProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: ButtonType;
  className?: string;
}

export const ArticleSection = ({
  title,
  content,
  buttonText,
  onButtonClick,
  className,
}: ArticleSectionProps) => {
  const { buttonActions } = useButtonContext();

  return (
    <div
      className={twMerge(
        "my-4 *:space-y-4 xl:mt-8 xl:grid xl:grid-cols-2",
        className,
      )}
    >
      <Heading className="text-6xl">{title}</Heading>
      <div className="xl:grid xl:grid-cols-2 xl:justify-between xl:gap-y-4">
        <Paragraph className="xl:col-span-2">{content}</Paragraph>
        <Button onClick={buttonActions[onButtonClick]}>{buttonText}</Button>
      </div>
    </div>
  );
};
