import SectionTitle from "@/components/custom/SectionTitle";
import { cypress } from "../support";

describe("SectionTitle.cy.tsx", () => {
  it("should render title correctly in forward mode", () => {
    cypress.mount(<SectionTitle title="Test Title" />);
    cy.get("h1").should("contain", "Test Title");
    cy.get("svg").should("have.length", 1);
  });

  it("should render title correctly in backward mode", () => {
    cypress.mount(<SectionTitle title="Test Title" back />);
    cy.get("h1").should("contain", "Test Title");
    cy.get("a").should("have.attr", "href", "/start");
    cy.get("svg").should("have.length", 1);
  });

  it("should have hover effects", () => {
    // Test forward mode hover
    cypress.mount(<SectionTitle title="Test Title" />);
    cy.get('[data-testid="section-title-forward"]')
      .trigger("mouseover")
      .find("h1")
      .should("have.css", "cursor", "pointer");

    // Test backward mode hover
    cypress.mount(<SectionTitle title="Test Title" back />);
    cy.get("a")
      .trigger("mouseover")
      .find("h1")
      .should("have.css", "cursor", "pointer");
  });
});
