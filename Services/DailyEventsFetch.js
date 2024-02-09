export async function getEvents() {
  const res = await fetch("http://localhost:5000/events/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
