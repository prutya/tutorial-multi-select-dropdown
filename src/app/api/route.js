export async function POST(request) {
  const formData = await request.formData();
  const countries = formData.getAll("countries");

  console.debug("countries", countries);

  return new Response("All good", { status: 200 });
}
