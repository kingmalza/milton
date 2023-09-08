import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "King Malza", email: "alessandro.malzanini@gmail.com" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@condio.it" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
