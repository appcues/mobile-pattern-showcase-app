export function redirectSystemPath(event: {
  path: string | null;
  initial: boolean;
}) {
  if (event.path?.startsWith('appcues-16daf46b-3231-4e4a-bb3c-273a4e9100dd')) {
    return null;
  }
  return event.path;
}
