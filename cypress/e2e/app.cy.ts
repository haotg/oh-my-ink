describe("Website flow", () => {
  it("should visit the home page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Touch to Start");
    cy.get("h3").should("contain", "Want to try on Tattoos?");
    cy.get("p").should(
      "contain",
      "Our AI-powered Tattoo try-on machine lets you visualize tattoos on your skin in real time, giving you a true-to-life preview."
    );
    cy.wait(500);
  });

  it("should visit the start page", () => {
    cy.visit("/start");
    cy.get("h1").should("contain", "Oh My Ink");

    cy.get("img")
      .should("have.attr", "src")
      .should("include", "oh_my_ink.avif");

    cy.get("h1").should("contain", "select a design");

    const button = cy.get("button").first();
    button.click();
    cy.wait(800);
    button.next().click();

    cy.wait(800);

    cy.get("div.group h1").eq(1).click();
    cy.wait(500);

    cy.get(".flex.flex-wrap.gap-2 button").first().click();
    cy.wait(500);

    cy.get("[data-slot='card']").first().click();
    cy.wait(500);
  });
});
