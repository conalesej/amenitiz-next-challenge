import { notFound } from "next/navigation";

import BackButton from "@/components/UI/BackButton";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileStats from "@/components/Profile/ProfileStats";

import { API_CONSTANTS } from "@/constants/apis";
import { PlayerProfile } from "@/types/chess";

export const revalidate = 300; // Regenerate page every 5 minutes

const NOT_FOUND = "NOT_FOUND";
const FETCH_ERROR = "FETCH_ERROR";

const fetchPlayer = async (username: string): Promise<PlayerProfile> => {
  const res = await fetch(`${API_CONSTANTS.CHESS_API_PLAYER}/${username}`, {
    next: { revalidate },
  });

  if (res.status === 404) throw new Error(NOT_FOUND);
  if (!res.ok) throw new Error(FETCH_ERROR);

  return res.json();
};

interface ProfilePageProps {
  params: { username: string };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { username } = await params;
  let player: PlayerProfile;

  try {
    player = await fetchPlayer(username);
  } catch (err: unknown) {
    if (err instanceof Error && err.message === NOT_FOUND) {
      return notFound();
    }
    throw err;
  }

  return (
    <>
      <BackButton />
      <ProfileHeader
        username={player.username}
        avatarUrl={player.avatar}
        title={player.name}
        href={player.url}
        lastOnline={player.last_online}
      />
      <ProfileStats {...player} />
    </>
  );
};

export default ProfilePage;
