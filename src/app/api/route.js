export async function POST(request) {
  const formData = await request.formData();
  const countries = formData.getAll("countries");

  return new Response(`Selected countries: ${countries.join(", ")}`, {
    status: 200,
  });
}
