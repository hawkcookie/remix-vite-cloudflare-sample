import { serve } from "inngest/remix";
import { inngest } from "~/inngest/client";
import {hoge, fuga, piyo} from "~/inngest/sample";


const handler = serve({
  client: inngest,
  functions: [hoge(), fuga(), piyo()],
});

export { handler as action, handler as loader };