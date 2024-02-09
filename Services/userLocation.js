export const fetchNotes = async function (distance, long, lat) {
  // var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  const res = await fetch(
    `http://127.0.0.1:8000/notes/${distance}/${long}/${lat}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json();
};

export const postNotes = async function (
  user,
  username,
  timestamp,
  text,
  long,
  lat,
) {
  // var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  const reqBody = {
    user_id: "user_id",
    username: "sean123",
    timestamp: "15/08/2023",
    text: "this is the first test note",
    long: "151.20500",
    lat: "-33.89700",
  };
  const res = await fetch(`http://127.0.0.1:8000/notes/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reqBody),
  });
  return res.json();
};
