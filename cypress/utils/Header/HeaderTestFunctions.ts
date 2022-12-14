import { LanguageChangeTestFunctions } from '../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class HeaderTestFunctions {
  getHeader = () => cy.getBySelector('header');

  getLeftElements = () => cy.getBySelector('header-left');

  getRightElements = () => cy.getBySelector('header-right');

  getVerticalLine = () => cy.getBySelector('header-line');

  getUgLogoPL = () => cy.getBySelector('header-ug-logo');

  getEuFlag = () => cy.getBySelector('header-eu-flag');

  private testHeaderContent = () => {
    this.getHeader().should('exist');
    this.getLeftElements().should('exist');
    this.getRightElements().should('exist');
    this.getUgLogoPL().should('be.visible').invoke('height').should('be.equal', 60);
    this.getEuFlag().should('be.visible').invoke('height').should('be.equal', 32);
    this.getVerticalLine().should('have.length', 2);
    LanguageChange.getLanguageChangeButton().should('exist');
  };

  testHeaderContentPL = () => {
    this.testHeaderContent();
    LanguageChange.getLanguageChangeButton().should('exist');
    LanguageChange.getLanguageChangeButton().should('have.text', 'EN');
  };

  testHeaderContentEN = () => {
    this.testHeaderContent();
    LanguageChange.changeLanguage();
    LanguageChange.getLanguageChangeButton().should('exist');
    LanguageChange.getLanguageChangeButton().should('have.text', 'PL');
  };
}
