import React from "react";
import { GMListResponse } from "@/types/chess";
import { API_CONSTANTS } from "@/constants/apis";
import ResponsiveGrid from "@/components/Layout/ResponsiveGrid";
import Empty from "@/components/UI/Empty";

export const revalidate = 3600; // ISR: rebuild every hour

async function fetchGmList(): Promise<GMListResponse> {
  const response = await fetch(API_CONSTANTS.CHESS_API_GM_LIST, {
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GM list");
  }

  return response.json();
}

export default async function GrandMasterList() {
  let data: GMListResponse;

  try {
    data = await fetchGmList();
  } catch (error) {
    return (
      <>
        <Empty />
      </>
    );
  }

  return (
    <>
      <h1>Chess.com Grandmasters</h1>
      <ResponsiveGrid.Container>
        {data.players.length > 0 ? (
          data.players.map((username) => (
            <ResponsiveGrid.Item key={username} username={username} />
          ))
        ) : (
          <p>No grandmasters found.</p>
        )}
      </ResponsiveGrid.Container>
    </>
  );
}
