import { Button } from "@mui/material";
import useSignout from "./useSignout";

function Signout() {
  const { signout, isPending } = useSignout();

  return (
    <Button onClick={signout} disabled={isPending} variant="contained">
      SIGN OUT
    </Button>
  );
}

export default Signout;
