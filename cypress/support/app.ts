class App {
    login(email:string) {
    this.navigate(UnauthRoute.Login);
    loginUtil.loginWithCredentials(email, passwordVariants.password);

    return this
    }
    logout = () => {
    topNav.logout();
    return this
    }

    navigate = (route: Route) => {
        cy.visit(route);
        return this;
    };
}

const app = new App();
export {app};