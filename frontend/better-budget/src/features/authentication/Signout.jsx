import { Button } from "@mui/material";
import useSignout from "./useSignout";

function Signout() {
  const { signout, isPending } = useSignout();

  return (
    <Button onClick={signout} disabled={isPending} color="inherit">
      SIGN OUT
    </Button>
  );
}

export default Signout;
