import React, { ReactNode } from "react";

type Params = {
  params: {
    username: string;
  };
};

export const generateMetadata = ({ params }: Params) => {
  const { username } = params;

  return {
    title: `Grandmaster Profile: ${username}`,
    description: `Detailed stats and information for Grandmaster ${username}`,
    openGraph: {
      title: `Grandmaster ${username}`,
      description: `Chess profile, stats, and recent games for ${username}`,
    },
  };
};

type LayoutProps = {
  children: ReactNode;
};

const PlayerProfileLayout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default PlayerProfileLayout;
