import { inngest } from "./client";

export const hoge = () => {
  return inngest.createFunction(
    { id: "activation-email" },
    { event: "app/user.created" },
    async ({ event, step }) => {
      // Send the user a welcome email
      await step.run("send-welcome-email", () => {
        //sendEmail({ email: event.data.email, template: "welcome" })
      }
      );

      // Wait for the user to create an order, by waiting and
      // matching on another event
      const order = await step.waitForEvent("wait-for-order", {
        event: "app/order.created",
        match: "data.user.id",
        timeout: "24h",
      });

      if (!order) {
        // User didn't create an order within 24 hours; send
        // them an activation email
        await step.run("send-activation-email", async () => {
          // Some code here
        });
      }
    }
  )
};



export const fuga = () => {
  return inngest.createFunction(
    { id: "activation-email" },
    { event: "app/user.created" },
    async ({ event, step }) => {
      // Send the user a welcome email
      await step.run("send-welcome-email", () => {
        //sendEmail({ email: event.data.email, template: "welcome" })
      }
      );

      // Wait for the user to create an order, by waiting and
      // matching on another event
      const order = await step.waitForEvent("wait-for-order", {
        event: "app/order.created",
        match: "data.user.id",
        timeout: "24h",
      });

      if (!order) {
        // User didn't create an order within 24 hours; send
        // them an activation email
        await step.run("send-activation-email", async () => {
          // Some code here
        });
      }
    }
  )
};



export const piyo = () => {
  return inngest.createFunction(
    { id: "activation-email" },
    { event: "app/user.created" },
    async ({ event, step }) => {
      // Send the user a welcome email
      await step.run("send-welcome-email", () => {
        //sendEmail({ email: event.data.email, template: "welcome" })
      }
      );

      // Wait for the user to create an order, by waiting and
      // matching on another event
      const order = await step.waitForEvent("wait-for-order", {
        event: "app/order.created",
        match: "data.user.id",
        timeout: "24h",
      });

      if (!order) {
        // User didn't create an order within 24 hours; send
        // them an activation email
        await step.run("send-activation-email", async () => {
          // Some code here
        });
      }
    }
  )
};