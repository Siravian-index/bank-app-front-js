import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { authUserSchema } from "../schema/user.schema";


export function useUser() {
  const u = useAuthUser()
  return authUserSchema.parse(u)
}