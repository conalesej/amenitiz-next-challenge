import React from "react";
import Clock from "./Clock";
import Card from "../UI/Card";

const ProfileActivity = ({ lastOnline }: { lastOnline: number }) => {
  return (
    <Card>
      <Clock lastOnline={lastOnline} />
    </Card>
  );
};

export default ProfileActivity;
