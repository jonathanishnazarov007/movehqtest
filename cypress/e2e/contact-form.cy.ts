import { app } from "../support/app"
import { contactForm } from "../support/components/contact-form.util"

const contactFormData = {
    firstName: 'Jonathan',
    lastName: 'Ichnazarov',
    officePhone: '4214530602',
    homephone: '9728423242',
    mobilePhone: '4693358020',
    department: 'MoveHQ',
    primaryEmail: 'jichnazarov@movehq.com',
    secondaryEmail: 'rcAckerman@movehq.com',
    customerNumber: '007'
}

describe('Contact form', () => {
    before(() => {
        app.navigate(Route.contactForm)
        cy.path().should('contains', '/contact-form');
    })

    it('should have all the elements of contact form page', ()=> {
    contactForm.customerNumber.should('exist');
    contactForm.departmentField.should('exist');
    contactForm.firstName.should('exist');
    contactForm.homePhone.should('exist');
    contactForm.lastName.should('exist');
    contactForm.mobilePhone.should('exist');
    contactForm.officePhone.should('exist');
    contactForm.primaryEmail.should('exist');
    contactForm.secondaryEmail.should('exist');
    cy.get('[data-cy=save-button]').should('exist');
    });
    it('should be able to save the contact form successfuly', ()=> {
    contactForm.customerNumber.type(contactFormData.customerNumber);
    contactForm.departmentField.type(contactFormData.department);
    contactForm.firstName.type(contactFormData.firstName);
    contactForm.lastName.type(contactFormData.lastName);
    contactForm.homePhone.type(contactFormData.homephone);
    contactForm.mobilePhone.type(contactFormData.mobilePhone);
    contactForm.officePhone.type(contactFormData.officePhone);
    contactForm.primaryEmail.type(contactFormData.primaryEmail);
    contactForm.secondaryEmail.type(contactFormData.secondaryEmail);
    cy.get('[data-cy=save-button]').click();
    cy.get('[data-cy=saved-succefully-modal').should('have.text', 'Contact form succesfully saved');
    })
    it('contact type should always be "Transferee"', () => {
    cy.get('[data-cy=contact-type-dropdown').invoke('text').should('have.text', 'Transferee')
    })

    it('should have all the data saved after refreshing the page', () => {
        // app.login() should login and visit contact form page, logic for this function is not finished. It will take couple days to create all the util files i need and connect them to App.ts file.
        //we can also use Routes to go to a certain page and put it inside of the function as well. App.ts file has some examples of the simple functions that i created but not implemented in this test suite.
        cy.reload();
        contactForm.customerNumber.should('have.text', contactFormData.customerNumber);
        contactForm.departmentField.should('have.text', contactFormData.department);
        contactForm.firstName.should('have.text', contactFormData.firstName);
        contactForm.homePhone.should('have.text', contactFormData.homephone);
        contactForm.lastName.should('have.text', contactFormData.lastName);
        contactForm.mobilePhone.should('have.text', contactFormData.mobilePhone);
        contactForm.officePhone.should('have.text', contactFormData.officePhone);
        contactForm.primaryEmail.should('have.text', contactFormData.primaryEmail);
        contactForm.secondaryEmail.should('have.text', contactFormData.secondaryEmail);
    })
})