export async function prepareSubmission(
  data: Record<string, FormDataEntryValue>,
) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  // Replace with your authenticated API call. No customer data is persisted in this demo.
  return { mode: "demo" as const, data };
}
