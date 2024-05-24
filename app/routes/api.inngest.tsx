import { serve } from "inngest/remix";
import { inngest } from "~/inngest/client";
import sample from "~/inngest/sample";


const handler = serve({
  client: inngest,
  functions: [sample],
});

export { handler as action, handler as loader };