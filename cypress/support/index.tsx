import { mount } from "cypress/react";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import "@/app/globals.css";

const createRouter = () => ({
  push: cy.stub(),
  replace: cy.stub(),
  back: cy.stub(),
  forward: cy.stub(),
  refresh: cy.stub(),
  prefetch: cy.stub(),
  pathname: "/",
});

export const cypress = {
  mount: (component: React.ReactNode) => {
    const router = createRouter();
    mount(
      <AppRouterContext.Provider value={router}>
        {component}
      </AppRouterContext.Provider>
    );
  },
};
