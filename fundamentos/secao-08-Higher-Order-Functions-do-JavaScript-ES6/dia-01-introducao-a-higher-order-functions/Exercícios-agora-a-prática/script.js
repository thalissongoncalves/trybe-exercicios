const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase();
    return { fullName, email: '' };
};