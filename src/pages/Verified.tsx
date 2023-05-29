import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { confirmEmail } from "../redux/auth/auth.service";
import { useNavigate } from "react-router";

export default function Verified() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state: any) => state.auth.id);
  const isEmailConfirmed = useSelector(
    (state: any) => state.auth.isEmailConfirmed
  );

  useEffect(() => {
    dispatch(confirmEmail(id) as any);
    if (isEmailConfirmed === true) {
      return navigate("/");
    }
  }, [dispatch, id, navigate, isEmailConfirmed]);

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      Your email succesfully verified!
    </div>
  );
}
