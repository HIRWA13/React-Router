import { useParams } from "react-router-dom";

export default function UserDetails() {
  const params = useParams();
  const userId = params.userId;
  return (
    <div className="text-lg text-center font-bold">
        detais for user {userId}
    </div>
  )
}