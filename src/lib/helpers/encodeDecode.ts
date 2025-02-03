// import "server-only";

function base64UrlEncode(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(base64Url: string): string {
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(
    Array.prototype.map
      .call(
        atob(base64),
        (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      )
      .join("")
  );
}

export { base64UrlEncode, base64UrlDecode };
