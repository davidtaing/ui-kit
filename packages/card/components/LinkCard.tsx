import * as React from "react";
import { cx } from "@emotion/css";
import { Box } from "../../styleUtils/modifiers";
import Card, { CardProps } from "./Card";
import { buttonCard, cardLink, cardWithLink } from "../style";
import { LinkProps } from "../../link/types";
import UnstyledLink from "../../link/components/UnstyledLink";

export interface ButtonCardProps extends CardProps {
  /**
   * What screenreaders read aloud for the link
   */
  linkDescription: string;
}

const LinkCard = ({
  openInNewTab,
  linkDescription,
  url,
  children,
  className,
  ...other
}: ButtonCardProps & LinkProps) => {
  return (
    <Card
      className={cx(buttonCard, cardWithLink, className)}
      data-cy="linkCard"
      {...other}
    >
      <>
        <UnstyledLink
          url={url}
          className={cardLink}
          openInNewTab={openInNewTab}
        >
          <Box tag="span" isVisuallyHidden={true}>
            {linkDescription}
          </Box>
        </UnstyledLink>
        {children}
      </>
    </Card>
  );
};

export default React.memo(LinkCard);
