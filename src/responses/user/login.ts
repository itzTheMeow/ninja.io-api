import Customization from "../Customization";

export default interface UserLoginResponse {
  id: string;
  type: "credential"; // unknown
  username: string;
  playerid: string;
  level: number;
  title: "User"; // unknown
  skill: number;
  accounttype: "user"; // unknown
  ts: number;
  products: {}; // unknown
  customization: Customization;
  ciphertext: string;
  clan_id: string | null;
  clan_name: string | null;
  clan_role: "leader" | "captain" | "member" | null;
  addr: string;
  version: string;
}
