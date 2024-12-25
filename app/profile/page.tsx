import axios from "axios";

export default async function Profile() {
  const res = await axios.get("http://localhost:3001/api/profile", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  const profile = res.data.avatarUrl;

  return <div>{profile}</div>;
}
