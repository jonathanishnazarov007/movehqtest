class ContactForm {
    get firstName() {
     return   cy.get('[data-cy=first-name]');
    }
    get lastName() {
        return   cy.get('[data-cy=last-name]');
    }
    get mobilePhone() {
        return   cy.get('[data-cy=mobile-phone-field]');
    }
    get officePhone() {
        return   cy.get('[data-cy=office-phone-field]');
    }
    get homePhone() {
        return   cy.get('[data-cy=home-phone-field]');
    }
    get primaryEmail() {
        return cy.get('[data-cy=primary-email-field]');
    }
    get secondaryEmail() {
        return cy.get('[data-cy=secondary-email-field]');
    }
    get departmentField() {
        return cy.get('[data-cy=department-field]')
    }
    get customerNumber() {
        return cy.get('[data-cy=customer-number-field]')
    }
    
}

const contactForm = new ContactForm();
export { contactForm}
