import React from "react";
import { authenticationStore } from "../../../stores/authorization";
import { SessionData } from "react-router";

export default function DASHBOARD() {
  /**
   * Get session function from store
   */
  const { getSession } = authenticationStore();
  /**
   * Get session from getSession function
   */
  const session: SessionData | null = getSession();

  return <div>Welcome {session?.user?.name}</div>;
}
