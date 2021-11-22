const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');

test('accepts prompts from Manager questions', () => {
    const manager = new Manager(managerQuestions);

    expect(manager.name).toBe(managerQuestions.managerName);
    expect(manager.id).toBe(managerQuestions.managerId);
    expect(manager.email).toBe(managerQuestions.managerEmail);
    expect(manager.office).toBe(managerQuestions.managerOffice);
});